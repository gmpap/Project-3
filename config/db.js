// connect to mongo db
const mongoose = require('mongoose');
const config = require('config');

//create a db variable to read the string from config.json
//const db = process.env.MONGOURI;
const db =
  'mongodb+srv://gmp123:gmp123@devconnectapp-9qjto.mongodb.net/test?retryWrites=true&w=majority';
//connect to db using async await, using try catch block...similar to get then
//create variable to call in server.js
const connectDB = async () => {
  try {
    //since mongoose.connect returns a promise, we want to await for that promise
    //note:  fixes depreciation warnings
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
    //if succesful, return the message
    console.log('db is now connected....');
  } catch (err) {
    //if error occurs console the error
    console.error(err);
    //now we want to stop the process if failure occurs
    //process.exit(1);
    //This allows node.js to exit the code naturally, w/o leaving anything hanging
    process.exitCode = 1;
  }
};
//Exports connectDb for use in other files
module.exports = connectDB;
