const Appointment = require('../model/Appointment')
const moment = require('moment')

const handleNewAppointments = async (req, res) => {
    req.body.forEach(appointment => {
        const startRange = appointment.start_index; // Replace with your start range value
        const endRange = appointment.end_index; // Replace with your end range value
        const inputDate = appointment.date // Replace with your input date

        const inputStart = moment(inputDate).startOf('day').toDate();
        const inputEnd = moment(inputDate).endOf('day').toDate();

        Appointment.aggregate([
        {
            $match: {
            date: {
                $gte: inputStart,
                $lte: inputEnd
            }
            }
        },
        {
            $match: {
            $or: [
                {
                'range.start.index': { $gte: startRange, $lte: endRange }
                },
                {
                'range.end.index': { $gte: startRange, $lte: endRange }
                },
                {
                $and: [
                    { 'range.start.index': { $lte: startRange } },
                    { 'range.end.index': { $gte: endRange } }
                ]
                }
            ]
            }
        }
        ])
        .exec((err, appointments) => {
        if (err) {
            console.error(err);
        } else {
            console.log('Appointments with overlapping ranges:', appointments);
            if (appointments) return res.sendStatus(409)
        }
        });
    });
    
    try{

    } 
    catch (){

    }

}