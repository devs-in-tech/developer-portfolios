import data from "./data.json";
import {useEffect,useState} from 'react';

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
      <div className="header">
        <h1>OpenSourceHub</h1>
        <button className="btn" onClick={Toggle}>
          <div className="dot"></div>
        </button>
      </div>
      {data.data.map((portfolio) => (
        <a
          className="project"
          href={portfolio.portfolio_website}
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={
              portfolio.portfolio_image ? portfolio.portfolio_image : "no image"
            }
            alt={
              portfolio.portfolio_image ? portfolio.portfolio_image : "no image"
            }
          />
          <p className="personName">{portfolio.portfolio_name}</p>
          <a
            className="projectcode"
            href={portfolio.portfolio_code}
            target="_blank"
            rel="noreferrer"
          >
            Source Code
          </a>
        </a>
      ))}
    </>
  );
}

export default App;
