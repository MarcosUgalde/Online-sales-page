const {
  insertProduct,
  selectOneProduct,
  selectProducts,
  updateProducts,
  updateRatings,
  deleteProduct,
} = require("./queries");

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

const getProducts = (db) => async () => {
  try {
    const response = await db.query(selectProducts());

    return {
      ok: true,
      response: response.rows,
    };
  } catch (error) {
    console.info("Get all pruducts error", error.message);
    return {
      ok: false,
      message: error.message,
    };
  }
};

const editProduct =
  (db) => async (product_name, description, genre, quantity, id) => {
    try {
      const response = await db.query(
        updateProducts(product_name, description, genre, quantity, id)
      );

      return {
        ok: true,
        response: response.rows,
      };
    } catch (error) {
      console.info("Update product error: ", error.message);
      return {
        ok: false,
        message: error.message,
      };
    }
  };

const editRating = (db) => async (score, votes, id) => {
  try {
    const response = await db.query(updateRatings(score, votes, id));

    return {
      ok: true,
      response: response.rows,
    };
  } catch (error) {
    console.info("Update ratings error: ", error.message);
    return {
      ok: false,
      message: error.message,
    };
  }
};

const eliminateProduct = (db) => async (id) => {
  try {
    await db.query(deleteProduct(id));

    return {
      ok: true,
    };
  } catch (error) {
    console.info("Delete product error: ", error.message);
    return {
      ok: false,
      message: error.message,
    };
  }
};

module.exports = {
  addProduct,
  getOneProduct,
  getProducts,
  editProduct,
  editRating,
  eliminateProduct,
};
