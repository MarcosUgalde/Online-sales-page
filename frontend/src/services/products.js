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

export const insertProduct = (client) => async (params) => {
  try {
    const { data } = await client.post("/products/new", params);
    console.info("Product insertion data: ", data);
    return data;
  } catch (error) {
    console.info("Product insertion error: ", error.message);
    return { success: false };
  }
};

export const ratingProduct = (client) => async (params) => {
  try {
    const { data } = await client.pit(
      `/products/score/${params.productId}`,
      params
    );
    console.info("Product rating completed");
    return data;
  } catch (error) {
    console.info("Rating product error: ", error.message);
  }
};

export const updateProduct = (client) => async (params) => {
  try {
    const { data } = await client.put(`/products/${params.productId}`, params);
    console.info("Product update completed: ", data);
    return data;
  } catch (error) {
    console.info("Product update error: ", error.message);
    return { success: false };
  }
};

export const deleteProduct = (client) => async (params) => {
  try {
    const { data } = await client.delete(`/products/${params}`, params);
    console.info("Delete product completed");
    return data;
  } catch (error) {
    console.info("Delete product error", error.message);
    return { success: false };
  }
};
