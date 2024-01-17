const router = require("express").Router();

const authRoutes = require("./auth");
const userRoutes = require("./user");

module.exports = (db) => {
  router.use("/auth", authRoutes(db));
  router.use("/user", userRoutes(db));

  return router;
};
