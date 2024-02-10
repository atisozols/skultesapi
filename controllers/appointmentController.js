const Appointment = require('../model/Appointment');
const moment = require('moment');

const getAvailability = async (req, res) => {
    try {
        const currentWeekMonday = moment().startOf('day');

        const unavailableRanges = await Appointment.aggregate([
            {
                $match: {
                    date: { $gte: currentWeekMonday.toDate() },
                    status: 'paid'
                }
            },
            {
                $group: {
                    _id: {
                        year: { $year: "$date" },
                        month: { $month: "$date" },
                        day: { $dayOfMonth: "$date" }
                    },
                    ranges: { $push: "$range" }
                }
            }
        ]);

        const availability = unavailableRanges.map(availabilityDate => {
            const { year, month, day } = availabilityDate._id;
            const date = new Date(year, month - 1, day);

            availabilityDate.ranges.sort((a, b) => a.start.index - b.start.index);

            return {
                date,
                ranges: availabilityDate.ranges
            };
        });

        availability.sort((a, b) => a.date - b.date);

        res.json(availability);
    } catch (error) {
        console.error("Error fetching availability:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

module.exports = { getAvailability };
