const router = require("express").Router();
const { authorizer } = require("../midlewares");

const userControllers = require("../controllers/user");

module.exports = () => {
  router.get("/", authorizer(), userControllers.getUser());

  return router;
};
