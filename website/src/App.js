import data from "./data.json";

function App() {
  return (
    <>
      <div className="header">
        <h1>OpenSourceHub</h1>
      </div>
      <div className = "about">
        <h1>About this Project</h1>
        <hr align="left" color="#61481c"></hr>
        <p>Want to build a portfolio for yourself but could not get a satisfactory motivation? <br></br><br></br>This project brings together some awesome portfolio sites designed by developers to get you the right motivaiton. Click on the portfolio cards below and it will redirect you to that site. To view the code, click on the source code button.</p>
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
          >Source Code</a>
        </a>
      ))}
    </>
  );
}

export default App;
