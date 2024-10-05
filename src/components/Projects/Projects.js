import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import domgame from "../../Assets/Projects/2048.jpg";
import chatpod from "../../Assets/Projects/chatpod.jpg";
import pomodoro from "../../Assets/Projects/pomodoro.jpg";
import movie_plus from "../../Assets/Projects/movie_plus.jpg";
import weather from "../../Assets/Projects/webapp.jpg";
import linkedin from "../../Assets/Projects/linkedIn.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

         <Col md={4} className="project-card">
            <ProjectCard
              imgPath={linkedin}
              title="LinkedIn Clone"
              description="LinkedIn Clone This project is a LinkedIn clone built using the MERN (MongoDB, Express, React, Node.js) stack. It aims to replicate core features of LinkedIn, including user profiles, posts, connections, and a search functionality."
              ghLink="https://github.com/PrasanBora/Linkedin_clone"
              demoLink="https://linkedin-clone-x4of.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={domgame}
              title="2048"
              description="Clone of famous game 2048 in which user have to join the same numbers and get to the 2048 tile Built using Javascript DOM the objective of the game is to slide numbered tiles using arrows keys on a grid."
              ghLink="https://github.com/PrasanBora/2048"
              demoLink="https://prasanbora.github.io/2048/"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movie_plus}
              title="Movie_Plus"
              description="A movie searching website made using Rect.js libraries. Using OMDB API to obtain movie information like movie banner and release year "
              ghLink="https://github.com/PrasanBora/React-Movie_Plus"
              demoLink="https://prasanbora.github.io/React-Movie_Plus/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              title="weather App"
              description="Shows weather conditions of any location on Earth using made using OpenWeatherAPI . User can search for weather condition of any city.It can also access the device's current location using a Geolocation function to shows weather conditions."
              ghLink="https://github.com/PrasanBora/Weather_App"
              demoLink="https://prasanbora.github.io/Weather_App/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pomodoro}
              title="Pomodoro Extension"
              description="Chrome extension to help users manage their time more effectively while working online.Implemented features including customizable timer intervals for Pomodoro sessions, short breaks, and long breaks "
              ghLink="https://github.com/PrasanBora/Pomorodo_extension"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatpod}
              title="Chatpod"
              description=" A real-time chat application using Node.js and Socket.io Used Socket.io to manage real-time web socket connection to a Node.js server for real time updates.Multiple clients can also join a server and communicate in the same way as a group chat. "

              ghLink="https://github.com/PrasanBora/Chatpod"
              // demoLink=""
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects