import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <Card className="quote-card-view">
             <Card.Body>
               <blockquote className="blockquote mb-0" >
                 <p style={{ textAlign: "justify" }}>
                   Hello, Myself   <span className="purple">  Prasan Bora </span>
                   from <span className="purple"> Delhi, India.</span>
                   <br />
                   I am currently Final year Engineering Student at Maharaja Agrasen Institute of Technology, Delhi
                   <br />
                   With expertise in languages such as C, C++ and JavaScript I am able to translate complex problems into elegant solutions  <br />
                   I have experience in developing responsive web applications with HTML, CSS, and React, as well as building server-side applications with Node.js and Express. 
                   <br />
                   As a lifelong learner, I am committed to keeping up with the latest industry trends and continuously improving my skills I am always on the lookout for new opportunities to grow and learn
                   <br />
                 </p>

                    </blockquote>
                </Card.Body>
                </Card>
                </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/PrasanBora"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/its_prasan"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/prasan-bora-943293184/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/prasan_bora/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
