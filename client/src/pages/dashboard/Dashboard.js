import React from "react";
import "./dashboard.css";
import { changeSelect } from "../../context/sidebarContext/SidebarAction";
import Technews from "../../components/technews/Technews";

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
    const colors = [
      "#ff247d",
      "#88FFF7",
      "FF4848",
      "#77D970",
      "#7C83FD",
      "#34BE82",
      "#F2F013",
      "2F86A6",
    ];

    return (
      <div className="dashboard">
        <div className="technews">
          <div className="technewsHeading">Latest in Tech</div>
          <div className="technewsList">
            {!this.state.articles && <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}><div class="water">
            </div></div>}
            {this.state.articles &&
              this.state.articles.map((element, index) => {
                return <Technews {...element} color={colors[index]} />;
              })}
          </div>
        </div>
        {/* google */}
        <div className="bag">
          <div className="bags-container">
            <div className="bags" id=""></div>
            <div className="bags"></div>
            <div className="bags"></div>
          </div>
        </div>


        {/* blogs */}
        <div className="blogs">
          <div className="blog">
            <div className="blogs-head">
              <h2>Blogs</h2>
            </div>
            <div className="blogs-para">
              <p>
                Here are some blogs to get you going on some important topics.
                Create your own platform for blogging Coding Hats is a powerful
                website for new-creators to publish, share, and grow there work
                around their content.It comes with modern tools to build a
                website, publish content, get knowledge.
                <br></br>
                Improve your resume, apply for internships/jobs the right way ,
                learn more about cold emails, and much more! Keep going.
              </p>
            </div>
            <div className="b-box">
              <div className="O-box">
                <div>
                  <p className="i-box" id="f-box">
                    <h3>What is GSOC?</h3>
                    <p className="text-blog-box" id="">
                      Google Summer of Code is a global, online program focused
                      on bringing new contributors into open source software
                      development. GSoC Contributors work for 12+ week in a
                      programming project under the guidance of mentors.
                    </p>
                    <div className="blog-box-main">
                      <a href="https://www.geeksforgeeks.org/how-to-prepare-for-gsoc-google-summer-of-code/">
                        Learn more
                      </a>
                      <h5>HOT</h5>{" "}
                    </div>
                  </p>
                  <p className="i-box" id="s-box">
                    <h3> RIGHT PROJECT </h3>
                    <p className="text-blog-box" id="">
                      Apart from learning the basics of your stream, B.Tech
                      projects are one of the most important things in Computer
                      Science that needs to be done seriously. You will be asked
                      about this project in almost every interview later.
                    </p>
                    <div className="blog-box-main">
                      <a href="https://blog.producthunt.com/how-to-come-up-with-side-project-ideas-4a2c8049deba">
                        Learn more
                      </a>
                      <h5>HOT</h5>{" "}
                    </div>
                  </p>
                  <p className="i-box" id="t-box">
                    <h3>Try RESEARCHER?</h3>
                    <p className="text-blog-box" id="">
                      A research internship also known as dissertation
                      internship is where you will undertake research work for a
                      company to work on.
                    </p>
                    <div className="blog-box-main">
                      <a href="https://blog.internshala.com/2019/04/how-to-get-an-internship-at-iit/">
                        Learn more
                      </a>
                      <h5>HOT</h5>{" "}
                    </div>
                  </p>
                </div>
                <div>
                  <p className="i-box" id="f-box">
                    <h3>HACKERTHONS</h3>
                    <p className="text-blog-box" id="">
                      Image result for about HACKERTHONS A hackathon is an
                      event, usually hosted by a tech company or organization,
                      where programmers get together for a short period of time
                      to collaborate on a project.
                    </p>
                    <div className="blog-box-main">
                      <a href="https://www.youtube.com/watch?v=_d69HhC0Qu0">
                        Learn more
                      </a>
                      <h5>HOT</h5>{" "}
                    </div>
                  </p>
                  <p className="i-box" id="s-box">
                    <h3>Join GSDC</h3>
                    <p className="text-blog-box" id="">
                      Helping students bridge the gap between theory and
                      practice Google Developer Student Clubs (GDSC) are
                      community groups for college and university students
                      interested in Google developer technologies. Students from
                      all undergraduate or graduate programs with an interest in
                      growing as a developer are welcome.
                    </p>
                    <div className="blog-box-main">
                      <a href="https://developers.google.com/community/gdsc">
                        Learn more
                      </a>
                      <h5>HOT</h5>{" "}
                    </div>
                  </p>
                  <p className="i-box" id="t-box">
                    <h3>Internship in MNC?</h3>
                    <p className="text-blog-box" id="">
                      First of all I would like to appreciate your thoughts of
                      doing an internship program. but you don't need to do
                      internship at an MNC. Instead you can do it at a startup.
                    </p>
                    <div className="blog-box-main">
                      <a href="https://www.youtube.com/watch?v=wYYUf6eq96E">
                        Learn more
                      </a>
                      <h5>HOT</h5>{" "}
                    </div>
                  </p>
                </div>
                <div>
                  <p className="i-box" id="f-box">
                    <h3>TIPS for INTERVIEW</h3>
                    <p className="text-blog-box" id="">
                      They also give you a chance to find out if the job and
                      company are right for you. Follow the tips here to ace
                      your interviews.
                    </p>
                    <div className="blog-box-main">
                      <a href="https://www.indeed.com/career-advice/interviewing/job-interview-tips-how-to-make-a-great-impression">
                        Learn more
                      </a>
                      <h5>HOT</h5>{" "}
                    </div>
                  </p>
                  <p className="i-box" id="s-box">
                    <h3>Is CP is boon or bane?</h3>

                    <p className="text-blog-box" id="">
                      CP is good for someone preparing for job interviews and
                      treating solving algorithms, data structures, logic, and
                      math as a hobby/sport. Rarely competitive programmers turn
                      CP into a life career.
                    </p>
                    <div className="blog-box-main">
                      <a href="https://www.geeksforgeeks.org/how-to-prepare-for-competitive-programming/">
                        Learn more
                      </a>
                      <h5>HOT</h5>{" "}
                    </div>
                  </p>
                  <p className="i-box" id="t-box">
                    <h3>Want Reference?</h3>
                    <p className="text-blog-box" id="">
                      Just increase connection and try to talk to the people in
                      formal way and impress them with your resume.
                    </p>
                    <div className="blog-box-main">
                      <a href="https://www.youtube.com/watch?v=_EsJYf5-EAk">
                        Learn more
                      </a>
                      <h5>HOT</h5>
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* challenge */}
        <div className="challenge">
          <div className="col-challenge">
            <div className="head-challenge">
              <div className="head-challenge-1">GOOGLE'S</div>
              <div className="head-challenge-2"> UPCOMING CHALLENGE</div></div>
            <div className="row-challenge">
              <div className="google-challenge" id="challenge-1">
                <div className="google-challenge-content">
                  <div className="contest-img" id="google-img-1">
                    <img src="https://www.hiretheyouth.org/wp-content/uploads/2018/01/Hash-Code.jpg" alt="sorry"></img>
                  </div>
                  <div className="google-para" id="google-para1">
                    <h3>Google HashCode</h3>
                    <p>A team programming competition – you pick your team and programming language to solve an engineering problem.</p>
                  </div>
                  <div className="google-link" id="google-link1">
                    <a href="https://codingcompetitions.withgoogle.com/hashcode">Register</a>
                    <p>Jan 6 , 2022</p>
                  </div>
                </div>
              </div>
              <div className="google-challenge" id="challenge-2">
                <div className="google-challenge-content">
                  <div className="contest-img" id="google-img-2">
                    <img src="https://codingcompetitions.withgoogle.com/static/kickstart-fb.jpg" alt="sorry"></img>
                  </div>
                  <div className="google-para" id="google-para2">
                    <h3>Google Kick Start</h3>
                    <p>Hone your coding skills with algorithmic puzzles meant for students and those new to coding competitions.</p>
                  </div>
                  <div className="google-link" id="google-link2">
                    <a href="https://codingcompetitions.withgoogle.com/kickstart">Register</a>
                    <p> Feb 1 , 2022</p>
                  </div>
                </div>
              </div>
              <div className="google-challenge" id="challenge-3">
                <div className="google-challenge-content">
                  <div className="contest-img" id="google-img-3">
                    <img src="http://img.timeinc.net/time/photoessays/2010/top10_geeky_champs/google.jpg" alt="sorry"></img>
                  </div>
                  <div className="google-para" id="google-para3">
                    <h3>Google Code Jam</h3>
                    <p>Put your skills to the test as you work your way through multiple rounds of algorithmic puzzles for the title of Code Jam Champ and $15,000 USD.</p>
                  </div>
                  <div className="google-link" id="google-link3">
                    <a href="https://codingcompetitions.withgoogle.com/codejam">Register</a>
                    <p>Mar 2 , 2022</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Hackathon */}
        <div className="hacker">
          <div className="hacker-col">
            <div className="hacker-head"><h1>Hackathon</h1></div>
            <div className="hacker-head-para"><h5>Want to try?</h5></div>
            <div className="row"></div>
          </div>

        </div>
      </div>
    );
  }
}

export default Dashboard;
