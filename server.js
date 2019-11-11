// start express sever
const express = require('express');

//imports db.js contents for use here
const connectDB = require('./config/db');

// intialize app variable with express
const app = express();

//connect to DB
connectDB();

//Intitialize body parser middleware (bodyParser.json now express.json) for use in 
app.use(express.json({extended: false}))

//single endpoint to the browser
//in postman run get using http://localhost:3000  it will return api is running
app.get('/', (req, res) => res.send('API is running'));

//Access our routes
//access particular users file, as well as all other routers
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/profile', require('./routes/api/profile'));

//define a port variable.  When deployed to Heroku it will look for a variable called PORT
//locally it will run on port 3000.
const PORT = process.env.PORT || 3000;

//Once connect to port, console log the message.
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
