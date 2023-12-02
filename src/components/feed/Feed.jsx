import React from "react";
import FeedModal from './FeedModal'
import FeedPhotos from './FeedPhotos'

const Feed = () => {
  const [modalPhoto, setModalPhoto] = React.useState(null);
  return (
    <section>
      {modalPhoto && <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto}></FeedModal>}
      <FeedPhotos setModalPhoto={setModalPhoto}></FeedPhotos>
    </section>
  );
};

export default Feed;
