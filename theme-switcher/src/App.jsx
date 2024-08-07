import { ThemeProvider } from "./context/theme.js";
import { useState, useEffect } from "react";
import ThemeBtn from "./components/ThemeBtn.jsx";
import CardUI from "./components/CardUI.jsx";
function App() {
  const [themeMode, setThemeMode] = useState("light");
  useEffect(() => {
    let html = document.querySelector("html");
    html.classList.remove("dark", "light");
    if (themeMode === "dark") {
      html.classList.add("dark");
    } else {
      html.classList.add("light");
    }
  }, [themeMode]);

  return (
    <ThemeProvider value={{ setThemeMode }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className=" w-full max-w-sm mx-auto">
            <CardUI />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
