import PropTypes from "prop-types";

const Error = ({ error }) => {
  if (!error) return null;
  return <p className="error">{error}</p>;
};

Error.propTypes = {
  error: PropTypes.string,
};

export default Error;
