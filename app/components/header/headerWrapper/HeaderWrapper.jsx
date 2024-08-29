"use client";

import { useEffect, useState } from "react";
import { FaShopify } from "react-icons/fa";
import { useSelector } from "react-redux";
import ButtonMenu from "./burgerMenu/BurgerMenu";
import NavigationMenu from "./navigationMenu/NavigationMenu";
import { getCartPositions } from "@/app/redux/features/cartSlice";
import Link from "next/link";
import { IoMdCart } from "react-icons/io";
import useItemPositions from "@/hooks/useItemPositions";

import "./styles.scss";

const HeaderWrapper = ({ categories }) => {
  const [menuIsShow, setMenuIsShow] = useState(false);

  const { cart } = useSelector((state) => state.addToCart);

  const { elementRef, updatePosition } = useItemPositions()

  useEffect(() => {
    if (updatePosition) updatePosition(getCartPositions)
  }, [updatePosition]);

  return (
    <div className="header-wrapper">
      <div className="logo-block">
        <Link href="/" onClick={() => setMenuIsShow(false)}>
          <FaShopify className="store-logo" />
          <span>Simple Store</span>
        </Link>
      </div>
      <div className="header-action-block">
        <div
          ref={elementRef}
          className="cart-block"
          title={`Items in cart ${cart.length} pcs`}
        >
          {cart.length > 0 && <span>{cart.length}</span>}
          <IoMdCart className="cart" />
        </div>
        <ButtonMenu menuIsShow={menuIsShow} setMenuIsShow={setMenuIsShow} />
      </div>
      <hr className={`hr-line ${menuIsShow ? "full-width" : ""}`} />
      <NavigationMenu
        categories={categories}
        menuIsShow={menuIsShow}
        setMenuIsShow={setMenuIsShow}
      />
    </div>
  );
};

export default HeaderWrapper;
