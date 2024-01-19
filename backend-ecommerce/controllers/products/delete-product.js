const { eliminateProduct } = require("../../models/products");
const errors = require("../../misc/errors");

module.exports = (db) => async (req, res, next) => {
  const { id } = req.params;
  const elimination = await eliminateProduct(await db)(id);

  if (!elimination) return next(errors[500]);

  res.status(200).json({
    success: true,
  });
};
