
import data from "./data.json";
import Navbar from "./Navbar";
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

    <Navbar Toggle={Toggle}/>

      <div className = "about">
        <h1>About this Project</h1>
        <hr align="left" color="#61481c"></hr>
        <p>Want to build a portfolio for yourself but could not get a satisfactory motivation? <br></br><br></br>This project brings together some awesome portfolio sites designed by developers to get you the right motivaiton. Click on the portfolio cards below and it will redirect you to that site. To view the code, click on the source code button.</p>
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
