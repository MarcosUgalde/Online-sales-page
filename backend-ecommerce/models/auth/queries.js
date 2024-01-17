const { sql } = require("slonik");

const insertUser = (email, username, password, admin) => sql.unsafe`
    INSERT INTO users (
        email, username, password, admin
    ) VALUES (
        ${email}, ${username}, ${password}, ${admin}
    )
`;

const selectUser = (email) => sql.unsafe`
    SELECT * FROM users
    WHERE email = ${email}
`;

module.exports = {
  insertUser,
  selectUser,
};
