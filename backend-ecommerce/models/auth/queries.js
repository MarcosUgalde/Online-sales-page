const { sql } = require('slonik')

const insertUser = (email, username, password, admin) = sql.unsafe`
    INSERT INTO users (
        email, username, password, admin
    ) VALUES (
        ${email}, ${username}, ${password}, ${admin}
    )
`

module.exports = {
    insertUser
}