import "./roadmapPage.css";
import { useContext, useEffect } from "react";
import { SidebarContext } from "../../context/sidebarContext/SidebarContext";
import { changeSelect } from "../../context/sidebarContext/SidebarAction";
import { useLocation } from "react-router-dom";
function RoadmapPage() {
  const { dispatch } = useContext(SidebarContext);

  useEffect(() => {
    dispatch(changeSelect("roadmaps"));
  }, [dispatch]);

  const location = useLocation();
  const page = location.pathname.slice(10);

  return (
    <div className="Web-road">
      <div className="col">
        <div className="row">
          <div className="Web-title">
            <div id="title-1">Web Development</div>
            <div id="title-2">ROADMAP</div>
            <div id="title-3">Try and Mark your name!</div>
          </div>
          <hr></hr>
          <div className="web-roadmaps">
            <div className="web-sec-1"></div>
            <div className="web-sec-2"></div>
            <div className="web-sec-3"></div>
            <div className="web-sec-4"></div>
            <div className="web-sec-5"></div>
            <div className="web-sec-6"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoadmapPage;
