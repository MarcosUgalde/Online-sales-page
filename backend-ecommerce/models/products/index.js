const { insertProduct } = require("./queries");

const addProduct =
  (db) => async (product_name, description, genre, quantity) => {
    try {
      const product = await db.query(
        insertProduct(product_name, description, genre, quantity)
      );
      return {
        ok: true,
        data: product,
      };
    } catch (error) {
      console.info("Insert product error: ", error.message);
      return {
        ok: false,
        message: error.message,
      };
    }
  };

module.exports = {
  addProduct,
};
