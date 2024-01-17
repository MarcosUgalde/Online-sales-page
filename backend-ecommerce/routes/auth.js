const router = require("express").Router();
const { authorizer, fieldsValidator } = require("../midlewares");

const authControllers = require("../controllers/auth");

const signupValidator = fieldsValidator("email", "username", "password");

module.exports = (db) => {
  router.post("/signup", signupValidator, authControllers.signup(db));

  return router;
};
