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
        <div></div>
        {/* blogs */}
        <div className="blogs">
          <div className="blog">
            <div className="blogs-head">
              <h2>Blogs</h2>
            </div>
            <div className="blogs-para">
              <p>
                <mark>Here are some blogs</mark> to get you going on some
                important topics. Create your own platform for blogging Coding
                Hats is a powerful website for new-creators to publish, share,
                and grow there work around their content.It comes with modern
                tools to build a website, publish content, get knowledge. 
                <br></br>
                <mark>
                  Improve your resume, apply for internships/jobs the right way
                </mark>
                , learn more about cold emails, and much more! Keep going.
              </p>
            </div>
          </div>
          {/* <div className="blogs-quater">
            <div className="blogs-quater-box">
              <div className="blogs-box-1" id="blog-1"></div>
              <div className="blogs-box-1" id="blog-2"></div>
              <div className="blogs-box-1" id="blog-3"></div>
            </div>
            <div className="blogs-quater-box">
              <div className="blogs-box-2 h-full " id="blog-4"></div>
              <div className="blogs-box-2 h-full " id="blog-5"></div>
              <div className="blogs-box-2 h-full " id="blog-6"></div>
            </div>
          </div> */}
        </div>
      </div>
    );
  }
}

export default Dashboard;
