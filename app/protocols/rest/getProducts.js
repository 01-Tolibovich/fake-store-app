import { baseURL } from "@/config/config";

export const getProducts = async () => {
  const response = await fetch(`${baseURL}products`);
  const products = await response.json();

  return products;
}