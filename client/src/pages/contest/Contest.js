import "./contest.css";
import { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../../context/sidebarContext/SidebarContext";
import { changeSelect } from "../../context/sidebarContext/SidebarAction";
import { useLocation } from "react-router-dom";

function Contest() {
  const { page, dispatch } = useContext(SidebarContext);
  const [contests, changeContests] = useState(null);
  const location = useLocation();
  const contestName = location.pathname.slice(10);

  useEffect(() => {
    dispatch(changeSelect("contests"));
  }, [dispatch]);

  useEffect(() => {
    let url = "https://kontests.net/api/";
    switch (contestName) {
      case "codechef":
        url += "v1/code_chef";
        break;
      case "codeforces":
        url += "v1/codeforces";
        break;
      case "hackerrank":
        url += "v1/hacker_rank";
        break;
      case "hackerearth":
        url += "v1/hacker_earth";
        break;
      case "topcoder":
        url += "v1/top_coder";
        break;
      case "atcoder":
        url += "v1/at_coder";
        break;
      case "csacademy":
        url += "v1/cs_academy";
        break;
      case "kickstart":
        url += "v1/kick_start";
        break;
      case "leetcode":
        url += "v1/leet_code";
        break;
      default:
        url += "v1/leet_code";
        break;
    }

    console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((jsondata) => {
        changeContests(jsondata);
      });
  }, []);

  return (
    <div className="contests">
      <div className="contest-heading">{contestName}</div>
      <div className="contest-sub-heading">Upcoming Contest</div>
      <div className="all-contests">
        {!contests && <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100vh" }}>
          <div className="water"></div></div>}
        {contests && contests.length == 0 && <div>No Contests </div>}
        {contests &&
          contests.map((element) => {
            return (
              <div className="contest-div">
                <div className="contest-name">
                  <div>Name:</div>
                  <div>{element.name}</div>
                </div>
                <div className="contest-url">
                  <div>URL:</div>
                  <div className="url-div">
                    <a href={element.url} target="_blank">
                      {element.url}
                    </a>
                  </div>
                </div>
                <div className="contest-start-time">
                  <div>Start-time:</div>
                  <div>{element.start_time}</div>
                </div>
                <div className="contest-end-time">
                  <div>End-time:</div>
                  <div>{element.end_time}</div>
                </div>
                <div className="contest-duration">
                  <div>Duration:</div>
                  <div>{element.duration}</div>
                </div>
                <div className="contest-site">
                  <div>Site:</div>
                  <div>{element.site}</div>
                </div>
                <div className="contest-status">
                  <div>Status:</div>
                  <div>{element.status}</div>
                </div>
                <div className="contest-in-24-hours">
                  <div>In 24 hours?:</div>
                  <div>{element.in_24_hours}</div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Contest;
