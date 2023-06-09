const BASE_URL = "/mock/data.json";

export const fetchProducts = async () => {
  const response = await (await fetch(`${BASE_URL}`)).json();
  return response;
};
