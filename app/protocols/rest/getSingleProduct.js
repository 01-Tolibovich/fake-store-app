import { baseURL } from "@/config/config";

export const getSingleProduct = async (id) => {
  const response = await fetch(`${baseURL}products/${id}`);
  const singleProduct = await response.json();

  return singleProduct;
}