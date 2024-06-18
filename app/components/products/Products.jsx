import { getProducts } from "@/app/protocols/rest/getProducts";
import Product from "./product/Product";
import "./styles.scss";

const Products = async () => {
	const products = await getProducts();

	let Sproduct;

	return (
		<div className="products-wrapper">
			{products && <Product products={products}/>}
		</div>
	);
};

export default Products;
