import React from "react";
import "./dashboard.css";
import { changeSelect } from "../../context/sidebarContext/SidebarAction";
import Technews from "../../components/technews/Technews";
import Blogs from "../../components/blogs/Blogs";

class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: null,
    };
  }
  componentDidMount() {
    //changing the selected tab from sidebar
    const { SidebarDispatch } = this.props;
    SidebarDispatch(changeSelect("dashboard"));

    //fetching the latest technology news from api
    fetch(
      "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=6c8f23713f4b458d86a9f0428ea67d3f"
    )
      .then((response) => response.json())
      .then((jsondata) =>
        this.setState({ articles: jsondata.articles.slice(0, 8) })
      );
  }

  render() {
    return (
      <div className="dashboard">
        <div className="technews">
          <div className="technewsHeading">Latest in Tech</div>
          <div className="technewsList">
            {this.state.articles &&
              this.state.articles.map((element) => {
                return <Technews {...element} />;
              })}
          </div>
        </div>
      {/* documentation */}
      </div>
    );
  }
}

export default Dashboard;
