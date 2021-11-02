import React from "react";
import { changeSelect } from "../../context/SidebarContext/SidebarAction";
import { useEffect } from "react";
function Question(props) {
  useEffect(() => {
    props.SidebarDispatch(changeSelect("question"));
  }, [props.SidebarDispatch]);
  return (
    <div>
      <div className="questionsContainer">
        <div className="QuestionTitle">
          <div className="QuestionTitleHeading">Title</div>
          <div className="QuestionTitleInput">
            <input></input>
          </div>
        </div>

        <div className="QuestionCompany">
          <div className="QuestionCompanyHeading">Company</div>
          <div className="QuestionCompanyInput">
            <input></input>
          </div>
        </div>

        <div className="QuestionLink">
          <div className="QuestionLinkHeading">Link</div>
          <div className="QuestionLinkInput">
            <input></input>
          </div>
        </div>

        <div className="QuestionSolution">
          <div className="QuestionSolutionHeading">Solution</div>
          <div className="QuestionSolutionInput">
            <input></input>
          </div>
        </div>

        <div className="QuestionDifficulty">
          <div className="QuestionDifficultyHeading">Difficulty</div>
          <div className="QuestionDifficultyInput">
            <select name="difficulty">
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Question;
