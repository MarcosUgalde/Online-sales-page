const { getProducts } = require("../../models/products");
const errors = require("../../misc/errors");

module.exports = (db) => async (req, res, next) => {
  const products = await getProducts(await db)();

  if (!products.ok) return next(errors[500]);

  res.status(200).json({
    success: true,
    data: products.response,
  });
};
