"use client";
import { useState } from "react";
import Image from "next/image";
import { FaCartShopping } from "react-icons/fa6";
import { ButtonUI, CounterUI } from "@/app/components/UI";

import "./styles.scss";

const SingleProduct = ({ singleProduct }) => {
  const [count, setCount] = useState(1)
	return (
		<div className="single-page-wrapper">
			<div className="product-image-block">
				<div className="product-image-item">
					<Image className="product-image" src={singleProduct.image} alt={singleProduct.image} width={800} height={800} />
				</div>
			</div>
			<div className="product-info-block">
				<article>
					<h1>{singleProduct.title}</h1>
					<p>{singleProduct.description}</p>
          <span>Price: ${singleProduct.price}</span>
				</article>
				<div className="button-block">
					<CounterUI count={count} setCount={setCount} />
					<ButtonUI className="add-to-cart">
						<span>Add to cart</span>
						<FaCartShopping />
					</ButtonUI>
				</div>
			</div>
		</div>
	);
};

export default SingleProduct;
