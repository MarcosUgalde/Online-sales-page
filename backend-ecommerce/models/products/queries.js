const { sql } = require("slonik");

const insertProduct = (
  product_name,
  description,
  genre,
  quantity
) => sql.unsafe`
    INSERT INTO products (
        product_name, description, genre, quantity
    ) VALUES (
        ${product_name}, ${description}, ${genre}, ${quantity}
    )
`;

module.exports = {
  insertProduct,
};
