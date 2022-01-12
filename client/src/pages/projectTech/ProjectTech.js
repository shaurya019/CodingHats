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
        { id: 1, title: "Analogue Clock", link: "https://github.com/romeojeremiah/javascript-projects-for-beginners/tree/master/Analogue%20Clock", background: 'linear-gradient(-45deg, #8a2387, #e94057, #f27121 88%)' },
        { id: 2, title: "Javascript Image Slider", link: "https://github.com/romeojeremiah/javascript-projects-for-beginners/tree/master/JavaScript%20Image%20Slider", background: 'linear-gradient(-45deg, #a8ff78, #78ffd6)' },
        { id: 3, title: "BMI Calculator", link: "https://github.com/romeojeremiah/javascript-projects-for-beginners/tree/master/BMI%20Calculator", background: 'linear-gradient(-45deg, #2193b0, #6dd5ed)' },
        { id: 4, title: "Colors Changing App", link: "https://github.com/romeojeremiah/javascript-projects-for-beginners/tree/master/Color%20Changing%20App", background: 'linear-gradient(-45deg, #42275a, #734b6d)' },
        { id: 5, title: "Quote of Day Project", link: "https://github.com/romeojeremiah/javascript-projects-for-beginners/tree/master/Quote%20of%20Day%20Project", background: 'linear-gradient(-45deg, #dd5e89, #f7bb97)' }
      ],
      medium: [
        { id: 1, title: "Music Player", link: "https://github.com/bradtraversy/vanillawebprojects/tree/master/music-player", background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(121,9,53,1) 60%, rgba(0,212,255,1) 100%)' },
        { id: 2, title: "Infinite Scrolling", link: "https://github.com/bradtraversy/vanillawebprojects/tree/master/typing-game", background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,121,110,1) 60%, rgba(0,212,255,1) 100%)' },
        { id: 3, title: "Movie Seat Booking", link: "https://github.com/bradtraversy/vanillawebprojects/tree/master/movie-seat-booking", background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(121,56,9,0.7399334733893557) 60%, rgba(36,165,181,1) 76%, rgba(14,194,227,1) 91%, rgba(0,212,255,1) 100%)' },
        { id: 4, title: "Hangman Game", link: "https://github.com/bradtraversy/vanillawebprojects/tree/master/hangman", background: 'linear-gradient(to bottom right, #000428 11%, #004e92 80%)' },
        { id: 5, title: "Relaxer App", link: "https://github.com/bradtraversy/vanillawebprojects/tree/master/relaxer-app", background: 'linear-gradient(to bottom right, #7b4397 11%, #ff5050 95%)' }
      ],
      hard: [
        { id: 1, title: "Analogue Clock", link: "https://github.com/romeojeremiah/javascript-projects-for-beginners/tree/master/Analogue%20Clock", background: 'linear-gradient(-45deg, rgb(41,196,253) , rgb(60,182,255),rgb(45, 200, 247),rgb(112,242,255) 88%)' },
        { id: 2, title: "Analogue Clock", link: "https://github.com/romeojeremiah/javascript-projects-for-beginners/tree/master/Analogue%20Clock", background: 'linear-gradient(-45deg,rgb(126,180,255), rgb(120,117,236),rgb(120, 124, 239),rgb(157,120,248))' },
        { id: 3, title: "Analogue Clock", link: "https://github.com/romeojeremiah/javascript-projects-for-beginners/tree/master/Analogue%20Clock", background: 'linear-gradient(-45deg, rgb(54,227,180) , rgb(52,225,141),rgb(59, 229, 178),rgb(114,251,166) 88%)' },
        { id: 4, title: "Analogue Clock", link: "https://github.com/romeojeremiah/javascript-projects-for-beginners/tree/master/Analogue%20Clock", background: 'linear-gradient(to bottom right, #000428 11%, #004e92 80%)' },
        { id: 5, title: "Analogue Clock", link: "https://github.com/romeojeremiah/javascript-projects-for-beginners/tree/master/Analogue%20Clock", background: 'linear-gradient(to bottom right, #7b4397 11%, #ff5050 95%)' }
      ],
    },

    react: {
      easy: [
        { id: 1, title: "Analogue Clock", link: "https://github.com/romeojeremiah/javascript-projects-for-beginners/tree/master/Analogue%20Clock", background: 'linear-gradient(-45deg, rgb(41,196,253) , rgb(60,182,255),rgb(45, 200, 247),rgb(112,242,255) 88%)' },
        { id: 2, title: "Javascript Image Slider", link: "https://github.com/romeojeremiah/javascript-projects-for-beginners/tree/master/JavaScript%20Image%20Slider", background: 'linear-gradient(-45deg,rgb(126,180,255), rgb(120,117,236),rgb(120, 124, 239),rgb(157,120,248))' },
        { id: 3, title: "BMI Calculator", link: "https://github.com/romeojeremiah/javascript-projects-for-beginners/tree/master/BMI%20Calculator", background: 'linear-gradient(-45deg, rgb(54,227,180) , rgb(52,225,141),rgb(59, 229, 178),rgb(114,251,166) 88%)' },
        { id: 4, title: "Colors Changing App", link: "https://github.com/romeojeremiah/javascript-projects-for-beginners/tree/master/Color%20Changing%20App", background: 'linear-gradient(to bottom right, #000428 11%, #004e92 80%)' },
        { id: 5, title: "Quote of Day Project", link: "https://github.com/romeojeremiah/javascript-projects-for-beginners/tree/master/Quote%20of%20Day%20Project", background: 'linear-gradient(to bottom right, #7b4397 11%, #ff5050 95%)' }
      ],
      medium: [
        { id: 1, title: "Music Player", link: "https://github.com/bradtraversy/vanillawebprojects/tree/master/music-player", background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(121,9,53,1) 60%, rgba(0,212,255,1) 100%)' },
        { id: 2, title: "Infinite Scrolling", link: "https://github.com/bradtraversy/vanillawebprojects/tree/master/typing-game", background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,121,110,1) 60%, rgba(0,212,255,1) 100%)' },
        { id: 3, title: "Movie Seat Booking", link: "https://github.com/bradtraversy/vanillawebprojects/tree/master/movie-seat-booking", background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(121,56,9,0.7399334733893557) 60%, rgba(36,165,181,1) 76%, rgba(14,194,227,1) 91%, rgba(0,212,255,1) 100%)' },
        { id: 4, title: "Hangman Game", link: "https://github.com/bradtraversy/vanillawebprojects/tree/master/hangman", background: 'linear-gradient(to bottom right, #000428 11%, #004e92 80%)' },
        { id: 5, title: "Relaxer App", link: "https://github.com/bradtraversy/vanillawebprojects/tree/master/relaxer-app", background: 'linear-gradient(to bottom right, #7b4397 11%, #ff5050 95%)' }
      ],
      hard: [
        { id: 1, title: "Analogue Clock", link: "https://github.com/romeojeremiah/javascript-projects-for-beginners/tree/master/Analogue%20Clock", background: 'linear-gradient(-45deg, rgb(41,196,253) , rgb(60,182,255),rgb(45, 200, 247),rgb(112,242,255) 88%)' },
        { id: 2, title: "Analogue Clock", link: "https://github.com/romeojeremiah/javascript-projects-for-beginners/tree/master/Analogue%20Clock", background: 'linear-gradient(-45deg,rgb(126,180,255), rgb(120,117,236),rgb(120, 124, 239),rgb(157,120,248))' },
        { id: 3, title: "Analogue Clock", link: "https://github.com/romeojeremiah/javascript-projects-for-beginners/tree/master/Analogue%20Clock", background: 'linear-gradient(-45deg, rgb(54,227,180) , rgb(52,225,141),rgb(59, 229, 178),rgb(114,251,166) 88%)' },
        { id: 4, title: "Analogue Clock", link: "https://github.com/romeojeremiah/javascript-projects-for-beginners/tree/master/Analogue%20Clock", background: 'linear-gradient(to bottom right, #000428 11%, #004e92 80%)' },
        { id: 5, title: "Analogue Clock", link: "https://github.com/romeojeremiah/javascript-projects-for-beginners/tree/master/Analogue%20Clock", background: 'linear-gradient(to bottom right, #7b4397 11%, #ff5050 95%)' }
      ],
    },

    android: {
      easy: [
        { id: 1, title: "Analogue Clock", link: "https://github.com/romeojeremiah/javascript-projects-for-beginners/tree/master/Analogue%20Clock", background: 'linear-gradient(-45deg, rgb(41,196,253) , rgb(60,182,255),rgb(45, 200, 247),rgb(112,242,255) 88%)' },
        { id: 2, title: "Javascript Image Slider", link: "https://github.com/romeojeremiah/javascript-projects-for-beginners/tree/master/JavaScript%20Image%20Slider", background: 'linear-gradient(-45deg,rgb(126,180,255), rgb(120,117,236),rgb(120, 124, 239),rgb(157,120,248))' },
        { id: 3, title: "BMI Calculator", link: "https://github.com/romeojeremiah/javascript-projects-for-beginners/tree/master/BMI%20Calculator", background: 'linear-gradient(-45deg, rgb(54,227,180) , rgb(52,225,141),rgb(59, 229, 178),rgb(114,251,166) 88%)' },
        { id: 4, title: "Colors Changing App", link: "https://github.com/romeojeremiah/javascript-projects-for-beginners/tree/master/Color%20Changing%20App", background: 'linear-gradient(to bottom right, #000428 11%, #004e92 80%)' },
        { id: 5, title: "Quote of Day Project", link: "https://github.com/romeojeremiah/javascript-projects-for-beginners/tree/master/Quote%20of%20Day%20Project", background: 'linear-gradient(to bottom right, #7b4397 11%, #ff5050 95%)' }
      ],
      medium: [
        { id: 1, title: "Music Player", link: "https://github.com/bradtraversy/vanillawebprojects/tree/master/music-player", background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(121,9,53,1) 60%, rgba(0,212,255,1) 100%)' },
        { id: 2, title: "Infinite Scrolling", link: "https://github.com/bradtraversy/vanillawebprojects/tree/master/typing-game", background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,121,110,1) 60%, rgba(0,212,255,1) 100%)' },
        { id: 3, title: "Movie Seat Booking", link: "https://github.com/bradtraversy/vanillawebprojects/tree/master/movie-seat-booking", background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(121,56,9,0.7399334733893557) 60%, rgba(36,165,181,1) 76%, rgba(14,194,227,1) 91%, rgba(0,212,255,1) 100%)' },
        { id: 4, title: "Hangman Game", link: "https://github.com/bradtraversy/vanillawebprojects/tree/master/hangman", background: 'linear-gradient(to bottom right, #000428 11%, #004e92 80%)' },
        { id: 5, title: "Relaxer App", link: "https://github.com/bradtraversy/vanillawebprojects/tree/master/relaxer-app", background: 'linear-gradient(to bottom right, #7b4397 11%, #ff5050 95%)' }
      ],
      hard: [
        { id: 1, title: "Analogue Clock", link: "https://github.com/romeojeremiah/javascript-projects-for-beginners/tree/master/Analogue%20Clock", background: 'linear-gradient(-45deg, rgb(41,196,253) , rgb(60,182,255),rgb(45, 200, 247),rgb(112,242,255) 88%)' },
        { id: 2, title: "Analogue Clock", link: "https://github.com/romeojeremiah/javascript-projects-for-beginners/tree/master/Analogue%20Clock", background: 'linear-gradient(-45deg,rgb(126,180,255), rgb(120,117,236),rgb(120, 124, 239),rgb(157,120,248))' },
        { id: 3, title: "Analogue Clock", link: "https://github.com/romeojeremiah/javascript-projects-for-beginners/tree/master/Analogue%20Clock", background: 'linear-gradient(-45deg, rgb(54,227,180) , rgb(52,225,141),rgb(59, 229, 178),rgb(114,251,166) 88%)' },
        { id: 4, title: "Analogue Clock", link: "https://github.com/romeojeremiah/javascript-projects-for-beginners/tree/master/Analogue%20Clock", background: 'linear-gradient(to bottom right, #000428 11%, #004e92 80%)' },
        { id: 5, title: "Analogue Clock", link: "https://github.com/romeojeremiah/javascript-projects-for-beginners/tree/master/Analogue%20Clock", background: 'linear-gradient(to bottom right, #7b4397 11%, #ff5050 95%)' }
      ],
    },

    python: {
      easy: [
        { id: 1, title: "Analogue Clock", link: "https://github.com/romeojeremiah/javascript-projects-for-beginners/tree/master/Analogue%20Clock", background: 'linear-gradient(-45deg, rgb(41,196,253) , rgb(60,182,255),rgb(45, 200, 247),rgb(112,242,255) 88%)' },
        { id: 2, title: "Javascript Image Slider", link: "https://github.com/romeojeremiah/javascript-projects-for-beginners/tree/master/JavaScript%20Image%20Slider", background: 'linear-gradient(-45deg,rgb(126,180,255), rgb(120,117,236),rgb(120, 124, 239),rgb(157,120,248))' },
        { id: 3, title: "BMI Calculator", link: "https://github.com/romeojeremiah/javascript-projects-for-beginners/tree/master/BMI%20Calculator", background: 'linear-gradient(-45deg, rgb(54,227,180) , rgb(52,225,141),rgb(59, 229, 178),rgb(114,251,166) 88%)' },
        { id: 4, title: "Colors Changing App", link: "https://github.com/romeojeremiah/javascript-projects-for-beginners/tree/master/Color%20Changing%20App", background: 'linear-gradient(to bottom right, #000428 11%, #004e92 80%)' },
        { id: 5, title: "Quote of Day Project", link: "https://github.com/romeojeremiah/javascript-projects-for-beginners/tree/master/Quote%20of%20Day%20Project", background: 'linear-gradient(to bottom right, #7b4397 11%, #ff5050 95%)' }
      ],
      medium: [
        { id: 1, title: "Music Player", link: "https://github.com/bradtraversy/vanillawebprojects/tree/master/music-player", background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(121,9,53,1) 60%, rgba(0,212,255,1) 100%)' },
        { id: 2, title: "Infinite Scrolling", link: "https://github.com/bradtraversy/vanillawebprojects/tree/master/typing-game", background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,121,110,1) 60%, rgba(0,212,255,1) 100%)' },
        { id: 3, title: "Movie Seat Booking", link: "https://github.com/bradtraversy/vanillawebprojects/tree/master/movie-seat-booking", background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(121,56,9,0.7399334733893557) 60%, rgba(36,165,181,1) 76%, rgba(14,194,227,1) 91%, rgba(0,212,255,1) 100%)' },
        { id: 4, title: "Hangman Game", link: "https://github.com/bradtraversy/vanillawebprojects/tree/master/hangman", background: 'linear-gradient(to bottom right, #000428 11%, #004e92 80%)' },
        { id: 5, title: "Relaxer App", link: "https://github.com/bradtraversy/vanillawebprojects/tree/master/relaxer-app", background: 'linear-gradient(to bottom right, #7b4397 11%, #ff5050 95%)' }
      ],
      hard: [
        { id: 1, title: "Analogue Clock", link: "https://github.com/romeojeremiah/javascript-projects-for-beginners/tree/master/Analogue%20Clock", background: 'linear-gradient(-45deg, rgb(41,196,253) , rgb(60,182,255),rgb(45, 200, 247),rgb(112,242,255) 88%)' },
        { id: 2, title: "Analogue Clock", link: "https://github.com/romeojeremiah/javascript-projects-for-beginners/tree/master/Analogue%20Clock", background: 'linear-gradient(-45deg,rgb(126,180,255), rgb(120,117,236),rgb(120, 124, 239),rgb(157,120,248))' },
        { id: 3, title: "Analogue Clock", link: "https://github.com/romeojeremiah/javascript-projects-for-beginners/tree/master/Analogue%20Clock", background: 'linear-gradient(-45deg, rgb(54,227,180) , rgb(52,225,141),rgb(59, 229, 178),rgb(114,251,166) 88%)' },
        { id: 4, title: "Analogue Clock", link: "https://github.com/romeojeremiah/javascript-projects-for-beginners/tree/master/Analogue%20Clock", background: 'linear-gradient(to bottom right, #000428 11%, #004e92 80%)' },
        { id: 5, title: "Analogue Clock", link: "https://github.com/romeojeremiah/javascript-projects-for-beginners/tree/master/Analogue%20Clock", background: 'linear-gradient(to bottom right, #7b4397 11%, #ff5050 95%)' }
      ],
    },

    ml: {
      easy: [
        { id: 1, title: "Analogue Clock", link: "https://github.com/romeojeremiah/javascript-projects-for-beginners/tree/master/Analogue%20Clock", background: 'linear-gradient(-45deg, rgb(41,196,253) , rgb(60,182,255),rgb(45, 200, 247),rgb(112,242,255) 88%)' },
        { id: 2, title: "Javascript Image Slider", link: "https://github.com/romeojeremiah/javascript-projects-for-beginners/tree/master/JavaScript%20Image%20Slider", background: 'linear-gradient(-45deg,rgb(126,180,255), rgb(120,117,236),rgb(120, 124, 239),rgb(157,120,248))' },
        { id: 3, title: "BMI Calculator", link: "https://github.com/romeojeremiah/javascript-projects-for-beginners/tree/master/BMI%20Calculator", background: 'linear-gradient(-45deg, rgb(54,227,180) , rgb(52,225,141),rgb(59, 229, 178),rgb(114,251,166) 88%)' },
        { id: 4, title: "Colors Changing App", link: "https://github.com/romeojeremiah/javascript-projects-for-beginners/tree/master/Color%20Changing%20App", background: 'linear-gradient(to bottom right, #000428 11%, #004e92 80%)' },
        { id: 5, title: "Quote of Day Project", link: "https://github.com/romeojeremiah/javascript-projects-for-beginners/tree/master/Quote%20of%20Day%20Project", background: 'linear-gradient(to bottom right, #7b4397 11%, #ff5050 95%)' }
      ],
      medium: [
        { id: 1, title: "Music Player", link: "https://github.com/bradtraversy/vanillawebprojects/tree/master/music-player", background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(121,9,53,1) 60%, rgba(0,212,255,1) 100%)' },
        { id: 2, title: "Infinite Scrolling", link: "https://github.com/bradtraversy/vanillawebprojects/tree/master/typing-game", background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,121,110,1) 60%, rgba(0,212,255,1) 100%)' },
        { id: 3, title: "Movie Seat Booking", link: "https://github.com/bradtraversy/vanillawebprojects/tree/master/movie-seat-booking", background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(121,56,9,0.7399334733893557) 60%, rgba(36,165,181,1) 76%, rgba(14,194,227,1) 91%, rgba(0,212,255,1) 100%)' },
        { id: 4, title: "Hangman Game", link: "https://github.com/bradtraversy/vanillawebprojects/tree/master/hangman", background: 'linear-gradient(to bottom right, #000428 11%, #004e92 80%)' },
        { id: 5, title: "Relaxer App", link: "https://github.com/bradtraversy/vanillawebprojects/tree/master/relaxer-app", background: 'linear-gradient(to bottom right, #7b4397 11%, #ff5050 95%)' }
      ],
      hard: [
        { id: 1, title: "Analogue Clock", link: "https://github.com/romeojeremiah/javascript-projects-for-beginners/tree/master/Analogue%20Clock", background: 'linear-gradient(-45deg, rgb(41,196,253) , rgb(60,182,255),rgb(45, 200, 247),rgb(112,242,255) 88%)' },
        { id: 2, title: "Analogue Clock", link: "https://github.com/romeojeremiah/javascript-projects-for-beginners/tree/master/Analogue%20Clock", background: 'linear-gradient(-45deg,rgb(126,180,255), rgb(120,117,236),rgb(120, 124, 239),rgb(157,120,248))' },
        { id: 3, title: "Analogue Clock", link: "https://github.com/romeojeremiah/javascript-projects-for-beginners/tree/master/Analogue%20Clock", background: 'linear-gradient(-45deg, rgb(54,227,180) , rgb(52,225,141),rgb(59, 229, 178),rgb(114,251,166) 88%)' },
        { id: 4, title: "Analogue Clock", link: "https://github.com/romeojeremiah/javascript-projects-for-beginners/tree/master/Analogue%20Clock", background: 'linear-gradient(to bottom right, #000428 11%, #004e92 80%)' },
        { id: 5, title: "Analogue Clock", link: "https://github.com/romeojeremiah/javascript-projects-for-beginners/tree/master/Analogue%20Clock", background: 'linear-gradient(to bottom right, #7b4397 11%, #ff5050 95%)' }
      ],
    },


    javascript: {
      easy: [
        { id: 1, title: "Analogue Clock", link: "https://github.com/romeojeremiah/javascript-projects-for-beginners/tree/master/Analogue%20Clock", background: 'linear-gradient(-45deg, rgb(41,196,253) , rgb(60,182,255),rgb(45, 200, 247),rgb(112,242,255) 88%)' },
        { id: 2, title: "Javascript Image Slider", link: "https://github.com/romeojeremiah/javascript-projects-for-beginners/tree/master/JavaScript%20Image%20Slider", background: 'linear-gradient(-45deg,rgb(126,180,255), rgb(120,117,236),rgb(120, 124, 239),rgb(157,120,248))' },
        { id: 3, title: "BMI Calculator", link: "https://github.com/romeojeremiah/javascript-projects-for-beginners/tree/master/BMI%20Calculator", background: 'linear-gradient(-45deg, rgb(54,227,180) , rgb(52,225,141),rgb(59, 229, 178),rgb(114,251,166) 88%)' },
        { id: 4, title: "Colors Changing App", link: "https://github.com/romeojeremiah/javascript-projects-for-beginners/tree/master/Color%20Changing%20App", background: 'linear-gradient(to bottom right, #000428 11%, #004e92 80%)' },
        { id: 5, title: "Quote of Day Project", link: "https://github.com/romeojeremiah/javascript-projects-for-beginners/tree/master/Quote%20of%20Day%20Project", background: 'linear-gradient(to bottom right, #7b4397 11%, #ff5050 95%)' }
      ],
      medium: [
        { id: 1, title: "Music Player", link: "https://github.com/bradtraversy/vanillawebprojects/tree/master/music-player", background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(121,9,53,1) 60%, rgba(0,212,255,1) 100%)' },
        { id: 2, title: "Infinite Scrolling", link: "https://github.com/bradtraversy/vanillawebprojects/tree/master/typing-game", background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,121,110,1) 60%, rgba(0,212,255,1) 100%)' },
        { id: 3, title: "Movie Seat Booking", link: "https://github.com/bradtraversy/vanillawebprojects/tree/master/movie-seat-booking", background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(121,56,9,0.7399334733893557) 60%, rgba(36,165,181,1) 76%, rgba(14,194,227,1) 91%, rgba(0,212,255,1) 100%)' },
        { id: 4, title: "Hangman Game", link: "https://github.com/bradtraversy/vanillawebprojects/tree/master/hangman", background: 'linear-gradient(to bottom right, #000428 11%, #004e92 80%)' },
        { id: 5, title: "Relaxer App", link: "https://github.com/bradtraversy/vanillawebprojects/tree/master/relaxer-app", background: 'linear-gradient(to bottom right, #7b4397 11%, #ff5050 95%)' }
      ],
      hard: [
        { id: 1, title: "Analogue Clock", link: "https://github.com/romeojeremiah/javascript-projects-for-beginners/tree/master/Analogue%20Clock", background: 'linear-gradient(-45deg, rgb(41,196,253) , rgb(60,182,255),rgb(45, 200, 247),rgb(112,242,255) 88%)' },
        { id: 2, title: "Analogue Clock", link: "https://github.com/romeojeremiah/javascript-projects-for-beginners/tree/master/Analogue%20Clock", background: 'linear-gradient(-45deg,rgb(126,180,255), rgb(120,117,236),rgb(120, 124, 239),rgb(157,120,248))' },
        { id: 3, title: "Analogue Clock", link: "https://github.com/romeojeremiah/javascript-projects-for-beginners/tree/master/Analogue%20Clock", background: 'linear-gradient(-45deg, rgb(54,227,180) , rgb(52,225,141),rgb(59, 229, 178),rgb(114,251,166) 88%)' },
        { id: 4, title: "Analogue Clock", link: "https://github.com/romeojeremiah/javascript-projects-for-beginners/tree/master/Analogue%20Clock", background: 'linear-gradient(to bottom right, #000428 11%, #004e92 80%)' },
        { id: 5, title: "Analogue Clock", link: "https://github.com/romeojeremiah/javascript-projects-for-beginners/tree/master/Analogue%20Clock", background: 'linear-gradient(to bottom right, #7b4397 11%, #ff5050 95%)' }
      ],
    }
  }

  return (
    // <div>
    //   {projects[techName] ?
    //     <div>
    //       <div className='carousel-container'>
    //         <h1 className='carousel-container-heading'>Basic</h1>
    //         <Carousel breakPoints={breakPoints} className='carousel'>
    //           {projects[techName].easy.map(item =>
    //             <a href={item.link} target="_blank" className='link'>
    //               <div key={item.id} className='carousel-item' style={{ backgroundImage: item.background }}>{item.title}</div>
    //             </a>)}
    //         </Carousel>
    //       </div>
    //       <div className='medium'>
    //         <h1 className='carousel-container-heading'>Intermediate</h1>
    //         <Carousel breakPoints={breakPoints} className='carousel'>
    //           {projects[techName].medium.map(item =>
    //             <a href={item.link} target="_blank" className='link'>
    //               <div key={item.id} className='carousel-item' style={{ backgroundImage: item.background }}>{item.title}</div>
    //             </a>)}
    //         </Carousel>
    //       </div>
    //       <div className='hard'>
    //         <h1 className='carousel-container-heading'>Advanced</h1>
    //         <Carousel breakPoints={breakPoints} className='carousel'>
    //           {projects[techName].hard.map(item =>
    //             <a href={item.link} target="_blank" className='link'><div key={item.id} className='carousel-item' style={{ backgroundImage: item.background }}>{item.title}</div>
    //             </a>)}
    //         </Carousel>
    //       </div>
    //     </div> :
    //     <div>
    //       <h1>Page doesn't Exist</h1>
    //     </div>
    //   }
    // </div>
    <div>
      {projects[techName] &&
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
          <div className="back-but"><a href="" className="link-but"> Projects</a></div>
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
                          <div className="Card-box-data" id=""><p>Website</p></div>
                        </div>
                        <div className="Card-link" id="">
                          <div className="Card-link-data" id="link-data-1"><a href="">Github<FaGithub /></a></div>
                          <div className="Card-link-data" id="link-data-2"><a href="">Website<SiWebauthn /></a></div>
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
                          <div className="Card-box-data" id=""><p>Website</p></div>
                        </div>
                        <div className="Card-link" id="">
                          <div className="Card-link-data" id="link-data-1"><a href="">Github<FaGithub /></a></div>
                          <div className="Card-link-data" id="link-data-2"><a href="">Website<SiWebauthn /></a></div>
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
                          <div className="Card-box-data" id=""><p>Website</p></div>
                        </div>
                        <div className="Card-link" id="">
                          <div className="Card-link-data" id="link-data-1"><a href="">Github<FaGithub /></a></div>
                          <div className="Card-link-data" id="link-data-2"><a href="">Website<SiWebauthn /></a></div>
                        </div>
                      </div>)}
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  );
}

export default ProjectTech;
