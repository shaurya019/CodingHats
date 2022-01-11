import "./contests.css";
import { IconContext } from "react-icons/lib";
import { FcBinoculars } from "react-icons/fc";
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
      <IconContext.Provider value={{ size: "1.5em" }}>
        <div className="contest-heading">Competitive Programming< FcBinoculars /></div>
      </IconContext.Provider>
      <div className="contest-heading-2">Start With To Achieve Big!!</div>
      <hr />
      <div className="contest-container">
        <Link to="/contests/codechef" className="link">
          <div className="contest-box" id="contest-1"><img className="img" src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/zruiknbedz8yqafxbazb"></img>Codechef</div>
        </Link>
        <Link to="/contests/codeforces" className="link">
          <div className="contest-box" id="contest-2"><img className="img" src="https://res.cloudinary.com/practicaldev/image/fetch/s--N2_RJe5R--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/cer3l19eex0wy900b101.jpg"></img>Codeforces</div>
        </Link>
        <Link to="/contests/hackerrank" className="link">
          <div className="contest-box" id="contest-3"><img className="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcYo4ALBKB6MvkZ_lfdtrBN2Kj22Cs00H_neId1fqc27e7d-hNnixwwW6eEiaa2QjNYhI&usqp=CAU"></img>Hackerearth</div>
        </Link>
        <Link to="/contests/hackerearth" className="link">
          <div className="contest-box" id="contest-4"><img className="img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAWlBMVEUNFB4A6mT///8AAAANEh4NABwA62QNABoADBgEDhoNABg0OD8ImkgA72YFv1UnLDIAABC4ubvCw8Xv7/AAAAj29vaPkZOcnaAAABIKdjsHnkmztLW+v8ESGSLs8eGCAAAA/0lEQVR4nO3cOQ7CMBBAUcDsENaEnftfkwYapkEWCsR6r80U/nIVR3GvBwAAAAAAAAAAAAAAAAAAANCeYZ62ljdLm3d1nKrDUJq9no0yTVoKvDeDd4eQmI5haH96BZ6rfo7xpZ3E6SKsfbBNoXAXp9bPTZxcqnGOajXvSuEybw8VKlSoUKFChQoVKlSoUKFChQoVKlSoUOHvC68puJVV2OyD+HGj04WfUahQoUKFChUqVKhQoUKFCrteWP47fvnnNOWftSlUqFChQoUKFSpUqFChQoUKFSpUqFChwqzCP/8fv/w7Fcq/F+Mb/vxuEwAAAAAAAAAAAAAAAAAAAKDTHoDCYDr8qkOBAAAAAElFTkSuQmCC"></img>Hackerrank</div>
        </Link>
        <Link to="/contests/topcoder" className="link">
          <div className="contest-box" id="contest-5"><img className="img" src="https://avatars.githubusercontent.com/u/4291571?s=280&v=4"></img>Top-Coder</div>
        </Link>
        <Link to="/contests/atcoder" className="link">
          <div className="contest-box" id="contest-6"><img className="img" src="https://img.atcoder.jp/assets/atcoder.png"></img>At-Coder</div>
        </Link>
        <Link to="/contests/csacademy" className="link">
          <div className="contest-box" id="contest-7"><img className="img" src="https://play-lh.googleusercontent.com/mNLWhhjA3m3fNMxW8cK9l-PgCkUkvghvnYvdob5Eze4gOeod7FdH38huer7ulzTeWV8x"></img>Cs-Academy</div>
        </Link>
        <Link to="/contests/kickstart" className="link">
          <div className="contest-box" id="contest-8"><img className="img" src=""></img>Kickstart</div>
        </Link>
        <Link to="/contests/leetcode" className="link">
          <div className="contest-box" id="contest-9"><img className="img" src="data:image/png;base64,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"></img>Leetcode</div>
        </Link>
      </div>
    </div>
  );
}

export default Contests;
