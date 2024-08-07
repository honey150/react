import { useContext } from "react";
import UserContext  from "../context/UserContext.js";
function Profile() {
  let {user} = useContext(UserContext)
  console.log(user)
  return user ? <div>Welcome {user.username} to the site</div>: <div>Please Login</div>;
}

export default Profile;
