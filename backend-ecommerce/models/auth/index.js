const { insertUser } = require("./queries");

const createUser = (db) => async (email, username, password, admin) => {
  try {
    await db.query(insertUser(email, username, password, admin));

    return {
      ok: true,
    };
  } catch (error) {
    console.info("Create error user: ", error.message);

    return {
      ok: false,
      message: error.message,
    };
  }
};

module.exports = {
  createUser,
};
