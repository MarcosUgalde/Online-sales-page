import axios from "axios";
import { register, signin, logout } from "./auth";
import { info } from "./user";
import {
  allProducts,
  oneProduct,
  insertProduct,
  ratingProduct,
  updateProduct,
  deleteProduct,
} from "./products";

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
  ratingProduct: ratingProduct(client),
  updateProduct: updateProduct(client),
  deleteProduct: deleteProduct(client),
};

export { auth, user, products };
