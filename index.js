const express = require("express"); //back end - node
// import express from 'express'; //front end - react

const app = express(); // represents route handlers

app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

// process.env.PORT -> Server inject envivolments 

const PORT = process.env.PORT || 5000;
app.listen(PORT);