"use client";

import { useState } from "react";
import { FaShopify } from "react-icons/fa";
import ButtonMenu from "./burgerMenu/BurgerMenu";
import NavigationMenu from "./navigationMenu/NavigationMenu";
import Link from "next/link";

import "./styles.scss";

const HeaderWrapper = ({ categories }) => {
	const [menuIsShow, setMenuIsShow] = useState(false);

	return (
		<div className="header-wrapper">
			<div className="logo-block">
				<Link href="/" onClick={() => setMenuIsShow(false)}>
					<FaShopify className="store-logo" />
					<span>Simple Store</span>
				</Link>
			</div>
			<ButtonMenu menuIsShow={menuIsShow} setMenuIsShow={setMenuIsShow} />
			<hr className={`hr-line ${menuIsShow ? "full-width" : ""}`} />
			<NavigationMenu categories={categories} menuIsShow={menuIsShow} setMenuIsShow={setMenuIsShow} />
		</div>
	);
};

export default HeaderWrapper;
