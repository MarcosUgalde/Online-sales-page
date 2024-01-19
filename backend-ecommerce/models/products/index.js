const { insertProduct, selectOneProduct } = require("./queries");

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

const getOneProduct = (db) => async (id) => {
  try {
    const response = await db.query(selectOneProduct(id));

    return {
      ok: true,
      response: response.rows,
    };
  } catch (error) {
    console.info("Select One Product error: ", error.message);
    return {
      ok: false,
      message: error.message,
    };
  }
};

module.exports = {
  addProduct,
  getOneProduct,
};
