const imageRouter = require("express").Router();
const Image = require("../models/ImageSchema");

//get all images
imageRouter.get("/", (request, response) => {
  Image.find({})
    .then((images) => {
      response.status(200).json(images);
    })
    .catch((err) => {
      response.status(400);
    });
});

//post new images
imageRouter.post("/", (request, response) => {
  const body = request.body;

  const image = new Image({
    name: body.name,
    url: body.url,
  });

  image
    .save()
    .then((savedImage) => {
      response.status(200).json(savedImage);
    })
    .catch((err) => response.status(400).json(err));
});

module.exports = imageRouter;
