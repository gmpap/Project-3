// start express sever
const express = require('express');

// intialize app variable with express
const app = express();

//single endpoint to the browser
app.get('/', (req, res) => res.send('API is running'));

//define a port variable.  When deployed to Heroku it will look for a variable called PORT
//locally it will run on port 3000.
const PORT = process.env.PORT || 3000;

//Once connect to port, console log the message.
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
