import "./App.css";
import { useState } from "react";
import { conf } from "./conf/conf.js";
function App() {
  const [isOn, setIsOn] = useState(false);
  console.log(conf.appwriteBucketId);
  const handleToggle = () => {
    setIsOn(!isOn);
  };
  return (
    <div onClick={handleToggle} className={`toggle-container ${isOn ? "on" : ""}`}>
      <div className={`toggle-switch ${isOn ? "on" : "off"}`}>
        <span>{isOn ? "on" : "off"}</span>
      </div>
    </div>
  );
}

export default App;
