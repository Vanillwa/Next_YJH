import axios from "@/lib/axios"

export const getProducts = async (id)=>{
  const res = await axios.get(`/products/${id}`);
  const data = res.data;
  return data;
}