const productRouter = require("express").Router();
const Product = require("../models/productSchema");

//get all products
productRouter.get("/", (request, response) => {
  Product.find({})
    .then((products) => {
      response.status(200).json(products);
    })
    .catch((err) => {
      response.status(400);
    });
});

//get one product
productRouter.get("/:id", (request, response) => {
  Product.findById(request.params.id)
    .then((product) => {
      response.status(200).json(product);
    })
    .catch((err) => {
      response.status(400);
    });
});

//post new product
productRouter.post("/", (request, response) => {
  const body = request.body;

  const product = new Product({
    name: body.name,
    description: body.description,
    image: body.image,
  });

  product
    .save()
    .then((savedProduct) => {
      response.status(200).json(savedProduct);
    })
    .catch((err) => response.status(400).json(err));
});

module.exports = productRouter;
