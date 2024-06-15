import { getProducts } from "@/app/protocols/rest/getProducts";
import Image from "next/image";
import { PiArrowRightThin } from "react-icons/pi";
import "./styles.scss";
import { ButtonUI, ModalUI } from "../UI";

const Products = async () => {
	const products = await getProducts();

	return (
		<div className="products-wrapper">
			{products &&
				products.map(product => (
					<div key={product.id} className="product-item">
						<div className="img-block">
							<Image src={product.image} alt="Landscape picture" width={200} height={200} />
						</div>
						<marquee>
							<h3>{product.title}</h3>
						</marquee>
						<span className="description">{product.description}...</span>
						<span>Category: {product.category}</span>
						<span className="price">Priсe: ${product.price}</span>
						<ButtonUI>
							<span>Add to cart</span>
							<PiArrowRightThin />
						</ButtonUI>
					</div>
				))}
			<ModalUI>wefewfew</ModalUI>
		</div>
	);
};

export default Products;
