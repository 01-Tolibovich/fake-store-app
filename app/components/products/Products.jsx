import Product from "./product/Product";
import "./styles.scss";

const Products = ({ products, title }) => {
	console.log(products);
	return (
		<div className="products">
				<h1>{title}</h1>
			<div className="products-wrapper">
				{products && <Product products={products} />}
			</div>
		</div>
	);
};

export default Products;
