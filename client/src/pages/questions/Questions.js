import React, { Component } from "react";
import "./questions.css";
import {useContext , useState , useEffect} from 'react';
import { changeSelect } from "../../context/sidebarContext/SidebarAction";
import { SidebarContext } from "../../context/sidebarContext/SidebarContext";
import Datagrid from "../../components/datagrid/Datagrid";
import axios from 'axios';
import { IconContext } from "react-icons/lib";
import { FcQuestions,FcVlc,FcTodoList } from "react-icons/fc";
export default class Questions extends Component {
  componentDidMount() {
    const { SidebarDispatch } = this.props;
    SidebarDispatch(changeSelect("questions"));
  }

export default function Questions(){

  const { dispatch } = useContext(SidebarContext);

  useEffect(() => {
    dispatch(changeSelect("questions"));
  }, [dispatch]);

  const [list,changeList] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      const res = await axios.get("/question");
      changeList(res.data);
    };
    fetchQuestions();
  },[list]);

  return (
      <div className="section-3">
        <div className="container">
          <div className="row">
            <div className="Part-1">
              <div className="question-main-head">
              {/* <IconContext.Provider value={{margin:"3em"}}> */}
                <h2>Weekly Question<FcQuestions /></h2>
                {/* </IconContext.Provider> */}
              </div>

              <div className="question-head">
                <h3>Try to solve the question!!</h3>

                <div className="question-box">
                  <p>Question</p>
                   <IconContext.Provider value={{size:"1.5em"}}>
                  <div className="question-sol">
                    <a id="link1" href="" target="_blank">
                      Text <FcTodoList />
                    </a>
                    <a id="link2" href="" target="_blank">
                      Video <FcVlc /> 
                    </a>
                  </div>
                  </IconContext.Provider>
                </div>
              </div>
            </div>
            <Datagrid list = {list}/>
            <div className="Part-2">
              <div className="company-box-main">
                <div className="company-box-p1">
                  <div className="faang" id="comp1">
                    <a
                      href="https://www.interviewbit.com/facebook-interview-questions/"
                      target="_blank"
                    >
                      <img src="https://iconape.com/wp-content/files/ak/61851/svg/facebook-icon-white.svg"></img>
                    </a>
                  </div>
                  <div className="faang" id="comp2">
                    <a
                      href="https://www.interviewbit.com/amazon-interview-questions/"
                      target="_blank"
                    >
                      <img src="https://cdn.icon-icons.com/icons2/1195/PNG/512/1490889698-amazon_82521.png"></img>
                    </a>
                  </div>
                  <div className="faang" id="comp3">
                    <a
                      href="https://www.interviewcake.com/apple-interview-questions"
                      target="_blank"
                    >
                      <img src="https://i1.wp.com/9to5mac.com/wp-content/uploads/sites/6/2018/02/logo.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1"></img>
                    </a>
                  </div>
                  <div className="faang" id="comp4">
                    <a
                      href="https://www.interviewcake.com/netflix-interview-questions"
                      target="_blank"
                    >
                      <img src="https://cdn141.picsart.com/270246178011211.png"></img>
                    </a>
                  </div>
                  <div className="faang" id="comp5">
                    <a
                      href="https://www.interviewbit.com/google-interview-questions/"
                      target="_blank"
                    >
                      <img src="https://images.theconversation.com/files/93616/original/image-20150902-6700-t2axrz.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1000&fit=clip"></img>
                    </a>
                  </div>
                </div>
                <div className="company-box-p2">
                  <div className="faang" id="comp7">
                    <a
                      href="https://www.interviewbit.com/adobe-interview-questions/"
                      target="_blank"
                    >
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Adobe_Acrobat_DC_logo_2020.svg/2123px-Adobe_Acrobat_DC_logo_2020.svg.png"></img>
                    </a>
                  </div>
                  <div className="faang" id="comp6">
                    <a
                      href="https://www.interviewbit.com/microsoft-interview-questions/"
                      target="_blank"
                    >
                      <img src="https://www.fargomoorhead.org/wp-content/uploads/2020/05/Microsoft-1.png"></img>
                    </a>
                  </div>
                  <div className="faang" id="comp8">
                    <a
                      href="https://www.interviewbit.com/flipkart-interview-questions/"
                      target="_blank"
                    >
                      <img src="https://www.freepnglogos.com/uploads/flipkart-logo-png/logo-of-flipkart-icube-portable-ice-maker-latest-model-7.png"></img>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
