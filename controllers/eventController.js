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
const addEventToCalendar = (appointment, calendar, atendee) => {
  console.log('atendee: ', atendee);
  const eventDetails = {
    // eslint-disable-next-line no-underscore-dangle
    id: appointment._id,
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
    atendees: [],
  };

  if (atendee) eventDetails.atendees.push({ email: atendee });

  try {
    const response = calendar.events.insert({
      calendarId: 'c4298fa15b1f42cc44bc7e3f834ab046f6ede03a346d67db5c2ae6f063293092@group.calendar.google.com',
      resource: eventDetails,
    });

    return response.data;
  } catch (error) {
    console.error('Error adding event: ', error);
    throw error;
  }
};

module.exports = { addEventToCalendar, calendarInstance };
