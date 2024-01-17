const { insertUser, selectUser } = require("./queries");

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

const getUser = (db) => async (email, compareFn) => {
  try {
    const user = await db.maybeOne(selectUser(email));

    if (!user)
      return {
        ok: false,
        error_code: "wrong_data",
      };

    const areEqual = await compareFn(user.password);

    if (!areEqual)
      return {
        ok: false,
        error_code: "wrong_data",
      };

    return {
      ok: true,
      content: {
        id: user.id,
        email: user.email,
        username: user.username,
        admin: user.admin,
      },
    };
  } catch (error) {
    console.info("Select user error: ", error.message);
    return {
      ok: false,
      error: error.message,
    };
  }
};

module.exports = {
  createUser,
  getUser,
};
