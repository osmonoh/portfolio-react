import watchImg from "../images/watch-home.png";
import decentImg from "../images/decent-home.png";
import gameImg from "../images/bulls.png";
import pawfectImg from "../images/pawfect.png";
import sibaImg from "../images/siba-shop.png";

const projects = [
  {
    name: "Online shop ",
    text: [
      "An e-commerce web app build with React and Material UI with a little touch of SCSS. Products can be browsed by categories or collections, further filtered by tags. They can be added to favourites and to the shopping bag, both of witch are made persistent. To fetch the data Axios is used, Context API for state management and react-router-dom for navigation. This project is deployed on Netlify.",
    ],
    keyWords: [["React", "Context API", "Axios", "SASS", "Material UI"]],
    gitHubURL: "https://github.com/osmonoh/siba-shop",
    siteURL: "https://siba-shop.netlify.app/",
    img: sibaImg,
  },
  {
    name: "Pet adoption platform",
    preText: [
      "This is a group project of five people. We created a platform where a person offering a pet can connect with a person who wants to adopt one smooth, easy and fast. Users can chat in real-time. This is a full-stack project:",
    ],
    text: [
      "The UI is build with React, with Context API for state management. For styling we used SCSS and Material UI, Chat-Engine to create the chat. It is deployed on Netlify.",
      "The server is built with Node.js, using the Express.js. We used MongoDB and Mongoose for database, stored on MongoDB Atlas. The server is deployed on Heroku.",
    ],
    keyWords: [
      ["React", "Context API", "Axios", "YouTube Data API", "Semantic UI"],
      ["Node.js", "Express.js", "MongoDB", "Mongoose", "MongoDB Atlas"],
    ],
    gitHubURL: "https://github.com/osmonoh/react-video-platform",
    siteURL: "https://watch-video-app.netlify.app/",
    img: pawfectImg,
  },
  {
    name: "Video platform",
    text: [
      "This is a frontend project where I created a simple video platform using a JavaScript library React to build the UI. The project is called watch and it displays a gallery of videos, allows to search for videos as well as play them. It also offers the option to toggle between light and dark mode. It makes use of a promise-based HTTP client Axios to interact with the YouTube Data API and is deployed on Netlify.",
    ],
    keyWords: [
      ["React", "Context API", "Axios", "YouTube Data API", "Semantic UI"],
    ],
    gitHubURL: "https://github.com/osmonoh/react-video-platform",
    siteURL: "https://watch-video-app.netlify.app/",
    img: watchImg,
  },
  {
    name: "Rest API",
    text: [
      "This is my backend project where I created a small REST API with frontend page introducing the API, offering some interactive examples of requests and responses, as well as documentation. Its name is decentAPI and it is deployed on Heroku. These are some of the technologies and approaches employed in the project:",
    ],
    keyWords: [
      ["MVC", "Node.js", "Express.js", "EJS", "DOM API", "JavaScript"],
    ],
    gitHubURL: "https://github.com/osmonoh/rest-api",
    siteURL: "https://decentapi.herokuapp.com/",
    img: decentImg,
  },
  {
    name: "Logic game",
    text: [
      "This is my take on a school project where the objective was to create a version of the Bulls and Cows game to be played in the terminal. Finishing the task in a very good time I decided to challenge myself further and took it to the browser making it my first ever DOM manipulation project. I went on this one completely vanilla.",
    ],
    keyWords: [["HTML", "CSS", "JavaScript", "DOM API"]],
    gitHubURL: "https://github.com/osmonoh/bulls-and-cows",
    siteURL: "https://bulls-cows.netlify.app/",
    img: gameImg,
  },
];

export { projects };
