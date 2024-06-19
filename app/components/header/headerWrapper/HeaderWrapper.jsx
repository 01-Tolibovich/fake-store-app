"use client"

import { useState } from "react";
import { FaShopify } from "react-icons/fa";
import ButtonMenu from "./burgerMenu/BurgerMenu";
import NavigationMenu from "./navigationMenu/NavigationMenu";

import "./styles.scss";

const HeaderWrapper = ({ categories }) => {
  const [menuIsShow, setMenuIsShow] = useState(false);

	return (
		<div className="header-wrapper">
			<div className="logo-block">
				<FaShopify className="store-logo" />
				<span>Simple Store</span>
			</div>
			<ButtonMenu menuIsShow={menuIsShow} setMenuIsShow={setMenuIsShow} />
			<hr className={`hr-line ${menuIsShow ? "full-width" : ""}`}/>
      <NavigationMenu categories={categories} menuIsShow={menuIsShow} />
		</div>
	);
};

export default HeaderWrapper;