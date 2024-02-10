const Appointment = require('../model/Appointment');
const moment = require('moment');

const getAvailability = async (req, res) => {
    try {
        const currentWeekMonday = moment().startOf('isoWeek');

        const appointments = await Appointment.aggregate([
            {
                $match: {
                    date: { $gte: currentWeekMonday.toDate() },
                    status: 'paid'
                }
            }
        ]);

        res.json(appointments);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
}

module.exports = { getAvailability };
