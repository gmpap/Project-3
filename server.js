const express = require('express');
const connectDB = require('./config/db');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

var MONGODB_URI =
  process.env.MONGODB_URI || 'mongodb://localhost/mongoHeadlines';
mongoose.connect(
  'mongodb+srv://gmp123:gmp123@devconnectapp-9qjto.mongodb.net/test?retryWrites=true&w=majority'
);
//mongoose.connect(MONGODB_URI);

app.use('/', express.static(path.join(__dirname, 'client/build')));
//TO CALL ENV VARIABLES
require('dotenv').config();

//conect to db
connectDB();

//init middleware

app.use(express.json({ extended: false }));

app.use('/', express.static(path.join(__dirname, 'client/build')));

// app.get('/', (req, res) => res.send('API running'));

app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
