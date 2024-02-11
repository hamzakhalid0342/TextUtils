import React, { useState } from "react";

export default function About(props) {
  // const [myStyle, setMyStyle] = useState({
  //   color: "Black",
  //   backgroundColor: "white"
  // });

  let myStyle ={
    color: props.mode==='dark'?'white':'black',
    backgroundColor: props.mode==='dark'?'#2d2d30':'white'
  }

  return (
    <div className="container" style={myStyle}>
      <h1 className="my-3" style={myStyle}>
        About Us
      </h1>
      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>Analyze your text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
            style={myStyle}
          >
            <div className="accordion-body" style={myStyle}>
            TexUtil tool focuses on its ability to analyze text. 
            You can outline the features and capabilities of the tool, 
            such as text analysis algorithms, linguistic insights, or any 
            other functions that allow users to analyze and understand text more effectively.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Free to use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
            TexUtil tool is available for users at no cost. You can highlight the benefits 
            of offering the tool for free, such as accessibility for all users regardless 
            of budget constraints.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
            TexUtil tool is designed to work seamlessly across various web browsers. 
            Explain how compatibility ensures that users can access and utilize the tool 
            regardless of their preferred browser, enhancing usability and convenience.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
