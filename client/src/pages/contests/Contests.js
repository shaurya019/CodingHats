import "./contests.css";
import { useContext, useEffect } from "react";
import { SidebarContext } from "../../context/sidebarContext/SidebarContext";
import { changeSelect } from "../../context/sidebarContext/SidebarAction";

function Contests() {
  const { page, dispatch } = useContext(SidebarContext);

  useEffect(() => {
    dispatch(changeSelect("contests"));
  }, [dispatch]);
  return <div className="contests">Contests</div>;
}

export default Contests;
