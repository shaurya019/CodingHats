import "./contests.css";
import { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../../context/sidebarContext/SidebarContext";
import { changeSelect } from "../../context/sidebarContext/SidebarAction";
import { Link } from "react-router-dom";

function Contests() {
  const { page, dispatch } = useContext(SidebarContext);
  const [contests, changeContests] = useState([]);
  useEffect(() => {
    dispatch(changeSelect("contests"));
  }, [dispatch]);

  return (
    <div className="contests">
      <div className="contest-heading">Competitive Programming</div>
      <div className="contest-container">
        <Link to="/contests/codechef" className="link">
          <div className="contest-box">Codechef</div>
        </Link>
        <Link to="/contests/codeforces" className="link">
          <div className="contest-box">Codeforces</div>
        </Link>
        <Link to="/contests/hackerrank" className="link">
          <div className="contest-box">Hackerearth</div>
        </Link>
        <Link to="/contests/hackerearth" className="link">
          <div className="contest-box">Hackerrank</div>
        </Link>
        <Link to="/contests/topcoder" className="link">
          <div className="contest-box">Top-Coder</div>
        </Link>
        <Link to="/contests/atcoder" className="link">
          <div className="contest-box">At-Coder</div>
        </Link>
        <Link to="/contests/csacademy" className="link">
          <div className="contest-box">Cs-Academy</div>
        </Link>
        <Link to="/contests/kickstart" className="link">
          <div className="contest-box">Kickstart</div>
        </Link>
        <Link to="/contests/leetcode" className="link">
          <div className="contest-box">Leetcode</div>
        </Link>
      </div>
    </div>
  );
}

export default Contests;
