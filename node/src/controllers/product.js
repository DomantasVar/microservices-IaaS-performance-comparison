const Product = require("../models/product.js");

// Retrieve all Products from the database.
exports.findAll = (req, res) => {
  Product.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving customers."
      });
    else res.send(data);
  });
};

// Retrieve product with indicated SKU
exports.findOne = (req, res) => {
  Product.findBySKU(req.params.SKU, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Product with id ${req.params.SKU}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Product with id " + req.params.SKU
        });
      }
    } else res.send(data);
  });
};

exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  console.log(req.body);

  // Create a Product
  const product = new Product({
    name: req.body.name,
    sku: req.body.sku,
    description: req.body.description
  });

  console.log(product);

  // Save Customer in the database
  Product.create(product, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Product."
      });
    else res.send(data);
  });
};

