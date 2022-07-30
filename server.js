require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World");
});

const PORT = process.env.PORT || 8000;

mongoose.connect(process.env.URI).then(() => {
  console.log("connected to mongo 😆");
  app.listen(PORT, () => {
    console.log(`listening on port ${PORT}😄`);
  });
});
