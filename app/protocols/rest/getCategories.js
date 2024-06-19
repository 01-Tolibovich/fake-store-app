import { baseURL } from "@/config/config";

export const getCategories = async () => {
  const response = await fetch(`${baseURL}products/categories`);
  const category = await response.json();

  return category;
}