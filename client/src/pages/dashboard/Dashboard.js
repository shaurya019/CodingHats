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
        <div className="docs">
          <div className="doc-head">
            <h2>Find Out New</h2>
          </div>
          <div className="doc-mat">
            <div className="doc-row" id="row-1">
              <div className="doc-img" id="doc-box-1">
                <a
                  href="https://docs.microsoft.com/en-us/cpp/cpp/?view=msvc-160"
                  target="_blank"
                >
                  <img src="https://download.logo.wine/logo/C%2B%2B/C%2B%2B-Logo.wine.png"></img>
                </a>
              </div>
            </div>
            <div className="doc-row" id="row-2">
              <div className="doc-img" id="doc-box-2">
                <a href="https://docs.oracle.com/en/java/" target="_blank">
                  <img src="https://logos-download.com/wp-content/uploads/2016/10/Java_logo_icon.png"></img>
                </a>
              </div>
              <div className="doc-img" id="doc-box-3">
                <a href="https://docs.python.org/" target="_blank">
                  <img src="data:image/jpeg;base64,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"></img>
                </a>
              </div>
            </div>
            <div className="doc-row" id="row-3">
              <div className="doc-img" id="doc-box-5">
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                  target="_blank"
                >
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png"></img>
                </a>
              </div>
              <div className="doc-img" id="doc-box-6">
                <a
                  href="https://reactjs.org/docs/getting-started.html"
                  target="_blank"
                >
                  <img src="https://qph.fs.quoracdn.net/main-qimg-c74778d67b3c3d3419cf86b755b32b06"></img>
                </a>
              </div>
              <div className="doc-img" id="doc-box-7">
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS/Reference"
                  target="_blank"
                >
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"></img>
                </a>
              </div>
            </div>
            <div className="doc-row" id="row-4">
              <div className="doc-img" id="doc-box-8">
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                  target="_blank"
                >
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png"></img>
                </a>
              </div>
              <div className="doc-img" id="doc-box-9">
                <a
                  href="https://www.ruby-lang.org/en/documentation/"
                  target="_blank"
                >
                  <img src="data:image/png;base64,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"></img>
                </a>
              </div>
              <div className="doc-img" id="doc-box-10">
                <a href="https://nodejs.org/en/docs/" target="_blank">
                  <img src="https://media.istockphoto.com/vectors/nodejs-vector-logo-backend-programming-in-javascript-server-vector-id1195857274?k=20&m=1195857274&s=170667a&w=0&h=k8oHsv3ehrvhviozLlvhEjGHweiHU7hbBv7bHEkgUqc="></img>
                </a>
              </div>
              <div className="doc-img" id="doc-box-11">
                <a href="https://www.php.net/docs.php" target="_blank">
                  <img src="https://pngimg.com/uploads/php/php_PNG43.png"></img>
                </a>
              </div>
            </div>
            <div className="doc-row" id="row-5">
              <div className="doc-img" id="doc-box-12">
                <a href="https://dev.mysql.com/doc/" target="_blank">
                  <img src="https://thumbs.dreamstime.com/b/sql-database-icon-logo-design-ui-ux-app-orange-inscription-shadow-96841969.jpg"></img>
                </a>
              </div>
              <div className="doc-img" id="doc-box-13">
                <a
                  href="https://groovy-lang.org/documentation.html"
                  target="_blank"
                >
                  <img src="https://miro.medium.com/max/961/1*BXC0pxNw0QjeRGTcoIlvHw.png"></img>
                </a>
              </div>
              <div className="doc-img" id="doc-box-14">
                <a
                  href="https://help.sap.com/doc/abapdocu_751_index_htm/7.51/en-US/index.htm"
                  target="_blank"
                >
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/SAP_2011_logo.svg/2560px-SAP_2011_logo.svg.png"></img>
                </a>
              </div>
            </div>
            <div className="doc-row" id="row-6">
              <div className="doc-img" id="doc-box-15">
                <a
                  href="https://en.wikipedia.org/wiki/Go_(programming_language)"
                  target="_blank"
                >
                  <img src="https://www.kindpng.com/picc/m/360-3600447_go-language-logo-png-transparent-png.png"></img>
                </a>
              </div>
              <div className="doc-img" id="doc-box-16">
                <a href="https://kotlinlang.org/docs/home.html" target="_blank">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Kotlin_logo.svg/2560px-Kotlin_logo.svg.png"></img>
                </a>
              </div>
            </div>
            <div className="doc-row" id="row-7">
              <div className="doc-img" id="doc-box-17">
                <a href="https://flutter.dev/docs" target="_blank">
                  <img src="https://ih1.redbubble.net/image.1057190214.1918/flat,750x1000,075,f.u1.jpg"></img>
                </a>
              </div>
            </div>
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
          <div className="blogs-quater">
            <div className="blogs-img" id="bg-quater-1">
              <a className="blogs-quater-box" id="dash-blog-box-1" href="" target="_blank"></a>
              <a className="blogs-quater-box blog-box-2" id="dash-blog-box-2" href="" target="_blank"></a>
            </div>
            <div className="blogs-img" id="bg-quater-2">
              <a className="blogs-quater-box" id="dash-blog-box-4" href="" target="_blank"></a>
              <a className="blogs-quater-box blog-box-2" id="dash-blog-box-5" href="" target="_blank"></a>
              
            </div>
            <div className="blogs-img" id="bg-quater-3">
              <a className="blogs-quater-box" id="dash-blog-box-7" href="" target="_blank"></a>
              <a className="blogs-quater-box blog-box-2" id="dash-blog-box-8" href="" target="_blank"></a>
              
            </div>
            <div className="blogs-img" id="bg-quater-4">
              <a className="blogs-quater-box" id="dash-blog-box-10" href="" target="_blank"></a>
              <a className="blogs-quater-box blog-box-2" id="dash-blog-box-11" href="" target="_blank"></a>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
