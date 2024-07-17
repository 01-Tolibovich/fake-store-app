import { useEffect, useRef, useState } from "react";

import Image from "next/image";

import { useDispatch } from "react-redux";
import { cartList } from "@/app/redux/features/cartSlice";

import { ButtonUI } from "../buttonUI";
import { PiArrowRightThin } from "react-icons/pi";

import "./styles.scss";

const AddToCartButtonUI = ({ product, productId, setProductId }) => {
  const dispatch = useDispatch();

  const itemPosition = useRef();

  const addToCartHandle = (product) => {
    setProductId(product.id);
    dispatch(cartList(product));
  };

  const test = itemPosition.current?.getBoundingClientRect();

  console.log(test);

  return (
    <div className="add-to-cart-ui">
      {product.id === productId && (
        <div ref={itemPosition} className="item-to-cart">
          <Image
            className="item-image"
            src={product.image}
            alt={product.image}
            width={200}
            height={200}
          />
        </div>
      )}
      <ButtonUI onClick={() => addToCartHandle(product)}>
        <span>Add to cart</span>
        <PiArrowRightThin />
      </ButtonUI>
    </div>
  );
};

export default AddToCartButtonUI;
