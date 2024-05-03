const moment = require('moment-timezone');
const knexInstance = require('../config/knex');

const getAvailability = async (req, res) => {
  try {
    const currentDay = moment().tz('Europe/Riga').startOf('day').utc(true);

    // Generate an array of dates for the whole week
    const weekDates = [];
    for (let i = 0; i < 14; i += 1) {
      const date = moment(currentDay).add(i, 'days');
      weekDates.push(date.startOf('day').toISOString().split('T')[0]);
    }

    // Fetch appointments within the next two weeks
    const appointments = await knexInstance
      .queryBuilder()
      .from('appointments')
      .select('date', 'start_index', 'end_index')
      .whereBetween('date', [weekDates[0], weekDates[weekDates.length - 1]])
      .orderBy('date');

    // Group appointments by date
    const appointmentsByDate = {};
    appointments.forEach((appointment) => {
      const date = moment(appointment.date).utc(true).toISOString().split('T')[0];
      if (!appointmentsByDate[date]) {
        appointmentsByDate[date] = [];
      }
      appointmentsByDate[date].push({
        start_index: appointment.start_index,
        end_index: appointment.end_index,
      });
    });

    // Merge availability data with the whole week's dates
    const availability = weekDates.map((date) => ({
      date: moment(date).utc(true).toDate(),
      ranges: appointmentsByDate[date] || [],
    }));

    res.json(availability);
  } catch (error) {
    console.error('Error fetching availability:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { getAvailability };
