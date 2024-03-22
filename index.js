// .env
require('dotenv').config();

// express
const express = require('express');

const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const corsOptions = require('./config/corsOptions');

const PORT = process.env.PORT || 5000;

// MongoDB/mongoose
const connectDB = require('./config/dbConnection');

connectDB();

app.use('/webhook', require('./routes/api/webhook'));

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/checkout/', require('./routes/api/checkout'));

app.use('/api/pricing/', require('./routes/api/pricing'));

app.use('/api/availability/', require('./routes/api/appointments'));

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => console.log(`Server running on ${PORT}`));
});
