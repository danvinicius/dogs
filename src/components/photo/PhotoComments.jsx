import React from "react";
import { UserContext } from "../../context/UserContext";
import PhotoCommentsForm from "./PhotoCommentsForm";
import styles from "./PhotoComments.module.scss";
import PropTypes from "prop-types";

const PhotoComments = ({ single, ...props }) => {
  const [comments, setComments] = React.useState(() => props.comments);
  const { logged } = React.useContext(UserContext);
  const commentsSection = React.useRef(null);

  React.useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
  }, [comments]);
  return (
    <>
      <ul
        className={`${styles.comments} ${single ? styles.single : ""}`}
        ref={commentsSection}
      >
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}</b>{" "}
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {logged && (
        <PhotoCommentsForm
          id={props.id}
          setComments={setComments}
          single={single}
        />
      )}
    </>
  );
};

PhotoComments.propTypes = {
  single: PropTypes.bool,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      comment_ID: PropTypes.string,
      comment_author: PropTypes.string,
      comment_content: PropTypes.string,
    })
  ),
  id: PropTypes.number.isRequired,
};

export default PhotoComments;
