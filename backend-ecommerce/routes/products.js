const router = require("express").Router();
const { authorizer } = require("../midlewares");

const productControllers = require("../controllers/products");

module.exports = (db) => {
  router.post("/new", authorizer(), productControllers.addProduct(db));

  return router;
};
