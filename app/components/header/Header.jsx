import { getCategories } from "@/app/protocols/rest/getCategories";

import "./styles.scss";
import HeaderWrapper from "./headerWrapper/HeaderWrapper";

const Header = async () => {
	try {
		const categories = await getCategories();

	return (
		<header className="main-header">
			<HeaderWrapper categories={categories} />
		</header>
	);
	} catch (error) {
		console.log(error);
	}
};

export default Header;
