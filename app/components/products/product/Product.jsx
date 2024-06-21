"use client";

import { useState } from "react";
import Image from "next/image";
import { ButtonUI, CounterUI, ModalUI } from "../../UI";
import { PiArrowRightThin } from "react-icons/pi";
import Link from "next/link";

import "./styles.scss";

const Product = ({ products }) => {
	const [isModalActive, setIsModalActive] = useState(false);
	const [singleProductData, setSingleProductData] = useState({
		image: "",
		title: "",
		description: "",
		price: "",
		id: "",
	});
	const [count, setCount] = useState(1);

	const handleProductImg = singleProduct => {
		setIsModalActive(true);

		setSingleProductData(prevState => ({ ...prevState, image: singleProduct.image }));
		setSingleProductData(prevState => ({ ...prevState, title: singleProduct.title }));
		setSingleProductData(prevState => ({ ...prevState, description: singleProduct.description }));
		setSingleProductData(prevState => ({ ...prevState, price: singleProduct.price }));
		setSingleProductData(prevState => ({ ...prevState, id: singleProduct.id }));
	};

	return (
		<>
			{products.map(product => (
				<div key={product.id} className="product-item">
					<div onClick={() => handleProductImg(product)} className="img-block">
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
			<ModalUI isModalActive={isModalActive} setIsModalActive={setIsModalActive}>
				<div className="product-info-modal">
					<Image src={singleProductData.image} alt={singleProductData.image} width={400} height={400} />
					<div className="product-info-item">
						<div className="info-item">
							<h3>{singleProductData.title}</h3>
							<p>{singleProductData.description}</p>
							<hr />
							<span>Priсe: ${singleProductData.price}</span>
							<div className="buttons-item">
								<CounterUI count={count} setCount={setCount} />
								<ButtonUI>
									<span>Add to cart</span>
									<PiArrowRightThin />
								</ButtonUI>
							</div>
						</div>
						<Link href={`/${singleProductData.id}`} className="go-to-product-page">
							<span>Go to product page</span> <PiArrowRightThin />
						</Link>
					</div>
				</div>
			</ModalUI>
		</>
	);
};

export default Product;
