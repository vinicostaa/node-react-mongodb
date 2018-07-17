const express = require("express"); //back end - node
// import express from 'express'; //front end - react
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("./config/keys");

const app = express(); // represents route handlers

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClienteID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    acessToken => {
      console.log(acessToken);
    }
  )
);

app.get("/", (req, res) => {
  res.send({ hi: "deploy github integration" });
});

app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"] 
  })
);

// process.env.PORT -> Server inject envivolments

const PORT = process.env.PORT || 5000;
app.listen(PORT);
