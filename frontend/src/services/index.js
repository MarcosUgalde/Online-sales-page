import axios from "axios";
import { register, signin, logout } from "./auth";
import { info } from "./user";
import { allProducts, oneProduct, insertProduct } from "./products";

const client = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

const auth = {
  register: register(client),
  signin: signin(client),
  logout: logout(client),
};

const user = {
  info: info(client),
};

const products = {
  allProducts: allProducts(client),
  oneProduct: oneProduct(client),
  insertProduct: insertProduct(client),
};

export { auth, user, products };
