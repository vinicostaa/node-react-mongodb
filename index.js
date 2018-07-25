const express = require("express"); //back end - node
// import express from 'express'; //front end - react
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require('body-parser');
const keys = require("./config/keys");
require("./models/User"); // creating model User in mongodb
require("./services/passport"); // configuring passport authentication

mongoose.connect(keys.mongoURI);

const app = express(); // represents route handlers

app.use(bodyParser.json());

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 100, // 30 days
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);
require("./routes/billingRoutes")(app);

// process.env.PORT -> Server inject envivolments for example HEROKU
const PORT = process.env.PORT || 5000;
app.listen(PORT);
