"use client";

import { useState } from "react";
import Image from "next/image";
import { ButtonUI, CounterUI, ModalUI } from "../../UI";
import { PiArrowRightThin } from "react-icons/pi";
import Link from "next/link";
import { FaEye } from "react-icons/fa6";

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
	const [quickView, setQuickView] = useState(0);

	const handleProductImg = singleProduct => {
		setIsModalActive(true);

		setSingleProductData(prevState => ({ ...prevState, image: singleProduct.image }));
		setSingleProductData(prevState => ({ ...prevState, title: singleProduct.title }));
		setSingleProductData(prevState => ({ ...prevState, description: singleProduct.description }));
		setSingleProductData(prevState => ({ ...prevState, price: singleProduct.price }));
		setSingleProductData(prevState => ({ ...prevState, id: singleProduct.id }));
	};

	const overlayHandle = (id) => {
		setQuickView(id);
	}

	const addToCartHandle = (product) => {
		const productArray = []
		productArray.push(...product)

		console.log(product);
		localStorage.setItem("productArray", JSON.stringify(productArray))

		const test = localStorage.getItem("productArray")
		console.log(JSON.parse(test));
	}

	return (
		<>
			{products.map(product => (
				<div key={product.id} className="product-item">
					<div
						onClick={() => handleProductImg(product)}
						onMouseMove={() => overlayHandle(product.id)}
						onMouseOut={() => setQuickView(false)}
						className="img-block"
					>
						<div className={`overlay ${quickView === product.id ? "active" : ""}`}>
							<div className="eye-block">
								<FaEye className="eye" />
								<small>Quick View</small>
							</div>
						</div>
						<Image src={product.image} alt="Landscape picture" width={200} height={200} />
					</div>
					<Link href={`/${product.id}`}>
						<h3>{product.title.slice(0, 20)}...</h3>
					</Link>
					<span className="description">{product.description}...</span>
					<div className="category">
						<Link href={`/category/${product.category}`}>Category: {product.category}</Link>
					</div>
					<span className="price">Priсe: ${product.price}</span>
					<ButtonUI onClick={() => addToCartHandle(product)} >
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
							<p>{singleProductData.description.slice(0, 200)}...</p>
							<hr />
							<span>Priсe: ${singleProductData.price}</span>
							<div className="buttons-item">
								<CounterUI count={count} setCount={setCount} />
								<ButtonUI onClick={(singleProductData) => addToCartHandle(singleProductData)}>
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
