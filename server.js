const express = require('express');
const connectDB = require('./config/db');
const app = express();

//conect to db
connectDB();

app.get('/', (req, res) => res.send('API running'));

app.use('/api/users', require('./routes/api'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
