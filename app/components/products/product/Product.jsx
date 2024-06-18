"use client";

import { useState } from "react";
import Image from "next/image";
import { ButtonUI, ModalUI } from "../../UI";
import { PiArrowRightThin } from "react-icons/pi";

import "./styles.scss";

const Product = ({ products }) => {
  const [isModalActive, setIsModalActive] = useState(false);
  const [singleProductData, setSingleProductData] = useState({
    image: "",
  })

  const handleProductImg = (singleProduct) => {
    setIsModalActive(true);
    
    setSingleProductData(prevState => ({ ...prevState, image: singleProduct}))
  };

  return (
    <>
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <div
            onClick={() => handleProductImg(product.image)}
            className="img-block"
          >
            <Image
              src={product.image}
              alt="Landscape picture"
              width={200}
              height={200}
            />
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
        <Image src={singleProductData.image} alt={singleProductData.image} width={400} height={400} />
      </ModalUI>
    </>
  );
};

export default Product;
