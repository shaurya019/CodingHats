import './roadmapPage.css';
import { useContext, useEffect} from "react";
import { SidebarContext } from "../../context/sidebarContext/SidebarContext";
import { changeSelect } from "../../context/sidebarContext/SidebarAction";
import {useLocation} from 'react-router-dom';
function RoadmapPage() {

    const {dispatch } = useContext(SidebarContext);

    useEffect(() => {
      dispatch(changeSelect("roadmaps"));
    }, [dispatch]);

    const location = useLocation();
    const page = location.pathname.slice(10);

    return (
        <div>
           {page} Roadmap
        </div>
    )
}

export default RoadmapPage;

