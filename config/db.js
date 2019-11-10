// connect to mongo db
const mongoose = require('mongoose');
const config = require('config');

//create a db variable to read the string from config.json
const db = config.get('mongoURI');

//connect to db using async await, using try catch block...similar to get then
//create variable to call in server.js
const connectDB = async () => {
  try {
    //since mongoose.connect returns a promise, we want to await for that promise
    //note:  fixes depreciation warnings
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    //if succesful, return the message
    console.log('db connected....');
  } catch (err) {
    //if error occurs console the error
    console.log(err.message);
    //now we want to stop the process if failure occurs
    process.exit(1);
    //This allows node.js to exit the code naturally, w/o leaving anything hanging
    //process.exitCode = 1;
  }
};
//Exports connectDb for use in other files
module.exports = connectDB;
