import React, { Component } from "react";
import "./questions.css";
import { changeSelect } from "../../context/sidebarContext/SidebarAction";
export default class Questions extends Component {
  componentDidMount() {
    const { SidebarDispatch } = this.props;
    SidebarDispatch(changeSelect("questions"));
  }
  render() {
    return (
      <div className="section-3">
        <div className="container">
          <div className="row">
            <div className="Part-1">
              <div className="question-main-head">
                <h2>Weekly Question</h2>
              </div>

              <div className="question-head">
                <h3>Try to solve the question!!</h3>

                <div className="question-box">
                  <p>Question</p>
                  <div className="question-sol">
                    <a id="link1" href="" target="_blank">
                      Text Solution
                    </a>
                    <a id="link2" href="" target="_blank">
                      Video Solution
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="Part-2"></div>
          </div>
        </div>
      </div>
    );
  }
}
