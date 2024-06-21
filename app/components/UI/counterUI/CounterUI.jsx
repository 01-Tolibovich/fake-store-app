import { ButtonUI } from "../buttonUI";
import "./styles.scss";

const CounterUI = ({ count, setCount }) => {
	const increase = () => {
		setCount(prevState => parseInt(prevState) + 1);
	};

	const decrease = () => {
		if (count === 1) {
			setCount(1);
		} else if (count > 1) {
			setCount(prevState => parseInt(prevState) - 1);
		}
	};

	const inputOnChangeValue = e => {
		if (e.target.value === "0" || e.target.value === 0 || e.target.value === "") {
			setCount((e.target.value = 1));
		} else if (e.target.value < 1) setCount(e.target.value);
	};

	const counterButtons = (operator, plusAndMinusOperations) => {
		return (
			<ButtonUI className="counter-buttons" role="button" onClick={plusAndMinusOperations}>
				{operator}
			</ButtonUI>
		);
	};

	return (
		<div className="ui-counter-component">
			{counterButtons("-", decrease)}
			<input typte="text" value={count} onChange={e => inputOnChangeValue(e)} />
			{counterButtons("+", increase)}
		</div>
	);
};

export default CounterUI;
