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

            <div className="Part-2">
            <div className="company-box-main">
              <div className="company-box-p1">
              <div className="faang" id="comp1"><a href=""><img src="https://iconape.com/wp-content/files/ak/61851/svg/facebook-icon-white.svg"></img></a></div>
              <div className="faang" id="comp2"><a href=""><img src="https://cdn.icon-icons.com/icons2/1195/PNG/512/1490889698-amazon_82521.png"></img></a></div>
              <div className="faang" id="comp3"><a href=""><img src="https://i1.wp.com/9to5mac.com/wp-content/uploads/sites/6/2018/02/logo.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1"></img></a></div>
              <div className="faang" id="comp4"><a href=""><img src="https://cdn141.picsart.com/270246178011211.png"></img></a></div>
              <div className="faang" id="comp5"><a href=""><img src="https://images.theconversation.com/files/93616/original/image-20150902-6700-t2axrz.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1000&fit=clip"></img></a></div>
              </div>
              {/* <div className="company-box-p2">
              <div className="faang" id="comp1"><img src=""></img></div>
              <div className="faang" id="comp2"><img src=""></img></div>
              <div className="faang" id="comp3"><img src=""></img></div>
              <div className="faang" id="comp4"><img src=""></img></div>
              <div className="faang" id="comp5"><img src=""></img></div>
              </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
