import React from "react";
import Faq from "react-faq-component";

const data = {
  title: "FAQ",
  rows: [
    {
      title: "What is OpenSourceHub?",
      content:
        "This project brings together some awesome portfolio sites designed by developers to get you the right motivation.Here, the esteemed developers put forward their skilled and decorative portfolios in order to provide a rudimentary idea about the templates to be followed while making them. ",
    },
    {
      title: "How to contribute ot openSourceHub?",
      content:
        "Firstly, read all the guidelines given in the README.md file of the project, then go through all the files and directories of the project concerned, find issues where you can improve upon the existing project, and create issues and wait for it to get assigned ,and thereby pull a request to contribute to OpenSourceHub.",
    },
    {
      title: "What can you do in this project?",
      content:
        "You can add new content to this project containing your specialized portfolio, and help others to know how to create such awesome devfolios.",
    },
    {
      title: "What is SSOC?",
      content:
        "SSOC is a 3 month open source Program organized by social. They aim to promote open source with new age technologies & want everyone to get the right path and guidance through SSOC.",
    },
  ],
};

const styles = {
  // bgColor: 'white',
  titleTextColor: "black",
  rowTitleColor: "black",
  rowContentPaddingBottom: "10px",
  rowContentPaddingLeft: "10px",
  rowContentPaddingRight: "10px",
  // rowContentColor: 'grey',
  // arrowColor: "red",
};

const config = {
  // animate: true,
  // arrowIcon: "V",
  // tabFocus: true
};

const FaqSection = () => {
  return (
    <div>
      <div className="faq">
        <Faq data={data} styles={styles} config={config} />
      </div>
    </div>
  );
};

export default FaqSection;
