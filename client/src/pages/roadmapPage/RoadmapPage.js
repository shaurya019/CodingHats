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

  const data = {
    "web": {

      "How things work on internet!": [["🎯Intro to internet! ", "how does the web work? Let's have a look at a high-level overview.", "https://www.youtube.com/watch?v=Dxcc6ycZ73M"],
      ["🎯What is http? ", "Deep study of web.", "https://www.youtube.com/watch?v=eesqK59rhGA"],
      ["🎯What is hosting? ", "Way publish your website files onto the internet.", "https://www.youtube.com/watch?v=A_BKChujwTc"],
      ["🎯Intro to domain ", "Domain names serve to identify Internet resources", "https://www.youtube.com/watch?v=ut_oLhMhJsY"]],

      "Learn HTML": [["Learn the basics ", "Simple crash course about everything in HTML", "https://www.w3schools.com/html/html_basic.asp"],
      ["🎯Writing Semantic HTML ", "Semantic element clearly describes its meaning to both the browser and the developer.", "https://www.w3schools.com/html/html5_semantic_elements.asp"],
      ["🎯Accessibility ", "Web accessibility means that websites, tools, and technologies are designed and developed in such a way that people with disabilities can use them easily.", "https://www.youtube.com/playlist?list=PLNYkxOF6rcICWx0C9LVWWVqvHlYJyqw7g"],
      ["🎯Conventions and Best Practices ", "Learn to follow the best practices for writing maintainable and scalable HTML documents.", "https://github.com/hail2u/html-best-practices"],
      ],

      "Learn CSS": [["🎯Learn basics ", "Start from the basics and learn to make responsive design with CSS.", "https://www.youtube.com/watch?v=Edsxf_NBFrw"],
      ["🎯Flex-Box Tricks ", "Learn the flexbox in CSS to make responsive design easier and faster.", "https://css-tricks.com/snippets/css/a-guide-to-flexbox/"],
      ["🎯Responsive design and media queries ", "Try to make site responsive.", "https://www.youtube.com/watch?v=j1AhSWFcZpg"],
      ["🎯Advanced CSS ", "Try new things in css.", "https://www.youtube.com/watch?v=8MCjAktqZaM"],
      ],

      "More about CSS": [["🎯Bootstrap ", "Learn the most famous CSS framework in one video, find templates to create something today.", "https://www.youtube.com/watch?v=5GcQtLDGXy8"],
      ["🎯Tailwind", "Another rising CSS framework widely used everywhere - learn and build.", "https://www.youtube.com/watch?v=UBOj6rqRUME"],
      ["🎯Chakra UI", "Chakra UI is a simple, modular and accessible component library that gives you the building blocks you need to build your React applications.", "https://www.youtube.com/watch?v=s-bIsz-NR3c"],
      ["🎯Radix UI", "Radix Primitives is a low-level UI component library with a focus on accessibility, customization and developer experience.", "https://www.radix-ui.com/"],
      ["🎯SASS", "Sass is an extension to CSS or you can say CSS with superpowers.", "https://www.youtube.com/watch?v=_a5j7KoflTs"],
      ],

      "Learn Javascript": [["🎯Basics of the language", "A-Z of javascript, right from the basics. Learn one of the most famous languages out there.", "https://www.youtube.com/watch?v=W6NZfCO5SIk"],
      ["🎯Javascript built-in objects", "", "https://www.youtube.com/watch?v=4uVwGw317QM"],
      ["🎯Events", "", "https://www.youtube.com/watch?v=d4PN2rJD98g"],
      ["🎯Advanced Javascript!!", "Learn some data structures and algorithms in javascript. Although this isn't core to web development, but will help you understand JS better.", ""],
      ["", "", "https://www.youtube.com/watch?v=IUFJzLlf2cE&list=PL0b6OzIxLPbzvz4j1N4J8zCY8mu3l29MG"],
      ],

      "Javascript Framework": [["🎯React js", "React makes it painless to create interactive UIs.", "https://www.youtube.com/watch?v=RGKi6LSPDLU"],
      ["🎯Angular", "Angular is a platform for building mobile and desktop web applications. Join the community of millions of developers who build compelling user interfaces.", "https://www.youtube.com/watch?v=0LhBvp8qpro"],
      ["🎯Vue js", "Used to build web interfaces and one-page applications.", "https://www.youtube.com/watch?v=qZXt1Aom3Cs"]
      ],

      "Javascript Libraries": [["🎯What is?", "jQuery is a fast, small, and feature-rich JavaScript library.", "https://www.w3schools.com/jquERy/default.asp"],
      ["🎯jQuery", "Learn and try some animations and event handling.", "https://www.youtube.com/watch?v=YFlx1C8XwR0"]],

      "Javascript API": [["🎯Intro to web APIs", "Step to a new world of Development.", "https://www.youtube.com/watch?v=_7rT-ixivWU"],
      ["🎯REST API", "Explore API calls!!", "https://www.youtube.com/watch?v=pKd0Rpw7O48"],
      ["🎯REST API Project", "Learn and try API calls, how these fetch.", "https://www.youtube.com/watch?v=l8WPWK9mS5M"]]
    },
    "android": {

    },
    "ml": {

    }

  }

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
            {Object.keys(data[page]).map((head) => (
              <div>
                <div className="front-end" id="web-sec-1">
                  <h3><FcApproval />{head}</h3>

                  <div className="front-work">
                    {data[page][head].map((points) => (
                      <div className="sec-data" id="sec-data-1">
                        <a href={points[2]}>
                          <h4>{points[0]}</h4>
                        </a>
                        <p className="front-para" id="">{points[1]}</p>
                      </div>
                    )
                    )}
                  </div>
                </div>
                <hr></hr>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoadmapPage;
