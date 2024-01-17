const { addProduct } = require("../../models/products");
const errors = require("../../misc/errors");

module.exports = (db) => async (req, res, next) => {
  const { product_name, description, genre, quantity } = req.body;

  const newProduct = await addProduct(await db)(
    product_name,
    description,
    genre,
    quantity
  );

  if (!newProduct) return next(errors[500]);

  res.status(200).json({
    success: true,
    data: newProduct.data,
  });
};
