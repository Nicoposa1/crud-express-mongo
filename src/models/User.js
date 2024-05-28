var mongoose = require("mongoose");

var schema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  firstName: {
    type: String,
    default: "",
  },
  lastName: {
    type: String,
    default: "",
  },
  phone: string,
});

var user = new mongoose.model("User", schema);
module.exports = user;
