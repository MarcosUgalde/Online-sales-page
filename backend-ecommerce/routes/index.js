const router = require("express").Router();

const authRoutes = require("./auth");
const userRoutes = require("./user");
const productsRoutes = require("./products");

module.exports = (db) => {
  router.use("/auth", authRoutes(db));
  router.use("/user", userRoutes(db));
  router.use("/products", productsRoutes(db));

  return router;
};
