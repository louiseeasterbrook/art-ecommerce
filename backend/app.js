const express = require("express");
const app = express();
const cors = require("cors");
const productRouter = require("./controllers/productApi");
const imageRouter = require("./controllers/imagesApi");
const middleware = require("./utils/middleware.js");

require("dotenv").config();

module.exports = app;

app.use(cors());
app.use(express.static("build"));
app.use(express.json());
app.use(middleware.requestLogger);

//routes
app.use("/api/products", productRouter);
app.use("/api/slideshow", imageRouter);

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
