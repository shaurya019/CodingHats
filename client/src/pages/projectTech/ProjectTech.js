import React from "react";
import "./projectTech.css";
import { IconContext } from "react-icons/lib";
import { FaGithub } from "react-icons/fa";
import { SiWebauthn } from "react-icons/si";
import { FcApproval } from "react-icons/fc";
import { useContext, useEffect } from "react";
import { changeSelect } from "../../context/sidebarContext/SidebarAction";
import { SidebarContext } from "../../context/sidebarContext/SidebarContext";
import { useLocation } from "react-router-dom";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-elastic-carousel";
import { Link } from "react-router-dom";

function ProjectTech() {
  const { dispatch } = useContext(SidebarContext);

  const location = useLocation();
  const techName = location.pathname.slice(10);

  useEffect(() => {
    dispatch(changeSelect("projects"));
  }, [dispatch]);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
  ]

  // All projects data 
  // Add new technologies projects here
  const projects = {
    basic: {
      easy: [
        { id: 1, title: "One Page Website", link: "https://www.youtube.com/watch?v=ZFQkb26UD1Y", background: 'linear-gradient(-45deg, #8a2387, #e94057, #f27121 88%)' },
        { id: 2, title: "Drop down", link: "https://www.youtube.com/watch?v=ZFQkb26UD1Y", background: 'linear-gradient(-45deg, #a8ff78, #78ffd6)' },
        { id: 3, title: "Popup", link: "https://www.youtube.com/watch?v=MBaw_6cPmAw&list=PLZlA0Gpn_vH8DWL14Wud_m8NeNNbYKOkj&index=14", background: 'linear-gradient(-45deg, #2193b0, #6dd5ed)' },
        { id: 4, title: "Card Matching Game", link: "https://www.youtube.com/watch?v=28VfzEiJgy4&list=PLZlA0Gpn_vH8DWL14Wud_m8NeNNbYKOkj&index=27", background: 'linear-gradient(-45deg, #42275a, #734b6d)' },
        { id: 5, title: "Animation", link: "https://www.youtube.com/watch?v=RDLg-p6PdTA&list=PLZlA0Gpn_vH8DWL14Wud_m8NeNNbYKOkj&index=28", background: 'linear-gradient(-45deg, #dd5e89, #f7bb97)' }
      ],
      medium: [
        { id: 1, title: "Snake Game", link: "https://www.youtube.com/watch?v=2ZDnw6ifdSI&list=PLu0W_9lII9aiQiOwthuSvinxoflmhRxM3&index=7", background: 'linear-gradient(to right, #fc4a1a, #f7b733)' },
        { id: 2, title: "Moving Lamborghini", link: "https://www.youtube.com/watch?v=Ii5pO_CFfys&list=PLu0W_9lII9aiQiOwthuSvinxoflmhRxM3&index=3", background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,121,110,1) 60%, rgba(0,212,255,1) 100%)' },
        { id: 3, title: "Action Game", link: "https://www.youtube.com/watch?v=_OHRerLS4dI&list=PLu0W_9lII9aiQiOwthuSvinxoflmhRxM3&index=4", background: 'linear-gradient(to right, #7f00ff, #e100ff)' },
        { id: 4, title: "Blog", link: "https://www.youtube.com/watch?v=9FD2ugeS4OU&list=PLu0W_9lII9aiQiOwthuSvinxoflmhRxM3&index=5", background: 'linear-gradient(to bottom right, #000428 11%, #004e92 80%)' },
        { id: 5, title: "Weather App", link: "https://www.youtube.com/watch?v=WZNG8UomjSI", background: 'linear-gradient(to bottom right, #7b4397 11%, #ff5050 95%)' }
      ],
      hard: [
        { id: 1, title: "Portfolio Site", link: "https://www.youtube.com/watch?v=eRTeF4MPnCg&list=PLu0W_9lII9aiQiOwthuSvinxoflmhRxM3&index=10", background: 'linear-gradient(-45deg, #8a2387, #e94057, #f27121 88%)' },
        { id: 2, title: "Windows 11", link: "https://www.youtube.com/watch?v=OtOmxa9UMe8&list=PLu0W_9lII9aiQiOwthuSvinxoflmhRxM3&index=8", background: 'linear-gradient(-45deg, #a8ff78, #78ffd6)' },
        { id: 3, title: "Spotify Clone", link: "https://www.youtube.com/watch?v=ANzPM5-lwXc&list=PLu0W_9lII9aiQiOwthuSvinxoflmhRxM3&index=1", background: 'linear-gradient(-45deg, #2193b0, #6dd5ed)' },
      ],
    },

    react: {
      easy: [
        { id: 1, title: "Property-finder", link: "https://github.com/ajayns/react-projects/tree/master/property-finder", background: 'linear-gradient(to right, #fc4a1a, #f7b733)' },
        { id: 2, title: "Tictactoe", link: "https://github.com/ajayns/react-projects/tree/master/tictactoe", background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,121,110,1) 60%, rgba(0,212,255,1) 100%)' },
        { id: 3, title: "Todo-list", link: "https://github.com/ajayns/react-projects/tree/master/todo", background: 'linear-gradient(to right, #7f00ff, #e100ff)' },
        { id: 4, title: "Basic-react-redux", link: "https://github.com/ajayns/react-projects/tree/master/basic-react-redux", background: 'linear-gradient(to bottom right, #000428 11%, #004e92 80%)' },
        { id: 5, title: "Basic-redux-thunk", link: "https://github.com/ajayns/react-projects/tree/master/basic-redux-thunk", background: 'linear-gradient(to bottom right, #7b4397 11%, #ff5050 95%)' }
      ],
      medium: [
        { id: 1, title: "Trip mate", link: "https://github.com/ajayns/react-projects/tree/master/trip-mate", background: 'linear-gradient(-45deg, #8a2387, #e94057, #f27121 88%)' },
        { id: 3, title: "markdown-editor", link: "https://github.com/ajayns/react-projects/tree/master/markdown-editor", background: 'linear-gradient(-45deg, #2193b0, #6dd5ed)' },
        { id: 4, title: "Todo-pwa", link: "https://github.com/ajayns/react-projects/tree/master/todo-pwa", background: 'linear-gradient(-45deg, #42275a, #734b6d)' },
        { id: 5, title: "gatsbyjs-markdown-blog", link: "https://github.com/ajayns/react-projects/tree/master/gatsbyjs-markdown-blog", background: 'linear-gradient(-45deg, #dd5e89, #f7bb97)' }
      ],
      hard: [
        { id: 1, title: "Netflix clone", link: "https://www.youtube.com/watch?v=XtMThy8QKqU", background: 'linear-gradient(-45deg, rgb(41,196,253) , rgb(60,182,255),rgb(45, 200, 247),rgb(112,242,255) 88%)' },
        { id: 2, title: "Reddit Clone", link: "https://github.com/ajayns/react-projects/tree/master/reddit-clone", background: 'linear-gradient(-45deg, #a8ff78, #78ffd6)' },
        { id: 3, title: "Facebook Clone", link: "https://www.youtube.com/watch?v=B-kxUMHBxNo", background: 'linear-gradient(-45deg, rgb(54,227,180) , rgb(52,225,141),rgb(59, 229, 178),rgb(114,251,166) 88%)' },
      ],
    },

    android: {
      easy: [
        { id: 1, title: "Expense Tracker", link: "https://www.youtube.com/watch?v=u7Xm5TeEUNM&list=PLr2Jraft7i9rHyLCXf55O3XVbGoU4GH9X&index=5", background: 'linear-gradient(-45deg, #8a2387, #e94057, #f27121 88%)' }, { id: 3, title: "Age Calculator", link: "https://www.youtube.com/watch?v=NJ14Kf-a_I4&list=PLr2Jraft7i9rHyLCXf55O3XVbGoU4GH9X&index=4", background: 'linear-gradient(-45deg, #2193b0, #6dd5ed)' },
        { id: 4, title: "Budget Manager", link: "https://www.youtube.com/watch?v=ed4NgkhBOiI&list=PLr2Jraft7i9rHyLCXf55O3XVbGoU4GH9X&index=6", background: 'linear-gradient(-45deg, #42275a, #734b6d)' },
        { id: 5, title: "Fitness App", link: "https://www.youtube.com/watch?v=WYZfcboWUzc&list=PLr2Jraft7i9rHyLCXf55O3XVbGoU4GH9X&index=9", background: 'linear-gradient(-45deg, #dd5e89, #f7bb97)' }
      ],
      medium: [
        { id: 1, title: "Music Player", link: "https://www.youtube.com/watch?v=tlOGecRQeOo", background: 'linear-gradient(to right, #fc4a1a, #f7b733)' },
        { id: 4, title: "Weather App", link: "https://www.youtube.com/watch?v=q7NF-2gtfEU", background: 'linear-gradient(to bottom right, #000428 11%, #004e92 80%)' },
        { id: 5, title: "Notes App", link: "https://www.youtube.com/watch?v=Y37PsbMiZ0k&list=PL1tIj6UC0gcut51pibe8VRw4wauQRkEJJ", background: 'linear-gradient(to bottom right, #7b4397 11%, #ff5050 95%)' }
      ],
      hard: [
        { id: 1, title: "College App", link: "https://www.youtube.com/watch?v=Ui__yxgrRwQ&list=PL6Rs84MkNq7kjE71tV3iDQdqO7fspmoNN", background: 'linear-gradient(-45deg, #8a2387, #e94057, #f27121 88%)' },
        { id: 4, title: "Biometric Attendance App", link: "https://www.youtube.com/watch?v=lfErjyM95Hw", background: 'linear-gradient(-45deg, #42275a, #734b6d)' },
        { id: 5, title: "Wallpaper App", link: "https://www.youtube.com/watch?v=F3cegPGzjXc&list=PLgZ4V8HUCjcME5pRkyIt9keUm_pm-ZsU6", background: 'linear-gradient(-45deg, #dd5e89, #f7bb97)' }
      ],
    },

    // python: {
    //   easy: [
    //     { id: 1, title: "Analogue Clock", link: "https://github.com/romeojeremiah/javascript-projects-for-beginners/tree/master/Analogue%20Clock", background: 'linear-gradient(-45deg, #8a2387, #e94057, #f27121 88%)' },
    //     { id: 2, title: "Javascript Image Slider", link: "https://github.com/romeojeremiah/javascript-projects-for-beginners/tree/master/JavaScript%20Image%20Slider", background: 'linear-gradient(-45deg, #a8ff78, #78ffd6)' },
    //     { id: 3, title: "BMI Calculator", link: "https://github.com/romeojeremiah/javascript-projects-for-beginners/tree/master/BMI%20Calculator", background: 'linear-gradient(-45deg, #2193b0, #6dd5ed)' },
    //     { id: 4, title: "Colors Changing App", link: "https://github.com/romeojeremiah/javascript-projects-for-beginners/tree/master/Color%20Changing%20App", background: 'linear-gradient(-45deg, #42275a, #734b6d)' },
    //     { id: 5, title: "Quote of Day Project", link: "https://github.com/romeojeremiah/javascript-projects-for-beginners/tree/master/Quote%20of%20Day%20Project", background: 'linear-gradient(-45deg, #dd5e89, #f7bb97)' }
    //   ],
    //   medium: [
    //     { id: 1, title: "Music Player", link: "https://github.com/bradtraversy/vanillawebprojects/tree/master/music-player", background: 'linear-gradient(to right, #fc4a1a, #f7b733)' },
    //     { id: 2, title: "Infinite Scrolling", link: "https://github.com/bradtraversy/vanillawebprojects/tree/master/typing-game", background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,121,110,1) 60%, rgba(0,212,255,1) 100%)' },
    //     { id: 3, title: "Movie Seat Booking", link: "https://github.com/bradtraversy/vanillawebprojects/tree/master/movie-seat-booking", background: 'linear-gradient(to right, #7f00ff, #e100ff)' },
    //     { id: 4, title: "Hangman Game", link: "https://github.com/bradtraversy/vanillawebprojects/tree/master/hangman", background: 'linear-gradient(to bottom right, #000428 11%, #004e92 80%)' },
    //     { id: 5, title: "Relaxer App", link: "https://github.com/bradtraversy/vanillawebprojects/tree/master/relaxer-app", background: 'linear-gradient(to bottom right, #7b4397 11%, #ff5050 95%)' }
    //   ],
    //   hard: [
    //     { id: 1, title: "Analogue Clock", link: "https://github.com/romeojeremiah/javascript-projects-for-beginners/tree/master/Analogue%20Clock", background: 'linear-gradient(-45deg, #8a2387, #e94057, #f27121 88%)' },
    //     { id: 2, title: "Javascript Image Slider", link: "https://github.com/romeojeremiah/javascript-projects-for-beginners/tree/master/JavaScript%20Image%20Slider", background: 'linear-gradient(-45deg, #a8ff78, #78ffd6)' },
    //     { id: 3, title: "BMI Calculator", link: "https://github.com/romeojeremiah/javascript-projects-for-beginners/tree/master/BMI%20Calculator", background: 'linear-gradient(-45deg, #2193b0, #6dd5ed)' },
    //     { id: 4, title: "Colors Changing App", link: "https://github.com/romeojeremiah/javascript-projects-for-beginners/tree/master/Color%20Changing%20App", background: 'linear-gradient(-45deg, #42275a, #734b6d)' },
    //     { id: 5, title: "Quote of Day Project", link: "https://github.com/romeojeremiah/javascript-projects-for-beginners/tree/master/Quote%20of%20Day%20Project", background: 'linear-gradient(-45deg, #dd5e89, #f7bb97)' }
    //   ],
    // },

    // ml: {
    //   easy: [
    //     { id: 1, title: "Analogue Clock", link: "https://github.com/romeojeremiah/javascript-projects-for-beginners/tree/master/Analogue%20Clock", background: 'linear-gradient(-45deg, #8a2387, #e94057, #f27121 88%)' },
    //     { id: 2, title: "Javascript Image Slider", link: "https://github.com/romeojeremiah/javascript-projects-for-beginners/tree/master/JavaScript%20Image%20Slider", background: 'linear-gradient(-45deg, #a8ff78, #78ffd6)' },
    //     { id: 3, title: "BMI Calculator", link: "https://github.com/romeojeremiah/javascript-projects-for-beginners/tree/master/BMI%20Calculator", background: 'linear-gradient(-45deg, #2193b0, #6dd5ed)' },
    //     { id: 4, title: "Colors Changing App", link: "https://github.com/romeojeremiah/javascript-projects-for-beginners/tree/master/Color%20Changing%20App", background: 'linear-gradient(-45deg, #42275a, #734b6d)' },
    //     { id: 5, title: "Quote of Day Project", link: "https://github.com/romeojeremiah/javascript-projects-for-beginners/tree/master/Quote%20of%20Day%20Project", background: 'linear-gradient(-45deg, #dd5e89, #f7bb97)' }
    //   ],
    //   medium: [
    //     { id: 1, title: "Music Player", link: "https://github.com/bradtraversy/vanillawebprojects/tree/master/music-player", background: 'linear-gradient(to right, #fc4a1a, #f7b733)' },
    //     { id: 2, title: "Infinite Scrolling", link: "https://github.com/bradtraversy/vanillawebprojects/tree/master/typing-game", background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,121,110,1) 60%, rgba(0,212,255,1) 100%)' },
    //     { id: 3, title: "Movie Seat Booking", link: "https://github.com/bradtraversy/vanillawebprojects/tree/master/movie-seat-booking", background: 'linear-gradient(to right, #7f00ff, #e100ff)' },
    //     { id: 4, title: "Hangman Game", link: "https://github.com/bradtraversy/vanillawebprojects/tree/master/hangman", background: 'linear-gradient(to bottom right, #000428 11%, #004e92 80%)' },
    //     { id: 5, title: "Relaxer App", link: "https://github.com/bradtraversy/vanillawebprojects/tree/master/relaxer-app", background: 'linear-gradient(to bottom right, #7b4397 11%, #ff5050 95%)' }
    //   ],
    //   hard: [
    //     { id: 1, title: "Analogue Clock", link: "https://github.com/romeojeremiah/javascript-projects-for-beginners/tree/master/Analogue%20Clock", background: 'linear-gradient(-45deg, #8a2387, #e94057, #f27121 88%)' },
    //     { id: 2, title: "Javascript Image Slider", link: "https://github.com/romeojeremiah/javascript-projects-for-beginners/tree/master/JavaScript%20Image%20Slider", background: 'linear-gradient(-45deg, #a8ff78, #78ffd6)' },
    //     { id: 3, title: "BMI Calculator", link: "https://github.com/romeojeremiah/javascript-projects-for-beginners/tree/master/BMI%20Calculator", background: 'linear-gradient(-45deg, #2193b0, #6dd5ed)' },
    //     { id: 4, title: "Colors Changing App", link: "https://github.com/romeojeremiah/javascript-projects-for-beginners/tree/master/Color%20Changing%20App", background: 'linear-gradient(-45deg, #42275a, #734b6d)' },
    //     { id: 5, title: "Quote of Day Project", link: "https://github.com/romeojeremiah/javascript-projects-for-beginners/tree/master/Quote%20of%20Day%20Project", background: 'linear-gradient(-45deg, #dd5e89, #f7bb97)' }
    //   ],
    // },


    javascript: {
      easy: [
        { id: 1, title: "Analogue Clock", link: "https://github.com/romeojeremiah/javascript-projects-for-beginners/tree/master/Analogue%20Clock", background: 'linear-gradient(-45deg, #8a2387, #e94057, #f27121 88%)' },
        { id: 2, title: "Javascript Image Slider", link: "https://github.com/romeojeremiah/javascript-projects-for-beginners/tree/master/JavaScript%20Image%20Slider", background: 'linear-gradient(-45deg, #a8ff78, #78ffd6)' },
        { id: 3, title: "BMI Calculator", link: "https://github.com/romeojeremiah/javascript-projects-for-beginners/tree/master/BMI%20Calculator", background: 'linear-gradient(-45deg, #2193b0, #6dd5ed)' },
        { id: 4, title: "Colors Changing App", link: "https://github.com/romeojeremiah/javascript-projects-for-beginners/tree/master/Color%20Changing%20App", background: 'linear-gradient(-45deg, #42275a, #734b6d)' },
        { id: 5, title: "Quote of Day Project", link: "https://github.com/romeojeremiah/javascript-projects-for-beginners/tree/master/Quote%20of%20Day%20Project", background: 'linear-gradient(-45deg, #dd5e89, #f7bb97)' }
      ],
      medium: [
        { id: 1, title: "Music Player", link: "https://github.com/bradtraversy/vanillawebprojects/tree/master/music-player", background: 'linear-gradient(to right, #fc4a1a, #f7b733)' },
        { id: 2, title: "Infinite Scrolling", link: "https://github.com/bradtraversy/vanillawebprojects/tree/master/typing-game", background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,121,110,1) 60%, rgba(0,212,255,1) 100%)' },
        { id: 3, title: "Movie Seat Booking", link: "https://github.com/bradtraversy/vanillawebprojects/tree/master/movie-seat-booking", background: 'linear-gradient(to right, #7f00ff, #e100ff)' },
        { id: 4, title: "Hangman Game", link: "https://github.com/bradtraversy/vanillawebprojects/tree/master/hangman", background: 'linear-gradient(to bottom right, #000428 11%, #004e92 80%)' },
        { id: 5, title: "Relaxer App", link: "https://github.com/bradtraversy/vanillawebprojects/tree/master/relaxer-app", background: 'linear-gradient(to bottom right, #7b4397 11%, #ff5050 95%)' }
      ],
      hard: [
        { id: 1, title: "Netflix landing page", link: "https://www.youtube.com/watch?v=P7t13SGytRk&list=PLajjpPyc2dmbt0KebBvT9VQV8y2R_IO7j&index=4", background: 'linear-gradient(-45deg, #8a2387, #e94057, #f27121 88%)' },
        { id: 2, title: "Shopping Cart", link: "https://www.youtube.com/watch?v=90PgFUPIybY&list=PLajjpPyc2dmbt0KebBvT9VQV8y2R_IO7j&index=7", background: 'linear-gradient(-45deg, #a8ff78, #78ffd6)' },
        { id: 3, title: "Budget App", link: "https://www.youtube.com/watch?v=m_HJ3juuFvo&list=PLajjpPyc2dmbt0KebBvT9VQV8y2R_IO7j&index=43", background: 'linear-gradient(-45deg, #2193b0, #6dd5ed)' },
      ],
    }
  }

  return (
    <div>
      {projects[techName] ?
        <div className="Project-tech">
          <div className="Project-col"></div>
          <div className="Project-head">
            <div id="Project-head-1">
              <h2>
                {techName} Projects <FcApproval />
              </h2>
            </div>
            <div id="Project-head-2">
              <h4>Cool Intresting Stuff!!</h4>
            </div>
          </div>
          <div className="back-but"><Link to="/projects" className="link-but link"> Projects</Link></div>
          <hr></hr>
          <div className="row">
            <div className="Tech">
              <div className="tech-set" id="tech-easy">
                <div className="T-head" id="T-head-1">
                  <h4>EASY PROJECTS</h4>
                </div>
                <div className="T-para">
                  <p>
                    These Projects are very easy to bulid and also help to bulid
                    concept too.These projects only include{" "}
                    <span>HTML , CSS , bootstrap</span> and someother cool stuff.
                  </p>
                </div>
                <div className="Card" id="">
                  <Carousel breakPoints={breakPoints} className='carousel'>
                    {projects[techName].easy.map(item =>
                      <div className="Card-box" id="card-box-1" style={{ backgroundImage: item.background }}>
                        <div className="Card-data" id="card-data-1">
                          <div className="Card-box-data" id=""><p>{item.title}</p></div>
                        </div>
                        <div className="Card-link" id="">
                          <div className="Card-link-data" id="link-data-1"><a href={item.link} target="_blank">Checkout👈🏻</a></div>
                        </div>
                      </div>)}
                  </Carousel>
                </div>
              </div>
              <div className="tech-set" id="tech-med">
                <div className="T-head" id="T-head-2">
                  <h4>MED PROJECTS</h4>
                </div>
                <div className="T-para">
                  <p>
                    These Projects are build using{" "}
                    <span>
                      HTML , CSS ,JavaScript and sothe other JavaScript libraries
                      like jquery
                    </span>{" "}
                    and may more.
                  </p>
                </div>
                <div className="Card" id="">
                  <Carousel breakPoints={breakPoints} className='carousel'>
                    {projects[techName].medium.map(item =>
                      <div className="Card-box" id="card-box-1" style={{ backgroundImage: item.background }}>
                        <div className="Card-data" id="card-data-1">
                          <div className="Card-box-data" id=""><p>{item.title}</p></div>
                        </div>
                        <div className="Card-link" id="">
                          <div className="Card-link-data" id="link-data-1"><a href={item.link} target="_blank">Checkout👈🏻</a></div>
                        </div>
                      </div>)}
                  </Carousel>
                </div>
              </div>
              <div className="tech-set" id="tech-hard">
                <div className="T-head" id="T-head-3">
                  <h4>HARD PROJECTS</h4>
                </div>
                <div className="T-para">
                  <p>
                    These Projects are <span>FULL STACK</span> which mean it include
                    both front-end and backend Projects.
                  </p>
                </div>
                <div className="Card" id="">
                  <Carousel breakPoints={breakPoints} className='carousel'>
                    {projects[techName].hard.map(item =>
                      <div className="Card-box" id="card-box-1" style={{ backgroundImage: item.background }}>
                        <div className="Card-data" id="card-data-1">
                          <div className="Card-box-data" id=""><p>{item.title}</p></div>
                        </div>
                        <div className="Card-link" id="">
                          <div className="Card-link-data" id="link-data-1"><a href={item.link} target="_blank">Checkout👈🏻</a></div>
                        </div>
                      </div>)}
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
        </div> : <div>
          <h1>Coming Soon...</h1>
        </div>
      }
    </div>
  );
}

export default ProjectTech;
