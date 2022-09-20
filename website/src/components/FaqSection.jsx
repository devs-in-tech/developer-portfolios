import React from "react";
import Faq from "react-faq-component";

const data = {
  title: "FAQ",
  rows: [
    {
      title: "what is OpenSourceHub",
      content:
        "This project brings together some awesome portfolio sites designed by developers to get you the right motivaiton",
    },
    {
      title: "How to contribute ot openSourceHub",
      content:
        "This project brings together some awesome portfolio sites designed by developers to get you the right motivaiton",
    },
    {
      title: "what is do we do in this project",
      content:
        "This project brings together some awesome portfolio sites designed by developers to get you the right motivaiton",
    },
    {
      title: "what is SSOC",
      content:
        "This project brings together some awesome portfolio sites designed by developers to get you the right motivaiton",
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
