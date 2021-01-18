module.exports = app => {
  const products = require("../controllers/product.js");

// Retrieve all Products
  app.get("/products", products.findAll);


//Retrieve product with SKU
  app.get("/products/:SKU", products.findOne);

// Create a new Product
  app.post("/products", products.create);

};
