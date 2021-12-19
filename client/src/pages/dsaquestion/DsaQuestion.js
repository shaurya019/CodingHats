import "./dsaquestion.css";
import { useLocation } from "react-router-dom";
import { useContext, useEffect , useState } from "react";
import { changeSelect } from "../../context/sidebarContext/SidebarAction";
import { SidebarContext } from "../../context/sidebarContext/SidebarContext";
import axios from 'axios';
import Datagrid from "../../components/datagrid/Datagrid";

function DsaQuestion() {
  const { dispatch } = useContext(SidebarContext);

  useEffect(() => {
    dispatch(changeSelect("dsa"));
  }, [dispatch]);

  const [questionsList , setList] = useState([]);
  const location = useLocation();
  const page = location.pathname.slice(5);

  useEffect(() => {
    async function fetchQuestions(){
      const res = await axios.get(`/dayViseQuestions?day=${page}`);
      setList(res.data);
    }
    fetchQuestions();
  },[page])


  return (
    <div>
      <h1>Question for day {page}</h1>
      <Datagrid list = {questionsList}/>
    </div>
  );
}

export default DsaQuestion;
