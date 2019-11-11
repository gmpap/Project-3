//Create schema for our Users Model
//bring in mongoose
const mongose = require('mongoose');

//create schema, takes in object with all fields we want(name, email (login), password, avatar (image), creation date)
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

//set exports to variable User, which is set to mongoose model.
//This model takes in model name (user), and the schema
module.exports = User = mongoose.model('user', UserSchema);
