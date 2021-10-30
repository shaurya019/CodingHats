import React, { Component } from "react";
import "./blogs.css";

export default class Blogs extends Component {
  render() {
    return (
      <div className="blogsContainer">
        <div className="blogsTitle">Build an Awesome Portfolio Site</div>
        <div className="blogsDesc">
          A good protfolio is must when it comes for jobs. Make an awesome
          portfolio site or improve your personal portfolio through some tips.
        </div>
        <button className="blogButton">
          <a
            href="https://andrewcouldwell.medium.com/tips-for-creating-a-great-portfolio-website-f07e063e8371"
            target="_blank"
          >
            Read...
          </a>
        </button>
      </div>
    );
  }
}
