import React from 'react'
import { changeSelect } from "../../context/SidebarContext/SidebarAction";
import { useEffect, useState } from 'react';
import axios from 'axios';
import './DayVise.css';

function DayVise(props) {
  useEffect(() => {
    props.SidebarDispatch(changeSelect("dayViseQuestion"));
  }, [props.SidebarDispatch]);

  const [list, changeList] = useState([]);

  const [dayQuestion, setQuestion] = useState({});

  useEffect(() => {
    const fetchQuestions = async () => {
      const res = await axios.get("/question");
      changeList(res.data);
    };
    fetchQuestions();
  }, []);

  const handleSelect = (e) => {
    let value = Array.from(e.target.selectedOptions, (option) => option.value);
    setQuestion({ ...dayQuestion, [e.target.name]: value })
  }


  const handleChange = (e) => {
    setQuestion({ ...dayQuestion, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/dayViseQuestions", dayQuestion);

      if (res) {
        console.log("This day Questions Added");
        alert("This day Questions Added")
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className="Question">
        <div className="QuestionsDay">
          <div className="QuestionsDayTitle">Day</div>
          <div className="QuestionsDayTitleInput">
            <input onChange={handleChange} name="day"></input>
          </div>
        </div>

        <div className="addQuestions">
          <select multiple name="questionsArray" onChange={handleSelect}>
            {list.map((question) => (
              <option key={question._id} value={question._id}>
                {question.title}
              </option>
            ))
            }
          </select>
        </div>
        <button className="addQuestionButton" onClick={handleSubmit}>
          Add this day Questions
        </button>
      </div>
    </div>
  )
}

export default DayVise
