import style from "./Input.module.scss";

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

export default Input;
