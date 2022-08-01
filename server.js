require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes..

app.use("/auth", require("./router/AuthRouter"));
app.use("/user", require("./router/dashboardRouter"));
app.get("/", (req, res) => {
  res.send("Hello World");
});

//port initialization and database connection....

const PORT = process.env.PORT || 8000;

mongoose
  .connect(process.env.URI)
  .then(() => {
    console.log("connected to mongo 😆");
    app.listen(PORT, () => {
      console.log(`listening on port ${PORT}😄`);
    });
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
