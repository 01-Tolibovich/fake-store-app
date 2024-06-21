import "./styles.scss";

const ButtonUI = ({children, className, ...rest}) => {
  console.log(children);
  return <button {...rest} className={`ui-button-component ${[className]} ${children[1] ? "button-hase-icon" : ""}`}>{children}</button>
}

export default ButtonUI;