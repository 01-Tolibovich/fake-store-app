// "use client"
import { getSingleProduct } from "../protocols/rest/getSingleProduct";
import SingleProduct from "./SingleProduct";

export default async function ProductDetails({ params }) {
  const { productId } = params;
  const singleProduct = await getSingleProduct(productId);

  return singleProduct && <SingleProduct singleProduct={singleProduct} />
}