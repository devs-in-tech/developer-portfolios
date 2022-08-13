import { useState,useEffect } from "react";


function Toggle() {
  const [theme, setTheme] = useState("light-theme");
  if (theme === "dark-theme") {
    setTheme("light-theme");
  } else {
    setTheme("dark-theme");
  }
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
}
export default Toggle;
