const router = require("express").Router();
const { authorizer } = require("../midlewares");

const productControllers = require("../controllers/products");

module.exports = (db) => {
  router.post("/new", authorizer(), productControllers.addProduct(db));
  router.get("/", productControllers.getProducts(db));
  router.get("/:id", productControllers.getOneProduct(db));
  router.put("/score/:id", authorizer(), productControllers.updateRating(db));
  router.put("/:id", authorizer(), productControllers.updateProduct(db));
  router.delete("/:id", authorizer(), productControllers.deleteProduct(db));

  return router;
};
