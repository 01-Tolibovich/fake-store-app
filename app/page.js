import { getProducts } from "@/app/protocols/rest/getProducts";
import { Products } from "./components";


export default async function Home() {
	const products = await getProducts();
  const title = "All products";

  return (
    <div>
      <Products products={products} title={title}/>
    </div>
  );
}
