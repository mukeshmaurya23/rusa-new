// init monogoose to connect to monogoDB server
const mongoose = require("mongoose");
// our server path
// Use .env for production
const local_url =
  "mongodb+srv://mukesh:Mau10023@cluster0.y2bju.mongodb.net/Program?retryWrites=true&w=majority";

// connect with debugg

const connectDB = async () => {
  return mongoose
    .connect(local_url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log("DB connected ..");
    });
};

module.exports = connectDB;
