import style from "./Button.module.scss";
import PropTypes from "prop-types";

const Button = ({ children, ...props }) => {
  return (
    <button {...props} className={style.button}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Button;
