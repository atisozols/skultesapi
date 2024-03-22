const { google } = require('googleapis');

// Set up JWT authentication
const jwtClient = new google.auth.JWT(
  process.env.GOOGLE_USER,
  null,
  process.env.GOOGLE_KEY,
  ['https://www.googleapis.com/auth/calendar'],
);

// Create a new calendar instance
const calendarInstance = google.calendar({ version: 'v3', auth: jwtClient });

// Function to add an event to Google Calendar
const addEventToCalendar = (appointment, calendar) => {
  const eventDetails = {
    summary: appointment.name,
    colorId: '3',
    description: appointment.phone,
    start: {
      dateTime: `${appointment.date.toISOString().slice(0, 10)}T${appointment.range.start.time}:00`,
      timeZone: 'Europe/Riga',
    },
    end: {
      dateTime: `${appointment.date.toISOString().slice(0, 10)}T${appointment.range.end.time}:00`,
      timeZone: 'Europe/Riga',
    },
  };

  try {
    const response = calendar.events.insert({
      calendarId: 'c4298fa15b1f42cc44bc7e3f834ab046f6ede03a346d67db5c2ae6f063293092@group.calendar.google.com', // Use the calendar ID of the fixed calendar you want to add events to
      resource: eventDetails,
    });
    // console.log('Event added: ', response.data);
    return response.data;
  } catch (error) {
    console.error('Error adding event: ', error);
    throw error;
  }
};

module.exports = { addEventToCalendar, calendarInstance };
