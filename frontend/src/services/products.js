export const allProducts = (client) => async () => {
  try {
    const { data: response } = await client.get("/products");
    console.info("Products info: ", response);
    return response;
  } catch (error) {
    console.info("All products info error: ", error.message);
    return null;
  }
};

export const oneProduct = (client) => async (id) => {
  try {
    const { data: response } = await client.get(`/products/${id}`);
    console.info("Product info: ", response);
    return response;
  } catch (error) {
    console.info("Get one product error: ", error.message);
    return null;
  }
};
