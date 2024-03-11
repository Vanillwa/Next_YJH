import axios from "@/lib/axios";

export const getProduct = async (id) => {
  const res = await axios.get(`/products/${id}`);
  const data = res.data;
  return data;
};

export const getSizeReviews = async (id) => {
  const res = await axios.get(`/size_reviews?product_id=${id}`);
  const data = res.data.results ?? [];
  return data;
};

export const getProducts = async () => {
  const res = await axios.get("/products");
  const data = res.data.results
  return data;
};

export const getProductsByKeyword = async (keyword) => {
  const res = await axios.get(`/products?q=${keyword}`);
  const data = res.data.results
  return data;
};

