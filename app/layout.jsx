import { Montserrat } from "next/font/google";
import { Header } from "./components";
import "./styles/global.scss";

const montserrat = Montserrat({ 
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	style: ["normal", "italic"],
	subsets: ["cyrillic"]
});

export const metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={montserrat.className}>
				<div className="app-wrapper">
					<Header />
					<div className="content">{children}</div>
				</div>
			</body>
		</html>
	);
}