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
