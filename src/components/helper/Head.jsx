import React from "react";
import PropTypes from "prop-types";

const Head = (props) => {
  React.useEffect(() => {
    document.title = `Dogs | ${props.title}`;
    document
      .querySelector("meta[name='description']")
      .setAttribute("content", props.description || "");
  }, [props]);
  return <></>;
};

Head.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default Head;
