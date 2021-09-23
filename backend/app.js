const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const productRouter = require("./controllers/productApi");
const imageRouter = require("./controllers/imagesApi");

require("dotenv").config();

module.exports = app;

//connect to database
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("connect to mongo db");
  })
  .catch((err) => {
    console.log(`error connecting to mondoDB: ${err}`);
  });

app.use(cors());
app.use(express.json());

//routes
app.use("/api/products", productRouter);
app.use("/api/slideshow", imageRouter);

module.exports = app;
