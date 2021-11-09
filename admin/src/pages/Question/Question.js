import React from "react";
import { changeSelect } from "../../context/SidebarContext/SidebarAction";
import { useEffect, useState } from "react";
import axios from "axios";
function Question(props) {
  useEffect(() => {
    props.SidebarDispatch(changeSelect("question"));
  }, [props.SidebarDispatch]);

  const [question, setQuestion] = useState({ difficulty: "easy" });

  const handleChange = (e) => {
    setQuestion({ ...question, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/question", question);

      if (res) {
        console.log("Question Added");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <div className="questionsContainer">
        <div className="QuestionTitle">
          <div className="QuestionTitleHeading">Title</div>
          <div className="QuestionTitleInput">
            <input onChange={handleChange} name="title"></input>
          </div>
        </div>

        <div className="QuestionCompany">
          <div className="QuestionCompanyHeading">Company</div>
          <div className="QuestionCompanyInput">
            <input onChange={handleChange} name="company"></input>
          </div>
        </div>

        <div className="QuestionLink">
          <div className="QuestionLinkHeading">Link</div>
          <div className="QuestionLinkInput">
            <input onChange={handleChange} name="link"></input>
          </div>
        </div>

        <div className="QuestionSolution">
          <div className="QuestionSolutionHeading">Solution</div>
          <div className="QuestionSolutionInput">
            <input onChange={handleChange} name="solution"></input>
          </div>
        </div>

        <div className="QuestionDifficulty">
          <div className="QuestionDifficultyHeading">Difficulty</div>
          <div className="QuestionDifficultyInput">
            <select name="difficulty" onChange={handleChange} name="difficulty">
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
        </div>

        <button className="addQuestionButton" onClick={handleSubmit}>
          Add Question
        </button>
      </div>
    </div>
  );
}

export default Question;
