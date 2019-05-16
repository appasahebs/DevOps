var mongoose = require("mongoose");
var Schema = mongoose.Schema;
module.exports = mongoose.model('Temp', new Schema({
  username: String,
  email: String,
  password: String,
  admin: Boolean
}))