DROP TABLE IF EXISTS customers_x_products;
DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS users;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS users (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    email TEXT NOT NULL UNIQUE,
    username TEXT NOT NULL,
    password TEXT NOT NULL,
    admin BOOLEAN DEFAULT FALSE
);

CREATE TABLE IF NOT EXISTS products (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    product_name TEXT NOT NULL,
    description TEXT NOT NULL,
    genre TEXT NOT NULL,
    quantity INTEGER NOT NULL,
    score INTEGER DEFAULT NULL,
    votes_by_customers INTEGER DEFAULT 0
);

CREATE TABLE IF NOT EXISTS customers (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    customer_email TEXT NOT NULL UNIQUE,
    customer_username TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    total_purchases INTEGER DEFAULT 0
);

CREATE TABLE IF NOT EXISTS customers_x_products (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    customer_id uuid NOT NULL REFERENCES customers
        ON UPDATE CASCADE
        ON DELETE CASCADE,
    product_id uuid NOT NULL REFERENCES products
        ON UPDATE CASCADE
        ON DELETE CASCADE
)

-- crear una tabla customers (la de usuarios sería para empleados)
-- que cuente con username pasword email etc y que también haya una columna pada
-- cada genero que exista y que sirva para ver en qué tiene intereses
-- cada cliente. Quizá también se puedan ir añadiendo columnas con 
-- otro tipo de información como productos comprados en total, 
-- tiempo conectado a la página...