import { baseURL } from "@/config/config";

export const getCategory = async (categoryName) => {
  const response = await fetch(`${baseURL}products/category/${categoryName}`);
  const category = await response.json();

  return category;
}