const express = require("express");
const cors = require("cors");
var bodyParser = require("body-parser");

const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

const app = express();
// const port = process.env.PORT || 5000;
const port = 5000;
const api1 = require("./routes/api");
const connectDB = require("./db/connect");
// require('dotenv').config();
// const notFound = require('./middleware/not-found');
// const errorHandlerMiddleware = require('./middleware/error-handler');

// middleware

// app.use(express.static('./public'));
// app.use(express.json());

// Routes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors(corsOptions));
app.use("/api/v1", api1);

// app.use(notFound);
// app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    // await connectDB(process.env.MONGO_URI);
    await connectDB();
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();

// Importing required modules
// const cors = require('cors');
// const express = require('express');

// parse env variables
// require('dotenv').config();
// Configuring port
// const port = process.env.PORT || 9000;
// const app = express();
// Configure middlewares
// app.use(cors());
// app.use(express.json());

// app.set('view engine', 'html');

// Static folder
// app.use(express.static(__dirname + '/views/'));

// Defining route middleware
// app.use('/api', require('./routes/api'));

// Listening to port
// app.listen(port);
// console.log(`Listening On http://localhost:${port}/api`);
// module.exports = app;
