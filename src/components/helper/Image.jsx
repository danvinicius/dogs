import React from "react";
import styles from "./Image.module.scss";
import PropTypes from "prop-types";

const Image = ({ alt, ...props }) => {
  const [skeleton, setSkeleton] = React.useState(true);

  const handleLoad = ({ target }) => {
    setSkeleton(false);
    target.style.opacity = 1;
  };
  return (
    <div className={styles.wrapper}>
      {skeleton && <div className={styles.skeleton}></div>}
      <img
        src=""
        className={styles.img}
        alt={alt}
        {...props}
        onLoad={handleLoad}
      />
    </div>
  );
};

Image.propTypes = {
  alt: PropTypes.string.isRequired,
};

export default Image;
