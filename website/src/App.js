import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import FaqSection from "./components/FaqSection";

function App() {
  const [theme, setTheme] = useState("light-theme");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  function Toggle() {
    if (theme === "dark-theme") {
      setTheme("light-theme");
    } else {
      setTheme("dark-theme");
    }
  }
  return (
    <>
      <Navbar Toggle={Toggle} />

      <div className="about">
        <h1>About this Project</h1>
        <hr align="left" color="#61481c"></hr>
        <p>
          Want to build a portfolio for yourself but could not get a
          satisfactory motivation? <br></br>
          <br></br>This project brings together some awesome portfolio sites
          designed by developers to get you the right motivaiton. Click on the
          portfolio cards below and it will redirect you to that site. To view
          the code, click on the source code button.
        </p>
      </div>
      <Header />
      <Projects />
      <FaqSection />
      <Footer />
    </>
  );
}

export default App;
