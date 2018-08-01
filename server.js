const express = require('express');
const path = require('path');

const dotEnv = require("dotenv").config();
const morgan = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
// const	apiAuthRouter = require("./server/routes/api/auth.js");
// const apiUsersRouter = require("./server/routes/api/users.js");
const igdb = require("igdb-api-node").default;

const app = express();
const port = process.env.PORT || 5000;

// connect to db
// process.env.MONGOLAB_URI is DEPRECATED
// process.env.MONGODB_URI is needed for when we deploy to Heroku
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/start-select-db");

//----------
// log requests to STDOUT
app.use(morgan("dev"));

//----------
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//----------
// parse application/json
app.use(bodyParser.json());

//----------
// This is how we read the cookies sent over from the browser
app.use(cookieParser());

//----------
// set static file root folder
app.use(express.static(__dirname + "/client/public"));

//----------
// IGDB
const apiKey = process.env.IGDB_API_KEY;
const client = igdb(apiKey);

// API calls
//----------
app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

//----------
app.get("/api/getVideoGameData", function(req, res) {
  console.log("REQ", req.query.query);
  client
    .games({
      search: req.query.query, // Sends search query
      fields: ["name", "cover"],
      limit: 25, // Limit to 5 results
      offset: 0 // Index offset for results
    })
    .then(response => {
      console.log(response.body);
      res.send(response.body);
    }, err => console.log(err))
    .catch(error => {
      console.log('catch', error);
      throw error;
    });
});

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));

  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

//----------
// TODO:
// app.use("/api/auth", apiAuthRouter);
// app.use("/api/users", apiUsersRouter);

//----------
app.listen(port, () => console.log(`Listening on port ${port}`));