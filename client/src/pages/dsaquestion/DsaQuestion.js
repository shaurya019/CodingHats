import "./dsaquestion.css";
import { useLocation } from "react-router-dom";
import { useContext, useEffect } from "react";
import { changeSelect } from "../../context/sidebarContext/SidebarAction";
import { SidebarContext } from "../../context/sidebarContext/SidebarContext";

function DsaQuestion() {
  const { dispatch } = useContext(SidebarContext);

  useEffect(() => {
    dispatch(changeSelect("dsa"));
  }, [dispatch]);

  const location = useLocation();
  const page = location.pathname.slice(5);

  return (
    <div>
      <h1>Question for day {page}</h1>
    </div>
  );
}

export default DsaQuestion;
