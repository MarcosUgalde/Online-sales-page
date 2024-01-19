const { editRating } = require("../../models/products");
const errors = require("../../misc/errors");

module.exports = (db) => async (req, res, next) => {
  const { id } = req.params;
  const { score, votes_by_customers } = req.body;

  const updatedScore = await editRating(await db)(
    score,
    votes_by_customers,
    id
  );

  if (!updatedScore.ok) return next(errors[500]);

  res.status(200).json({
    success: true,
    data: updatedScore.response,
  });
};
