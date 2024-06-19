import { PiArrowRightThin } from "react-icons/pi";

import "./styles.scss";

const NavigationMenu = ({ categories, menuIsShow }) => {
	const firstLetterToUpperCase = category => {
		const firstLetter = category.charAt(0).toUpperCase();

		return firstLetter + category.slice(1);
	};

	return (
		<div className={`navigation-menu ${menuIsShow ? "menu-is-open" : ""}`}>
			<h2>Product categories</h2>
			<nav>
				{categories &&
					categories.map((category, index) => (
						<li key={index}>
							{firstLetterToUpperCase(category)} <PiArrowRightThin className={`arrow ${category === index ? "hover" : ""}`} />
						</li>
					))}
			</nav>
		</div>
	);
};

export default NavigationMenu;
