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

const selectOneProduct = (id) => sql.unsafe`
        SELECT * FROM products
        WHERE products.id = ${id}
`;

module.exports = {
  insertProduct,
  selectOneProduct,
};
