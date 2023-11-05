import style from "./Button.module.scss";

const Button = ({ children, ...props }) => {
  return (
    <button {...props} className={style.button}>
      {children}
    </button>
  );
};

export default Button;
