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

const selectProducts = () => sql.unsafe`
        SELECT * FROM products
`;

const updateProducts = (
  product_name,
  description,
  genre,
  quantity,
  id
) => sql.unsafe`
    UPDATE products
    SET
    product_name = ${product_name},
    description = ${description},
    genre = ${genre},
    quantity = ${quantity}
    WHERE id = ${id}
`;

module.exports = {
  insertProduct,
  selectOneProduct,
  selectProducts,
  updateProducts,
};
