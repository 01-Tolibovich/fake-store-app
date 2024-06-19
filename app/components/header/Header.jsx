import { getCategories } from "@/app/protocols/rest/getCategories";

import "./styles.scss";
import HeaderWrapper from "./headerWrapper/HeaderWrapper";

const Header = async () => {
	const categories = await getCategories();

	return (
		<header className="main-header">
			<HeaderWrapper categories={categories} />
		</header>
	);
};

export default Header;
