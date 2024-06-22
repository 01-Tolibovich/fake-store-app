import { PiArrowRightThin } from "react-icons/pi";
import Link from "next/link";

import "./styles.scss";

const NavigationMenu = ({ categories, menuIsShow, setMenuIsShow }) => {
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
						<Link href={`/category/${categories[index]}`} key={index} onClick={() => setMenuIsShow(false)}>
							{firstLetterToUpperCase(category)} <PiArrowRightThin className={`arrow ${category === index ? "hover" : ""}`} />
						</Link>
					))}
			</nav>
		</div>
	);
};

export default NavigationMenu;
