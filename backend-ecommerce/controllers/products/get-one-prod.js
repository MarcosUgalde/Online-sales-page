const { getOneProduct } = require("../../models/products");
const errors = require("../../misc/errors");

module.exports = (db) => async (req, res, next) => {
  const { id } = req.params;
  const product = await getOneProduct(await db)(id);

  if (!product.ok) return next(errors[500]);

  res.status(200).json({
    success: true,
    data: product.response,
  });
};
