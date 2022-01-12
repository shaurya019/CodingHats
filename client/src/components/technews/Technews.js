import React from "react";
import "./technews.css";

function Technews(props) {
  return (
    <div className="technewsContainer" style={{ backgroundColor: props.color }}>
      <div
        className="technewsContainerbg"
      // style={{ backgroundImage: `url(${props.urlToImage})` }}
      ></div>
      <div className="technewstitle">
        <a href={props.url} target="_blank">
          {props.title}
        </a>
      </div>
      <div className="technewsimage">
        <img src={props.urlToImage} alt=""></img>
      </div>
      {/* <div className="technewsdesc">{props.description}</div> */}
    </div>
  );
}

export default Technews;
