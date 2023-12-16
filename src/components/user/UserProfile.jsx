import { useParams } from "react-router-dom";
import Feed from "../feed/Feed";

const UserProfile = () => {
  const { user } = useParams();
  return (
    <section className="container">
      <h1 className="title">{user}</h1>
      <Feed user={user}></Feed>
    </section>
  );
};

export default UserProfile;
