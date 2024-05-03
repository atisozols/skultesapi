// .env
require('dotenv').config();

// express
const express = require('express');

const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const corsOptions = require('./config/corsOptions');

const PORT = process.env.PORT || 5000;

app.use('/webhook', require('./routes/api/webhook'));

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/checkout/', require('./routes/api/checkout'));

app.use('/api/pricing/', require('./routes/api/pricing'));

app.use('/api/availability/', require('./routes/api/availability'));

app.use('/api/dashboard/', require('./routes/api/dashboard'));

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
