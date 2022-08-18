import data from "./data.json";
import Navbar from "./Navbar";

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
    <Navbar Toggle={Toggle}/>
     
      {data.data.map((portfolio) => (
        <div key={portfolio.portfolio_website}>
          <Card  name={portfolio.portfolio_name} website={portfolio.portfolio_website} image={portfolio.portfolio_image} code={portfolio.portfolio_code} />
        
        </div>
      ))}
    </>
  );
}

export default App;
