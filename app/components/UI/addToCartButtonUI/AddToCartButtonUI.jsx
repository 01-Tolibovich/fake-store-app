import { useCallback, useEffect, useRef, useState } from "react";

import Image from "next/image";

import { useDispatch, useSelector } from "react-redux";
import { cartList } from "@/app/redux/features/cartSlice";
import { getPositions } from "@/app/redux/features/buttonPositionSlice";
import useItemPositions from "@/hooks/useItemPositions";

import { ButtonUI } from "../buttonUI";
import { PiArrowRightThin } from "react-icons/pi";

import "./styles.scss";

const AddToCartButtonUI = ({ product, productId, setProductId }) => {
  const dispatch = useDispatch();
  const buttonPosition = useSelector((state) => state.buttonPosition);
  const { cartPositions } = useSelector((state) => state.cartPositions);
  const { elementRef, updatePosition } = useItemPositions();

  // const moveToCart = useRef({});

  useEffect(() => {
    if (productId === product.id && elementRef.current) {
      updatePosition(getPositions);
    }
  }, [elementRef, product.id, productId, updatePosition]);

  const [moveToCart, setMoveToCart] = useState({});
  const [resetPositions, setResetPositions] = useState({});

  const addToCartHandle = (product) => {
    setProductId(product.id);
    dispatch(cartList(product));

    const timer = setTimeout(() => {
      setMoveToCart({
        top: cartPositions.top + window.scrollY,
        right: cartPositions.right - window.scrollX,
        bottom: cartPositions.bottom - window.scrollY,
        left: cartPositions.left + window.scrollX,
      });
    }, 100);

    const timer2 = setTimeout(() => {
      setProductId(0);
      setMoveToCart({});
    }, 800);

    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
    };
  };

  console.log(1111, buttonPosition);

  return (
    <div className="add-to-cart-ui">
      {product.id === productId && (
        <div
          ref={elementRef}
          className="item-to-cart"
          style={{
            top:
              productId === product.id &&
              elementRef.current &&
              buttonPosition.top + window.scrollY,
            right:
              productId === product.id &&
              elementRef.current &&
              buttonPosition.right - window.scrollX,
            bottom:
              productId === product.id &&
              elementRef.current &&
              buttonPosition.bottom - window.scrollY,
            left:
              productId === product.id &&
              elementRef.current &&
              buttonPosition.left + window.scrollX,
            transition: "600ms ease-in",

            ...moveToCart,
          }}
        >
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
