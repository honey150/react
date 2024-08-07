import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useState } from "react";
import "./App.css";
function App() {
  const [password, setPassword] = useState(true);

  const handlePassword = () => {
    setPassword(!password);
  };
  return (
    <div className="container">
      <input
        type={password ? "password" : "text"}
        placeholder="Enter Password"
      />
      <div class="eye-icon" onClick={handlePassword}>
        {password ? <IoMdEye /> : <IoMdEyeOff />}
      </div>
    </div>
  );
}

export default App;
