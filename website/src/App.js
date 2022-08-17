import data from "./data.json";

import {useEffect,useState} from 'react';
import Card from "./components/Card";

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
          <Card  name={portfolio.portfolio_name} website={portfolio.portfolio_website} image={portfolio.portfolio_image} code={portfolio.portfolio_code} />
        
        </div>
      ))}
    </>
  );
}

export default App;
