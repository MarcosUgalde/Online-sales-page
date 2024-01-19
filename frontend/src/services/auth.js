export const register = (client) => async (params) => {
  try {
    const { data } = await client.post("/auth/signup", params);
    console.info("Signup data: ", data);
    return data;
  } catch (error) {
    console.info("Signup error: ", error.message);
  }
};
