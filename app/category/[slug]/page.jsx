import { getCategory } from "@/app/protocols/rest/getCategory";
import { Products } from "@/app/components";

export default async function CategoryPage({ params }) {
	const { slug } = params;
	const category = await getCategory(slug);

	const categoryNameToTitle = () => {
		const title = slug.replace("%", " ").replace(20, " ");

		const categoryTitle = title.charAt(0).toUpperCase();

		return `Category: ${categoryTitle}${title.slice(1)}`
    
	};

	return <Products products={category} title={categoryNameToTitle()} />;
}
