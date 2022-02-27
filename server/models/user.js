const mongoose = require("mongoose");
// User
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "must provide name"],
    trim: true,
    maxlength: [50, "name can not be more than 20 characters"],
  },
  email: {
    type: String,
    required: [true, "must provide name"],
    trim: true,
    maxlength: [50, "name can not be more than 20 characters"],
  },
  course: {
    type: String,
    required: [true, "must provide name"],
    trim: true,
    maxlength: [50, "name can not be more than 20 characters"],
  },
});

module.exports = mongoose.model("user", userSchema);
