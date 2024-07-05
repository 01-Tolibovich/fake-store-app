"use client";

import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartList } from "@/app/redux/features/cartSlice";
import Image from "next/image";
import { ButtonUI, CounterUI, ModalUI } from "../../UI";
import { PiArrowRightThin } from "react-icons/pi";
import Link from "next/link";
import { FaEye } from "react-icons/fa6";

import "./styles.scss";

const Product = ({ products }) => {
	const [isModalActive, setIsModalActive] = useState(false);
	const [count, setCount] = useState(1);
	const [quickView, setQuickView] = useState(0);

	const dispatch = useDispatch();

	const { cartPositions } = useSelector(state => state.cartPositions);
	console.log(1111, cartPositions);

	const itemPosition = useRef();

	const singleProductData = useRef({
		image: "",
		title: "",
		description: "",
		price: "",
		id: "",
	});

	const handleProductImg = singleProduct => {
		setIsModalActive(true);

		singleProductData.current = {
			image: singleProduct?.image,
			title: singleProduct?.title,
			description: singleProduct?.description,
			price: singleProduct?.price,
			id: singleProduct?.id,
		};
	};

	const overlayHandle = id => {
		setQuickView(id);
	};

	const addToCartHandle = product => {
		dispatch(cartList(product));
	};

	const addToCartButton = product => {
		return (
			<div className="add-to-cart">
			<div ref={itemPosition} className="item-to-cart">
				<Image className="item-image" src={product.image} alt={product.image} width={200} height={200} />
			</div>
				<ButtonUI onClick={() => addToCartHandle(product)}>
					<span>Add to cart</span>
					<PiArrowRightThin />
				</ButtonUI>
			</div>
		);
	};

	useEffect(() => {
		let item;
		setTimeout(() => {
			item = itemPosition.current.getBuindingClientRect();
		}, 3000);

	console.log("Product", item);

	}, [])

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
					{addToCartButton(product)}
				</div>
			))}
			<ModalUI isModalActive={isModalActive} setIsModalActive={setIsModalActive}>
				<div className="product-info-modal">
					<Image src={singleProductData.current.image} alt={singleProductData.current.image} width={400} height={400} />
					<div className="product-info-item">
						<div className="info-item">
							<h3>{singleProductData.current.title}</h3>
							<p>{singleProductData.current.description.slice(0, 200)}...</p>
							<hr />
							<span>Priсe: ${singleProductData.current.price}</span>
							<div className="buttons-item">
								<CounterUI count={count} setCount={setCount} />
								{addToCartButton(singleProductData.current)}
							</div>
						</div>
						<Link href={`/${singleProductData.current.id}`} className="go-to-product-page">
							<span>Go to product page</span> <PiArrowRightThin />
						</Link>
					</div>
				</div>
			</ModalUI>
		</>
	);
};

export default Product;
