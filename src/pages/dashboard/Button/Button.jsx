import Classes from "./button.module.css";

function Button(props) {
  return (
    <button className={Classes.button + ' ' + Classes.glow_button} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default Button;