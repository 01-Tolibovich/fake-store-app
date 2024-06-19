
import "./styles.scss";

const ButtonMenu = ({menuIsShow, setMenuIsShow}) => {

	return (
		<div role="button" onClick={() => setMenuIsShow(!menuIsShow)} className="burger-menu">
			<div className={`burger-menu-button ${menuIsShow ? "menu-is-open" : ""}`}>
				<span></span>
				<span></span>
				<span></span>
			</div>
		</div>
	);
};

export default ButtonMenu;
