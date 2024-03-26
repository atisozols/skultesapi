const moment = require('moment');
const Appointment = require('../model/Appointment');

const getAvailability = async (req, res) => {
  try {
    const currentDay = moment().utcOffset(0, true).startOf('day');

    // Generate an array of dates for the whole week
    const weekDates = [];
    for (let i = 0; i < 14; i += 1) {
      const date = moment(currentDay).add(i, 'days');
      weekDates.push(date.startOf('day').toDate());
    }

    // Fetch availability data from the database
    const unavailableRanges = await Appointment.aggregate([
      {
        $match: {
          date: { $gte: currentDay.toDate() },
          status: 'paid',
        },
      },
      {
        $group: {
          _id: {
            year: { $year: '$date' },
            month: { $month: '$date' },
            day: { $dayOfMonth: '$date' },
          },
          ranges: { $push: '$range' },
        },
      },
    ]);

    // Merge availability data with the whole week's dates
    const availability = weekDates.map((date) => {
      const foundAvailability = unavailableRanges.find((avail) => {
        // eslint-disable-next-line no-underscore-dangle
        const { year, month, day } = avail._id;
        const availDate = new Date(year, month - 1, day);
        return moment(date).isSame(availDate, 'day');
      });

      return {
        date,
        ranges: foundAvailability ? foundAvailability.ranges : [],
      };
    });

    res.json(availability);
  } catch (error) {
    console.error('Error fetching availability:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { getAvailability };
