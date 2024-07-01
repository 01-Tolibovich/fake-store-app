"use client";

import { useState } from "react";
import { FaShopify } from "react-icons/fa";
import { useSelector } from "react-redux";
import ButtonMenu from "./burgerMenu/BurgerMenu";
import NavigationMenu from "./navigationMenu/NavigationMenu";
import Link from "next/link";
import { IoMdCart } from "react-icons/io";

import "./styles.scss";

const HeaderWrapper = ({ categories }) => {
	const [menuIsShow, setMenuIsShow] = useState(false);

	const { cart } = useSelector(state => state.addToCart);

	return (
		<div className="header-wrapper">
			<div className="logo-block">
				<Link href="/" onClick={() => setMenuIsShow(false)}>
					<FaShopify className="store-logo" />
					<span>Simple Store</span>
				</Link>
			</div>
			<div className="header-action-block">
				<div className="cart-block" title={`Items in cart ${cart.length} pcs`}>
					{cart.length > 0 && <span>{cart.length}</span>}
					<IoMdCart className="cart" />
				</div>
				<ButtonMenu menuIsShow={menuIsShow} setMenuIsShow={setMenuIsShow} />
			</div>
			<hr className={`hr-line ${menuIsShow ? "full-width" : ""}`} />
			<NavigationMenu categories={categories} menuIsShow={menuIsShow} setMenuIsShow={setMenuIsShow} />
		</div>
	);
};

export default HeaderWrapper;
