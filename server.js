// start express sever
const express = require('express');
const path = require('path');
//imports db.js contents for use here
const connectDB = require('./config/db');

// intialize app variable with express
const app = express();

//Intitialize body parser middleware (bodyParser.json now express.json) for use in
// app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

//single endpoint to the browser
//in postman run get using http://localhost:3000  it will return api is running
app.get('/', (req, res) => res.send('API is running'));

//Access our routes
//access particular users file, as well as all other routers
/* app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/profile', require('./routes/api/profile')); */
app.use(require('./routes'));

// Send every other request to the React app
// Define any API routes before this runs
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});

//define a port variable.  When deployed to Heroku it will look for a variable called PORT
//locally it will run on port 3000.
const PORT = process.env.PORT || 3001;

//connect to DB
connectDB().then(() => {
  //Once connect to port, console log the message.
  app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
});
