import UserContext from "./UserContext.js";
import { useState } from "react";
function UserContextProvider({ children }) {
  const [user, setUser] = useState("");
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider