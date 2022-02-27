const mongoose = require("mongoose");

// Program
const TaskSchema = new mongoose.Schema({
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
});

// Collection Program A

module.exports = mongoose.model("Coding", TaskSchema);
