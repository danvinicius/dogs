import style from "./Input.module.scss";
import PropTypes from "prop-types";

const Input = ({ label, type, name, value, onChange, error, onBlur }) => {
  return (
    <div className={style.wrapper}>
      <label htmlFor={name} className={style.label}>
        {label}
      </label>
      <input
        className={style.input}
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <small className={style.error}>{error}</small>}
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  error: PropTypes.string,
  onBlur: PropTypes.func,
};

export default Input;
