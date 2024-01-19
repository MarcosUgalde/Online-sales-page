const { updateProducts } = require("../../models/products");
const errors = require("../../misc/errors");

module.exports = (db) => async (req, res, next) => {
  const { id } = req.params;
  const { product_name, description, genre, quantity } = req.body;
  const updated = await updateProducts(await db)(
    product_name,
    description,
    genre,
    quantity
  );

  if (!updated) return next(errors[500]);

  res.status(200).json({
    success: true,
    data: update.response,
  });
};
