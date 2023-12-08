const Appointment = require('../model/Appointment');
const moment = require('moment');
const pricing = require('../config/pricing')
const timeslots = require('../config/timeslots')

const createAppointmentMiddleware = async (req, res, next) => {

    const cart = []
    try {
        const conflictingAppointments = req.body.map(appointment => {
        // Check pricing availability based on start and end range
        const startRange = appointment.start_index
        const endRange = appointment.end_index
        const selectedPricing =  startRange > 30 ? pricing.standard : pricing.morning;
        const price = selectedPricing[endRange - startRange];

        if (!price) {
        return res.status(400).send({ msg: "Bad request: No pricing available for this timeslot range!" });
        }

        cart.push({
        name: appointment.name,
        phone: appointment.phone,
        date: appointment.date,
        range:{
            start:{
                index: appointment.start_index,
                time: timeslots[appointment.start_index]
            },
            end:{
                index: appointment.end_index,
                time: timeslots[appointment.end_index]
            }
        },
        price: price * 100
        })
        // Check for overlapping appointments
        const inputStart = moment(appointment.date).startOf('day').toDate();
        const inputEnd = moment(appointment.date).endOf('day').toDate();

        return Appointment.find({
        date: {
            $gte: inputStart,
            $lte: inputEnd
        },
        // status: 'paid',
        $or: [
            {
              'range.start.index': { $lt: endRange },
              'range.end.index': { $gt: startRange }
            },
            {
              $and: [
                { 'range.start.index': { $gte: startRange, $lt: endRange } },
                { 'range.end.index': { $gt: endRange } }
              ]
            },
            {
              $and: [
                { 'range.start.index': { $lt: startRange } },
                { 'range.end.index': { $lte: endRange, $gt: startRange } }
              ]
            }
        ]});
    });


    // Process appointments asynchronously
    const results = await Promise.all(conflictingAppointments);

    // Check if any results indicate overlapping appointments
    const hasOverlap = results.some(appointments => appointments.length > 0);
    if (hasOverlap) {
      return res.status(409).send({msg: "Conflict: Overlapping appointments!"});
    }
    // Move to the next middleware/route handler

    req.body = cart

    next();
  } catch (error) {
    console.error(error);
    res.status(500).send({ msg: "Internal server error" });
  }
};

module.exports = { createAppointmentMiddleware };
