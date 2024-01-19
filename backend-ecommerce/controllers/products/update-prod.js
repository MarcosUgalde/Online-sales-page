const { editProduct } = require("../../models/products");
const errors = require("../../misc/errors");

module.exports = (db) => async (req, res, next) => {
  const { id } = req.params;
  const { product_name, description, genre, quantity } = req.body;
  const updated = await editProduct(await db)(
    product_name,
    description,
    genre,
    quantity,
    id
  );

  if (!updated.ok) return next(errors[500]);

  res.status(200).json({
    success: true,
    data: updated.response,
  });
};
