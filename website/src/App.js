import {useEffect,useState} from 'react';
import data from "./data.json";

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
        <div key={portfolio.portfolio_website}>
        <div className='project'>
          <img
            src={
              portfolio.portfolio_image ? portfolio.portfolio_image : "no image"
            }
            alt={
              portfolio.portfolio_image ? portfolio.portfolio_image : "no image"
            }
          />
          <div className="container">
            <p className="personName">{portfolio.portfolio_name}</p>
            <div className ='links'>
              <a 
                className="project_link"
                href={portfolio.portfolio_website}
                target="_blank"
                rel="noreferrer"
              >View portfolio</a>
              <a
                className="project_link"
                href={portfolio.portfolio_code}
                target="_blank"
                rel="noreferrer"
              >Source Code</a>
            </div>
          </div>
        </div>
        </div>
      ))}
    </>
  );
}

export default App;
