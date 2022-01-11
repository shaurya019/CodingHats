import "./roadmapPage.css";
import { useContext, useEffect } from "react";
import { FcApproval } from "react-icons/fc";
import { FaArrowRight } from "react-icons/fa";
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
            <div id="title-1">Web Development ✨</div>
            <div id="title-2">ROADMAP</div>
            <div id="title-3">Try and Mark your name!</div>
          </div>
          <div className="back-but"><a href="" className="link-but"> Roadmaps</a></div>
          <hr></hr>
          <div className="web-roadmaps">
            <div className="front-end" id="web-sec-1">
              <h3><FcApproval />How things work on internet!</h3>
              <div className="front-work">
                <div className="sec-data" id="sec-data-1">
                  <a href="https://www.youtube.com/watch?v=Dxcc6ycZ73M">
                  <h4>🎯Intro to internet! </h4>
                  </a>
                  <p className="front-para" id="">how does the web work? Let's have a look at a high-level overview.</p>
                </div>
                <div className="sec-data" id="sec-data-2">
                  <a href="https://www.youtube.com/watch?v=eesqK59rhGA">
                  <h4>🎯What is http? </h4>
                  </a>
                  <p className="front-para" id="">Deep study of web.</p>
                </div>
                <div className="sec-data" id="sec-data-3">
                <a href="https://www.youtube.com/watch?v=A_BKChujwTc">
                  <h4>🎯What is hosting? </h4>
                  </a>
                  <p className="front-para" id="">Way publish your website files onto the internet.</p>
                </div>
                <div className="sec-data" id="sec-data-4">
                <a href="https://www.youtube.com/watch?v=ut_oLhMhJsY">
                  <h4>🎯Intro to domain </h4>
                  </a>
                  <p className="front-para" id="">Domain names serve to identify Internet resources</p>
                </div>
              </div>
            </div>
            <hr></hr>
            <div className="front-end" id="web-sec-2">
              <h3><FcApproval />Learn HTML</h3>
              <div className="front-work">
                <div className="sec-data" id="sec-data-5">
                  <a href="https://www.w3schools.com/html/html_basic.asp">
                    <h4>🎯Learn the basics </h4>
                    </a>
                  <p className="front-para" id="">Simple crash course about everything in HTML</p>
                </div>
                <div className="sec-data" id="sec-data-6">
                <a href="https://www.w3schools.com/html/html5_semantic_elements.asp">
                  <h4>🎯Writing Semantic HTML </h4>
                  </a>
                  <p className="front-para" id="">Semantic element clearly describes its meaning to both the browser and the developer.</p>
                </div>
                <div className="sec-data" id="sec-data-7">
                <a href="https://www.youtube.com/playlist?list=PLNYkxOF6rcICWx0C9LVWWVqvHlYJyqw7g">
                  <h4>🎯Accessibility </h4>
                  </a>
                  <p className="front-para" id="">Web accessibility means that websites, tools, and technologies are designed and developed in such a way that people with disabilities can use them easily.</p>
                </div>
                <div className="sec-data" id="sec-data-8">
                <a href="https://github.com/hail2u/html-best-practices">
                  <h4>🎯Conventions and Best Practices </h4>
                  </a>
                  <p className="front-para" id="">Learn to follow the best practices for writing maintainable and scalable HTML documents.</p>
                </div>
              </div>
            </div>
            <hr></hr>
            <div className="front-end" id="web-sec-3">
              <h3><FcApproval />Learn CSS</h3>
              <div className="front-work">
                <div className="sec-data" id="sec-data-10">
                 <a href="https://www.youtube.com/watch?v=Edsxf_NBFrw">
                  <h4>🎯Learn basics </h4>
                  </a>
                  <p className="front-para" id="">Start from the basics and learn to make responsive design with CSS.</p>
                </div>
                <div className="sec-data" id="sec-data-11">
                <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/">
                  <h4>🎯Flex-Box Tricks </h4>
                  </a>
                  <p className="front-para" id="">Learn the flexbox in CSS to make responsive design easier and faster.</p>
                </div>
                <div className="sec-data" id="sec-data-12">
                <a href="https://www.youtube.com/watch?v=j1AhSWFcZpg">
                   <h4>🎯Responsive design and media queries </h4>
                   </a>
                  <p className="front-para" id="">Try to make site responsive.</p>
                </div>
                <div className="sec-data" id="sec-data-13">
                <a href="https://www.youtube.com/watch?v=8MCjAktqZaM">
                  <h4>🎯Advanced CSS </h4>
                  </a>
                  <p className="front-para" id="">Try new things in css.</p>
                </div>
              </div>
              <hr></hr>
              <div className="front-end" id="web-sec-4">
                <h3><FcApproval />More About CSS</h3>
                <div className="front-work">
                <div className="sec-data" id="sec-data-14">
                <a href="https://www.youtube.com/watch?v=5GcQtLDGXy8">
                  <h4>🎯Bootstrap </h4>
                  </a>
                  <p className="front-para" id="">Learn the most famous CSS framework in one video, find templates to create something today.</p>
                </div>
                <div className="sec-data" id="sec-data-14">
                <a href="https://www.youtube.com/watch?v=UBOj6rqRUME">
                  <h4>🎯Tailwind </h4>
                  </a>
                  <p className="front-para" id="">Another rising CSS framework widely used everywhere - learn and build.</p>
                </div>
                <div className="sec-data" id="sec-data-14">
                <a href="https://www.youtube.com/watch?v=s-bIsz-NR3c">
                  <h4>🎯Chakra UI </h4>
                  </a>
                  <p className="front-para" id="">Chakra UI is a simple, modular and accessible component library that gives you the building blocks you need to build your React applications.</p>
                </div>
                <div className="sec-data" id="sec-data-14">
                <a href="https://www.radix-ui.com/">
                  <h4>🎯Radix UI </h4>
                  </a>
                  <p className="front-para" id="">Radix Primitives is a low-level UI component library with a focus on accessibility, customization and developer experience.</p>
                </div>
                <div className="sec-data" id="sec-data-17">
                <a href="https://www.youtube.com/watch?v=_a5j7KoflTs">
                  <h4>🎯SASS </h4>
                  </a>
                  <p className="front-para" id="">Sass is an extension to CSS or you can say CSS with superpowers.</p>
                </div>
                </div>
              </div>
            </div>
            <hr></hr> 
            <div className="front-end" id="web-sec-5">
              <h3><FcApproval />Learn Javascript</h3>
              <div className="front-work">
                <div className="sec-data" id="sec-data-20">
                <a href="https://www.youtube.com/watch?v=W6NZfCO5SIk">
                  <h4>🎯Basics of the language </h4>
                  </a>
                  <p className="front-para" id="">A-Z of javascript, right from the basics. Learn one of the most famous languages out there.</p>
                </div>
                <div className="sec-data" id="sec-data-21">
                <a href="https://www.youtube.com/watch?v=4uVwGw317QM">
                  <h4>🎯JavaScript built-in objects </h4>
                  </a>
                  <p className="front-para" id=""></p>
                </div>
                <div className="sec-data" id="sec-data-22">
                <a href="https://www.youtube.com/watch?v=d4PN2rJD98g">
                  <h4>🎯Events </h4>
                  </a>
                  <p className="front-para" id=""></p>
                </div>
                <div className="sec-data" id="sec-data-23">
                <a href="https://www.youtube.com/watch?v=IUFJzLlf2cE&list=PL0b6OzIxLPbzvz4j1N4J8zCY8mu3l29MG">
                  <h4>🎯Advanced JavaScript!! </h4>
                  </a>
                  <p className="front-para" id="">Learn some data structures and algorithms in javascript. Although this isn't core to web development, but will help you understand JS better.</p>
                </div>
              </div>
            </div>
            <hr></hr>
            <div className="front-end" id="web-sec-6">
              <h3><FcApproval />Javascript Framework</h3>
              <div className="front-work">
                <div className="sec-data" id="sec-data-24">
                <a href="https://www.youtube.com/watch?v=RGKi6LSPDLU">
                  <h4>🎯React js </h4>
                  </a>
                  <p className="front-para" id="">React makes it painless to create interactive UIs.</p>
                </div>
                <div className="sec-data" id="sec-data-25">
                <a href="https://www.youtube.com/watch?v=0LhBvp8qpro">
                  <h4>🎯Angular </h4>
                  </a>
                  <p className="front-para" id="">Angular is a platform for building mobile and desktop web applications. Join the community of millions of developers who build compelling user interfaces.</p>
                </div>
                <div className="sec-data" id="sec-data-26">
                <a href="https://www.youtube.com/watch?v=qZXt1Aom3Cs">
                  <h4>🎯Vue js </h4>
                  </a>
                  <p className="front-para" id="">Used to build web interfaces and one-page applications.</p>
                </div>
              </div>
            </div>
            <hr></hr>
            <div className="front-end" id="web-sec-7">
              <h3><FcApproval />Javascript Libraries</h3>
              <div className="front-work">
              <div className="sec-data" id="sec-data-27">
              <a href="https://www.w3schools.com/jquERy/default.asp">
                <h4>🎯What is? </h4>
                </a>
                <p className="front-para" id="">jQuery is a fast, small, and feature-rich JavaScript library.</p>
              </div>
              <div className="sec-data" id="sec-data-28">
              <a href="https://www.youtube.com/watch?v=YFlx1C8XwR0">
                <h4>🎯jQuery </h4>
                </a>
                <p className="front-para" id="">Learn and try some animations and event handling.</p>
              </div>
            </div>
            </div>
            <hr></hr>
            <div className="front-end" id="web-sec-8">
              <h3><FcApproval />Javascript API </h3>
              <div className="front-work">
                <div className="sec-data" id="sec-data-29">
                <a href="https://www.youtube.com/watch?v=_7rT-ixivWU">
                  <h4>🎯Intro to web APIs </h4>
                  </a>
                  <p className="front-para" id="">Step to a new world of Development.</p>
                </div>
                <div className="sec-data" id="sec-data-30">
                <a href="https://www.youtube.com/watch?v=pKd0Rpw7O48">
                  <h4>🎯REST API </h4>
                  </a>
                  <p className="front-para" id="">Explore API calls!!</p>
                </div>
                <div className="sec-data" id="sec-data-32">
                <a href="https://www.youtube.com/watch?v=l8WPWK9mS5M">
                  <h4>🎯 REST API Project!! </h4>
                  </a>
                  <p className="front-para" id="">Learn and try API calls, how these fetch.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoadmapPage;
