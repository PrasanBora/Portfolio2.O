import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import myImg from "../../Assets/avatar.svg";
import { SITE } from "../../data/site";

export default function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple">INTRODUCE</span> MYSELF
            </h1>
            <Card className="quote-card-view">
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p style={{ textAlign: "justify" }}>
                    Hi, I'm{" "}
                    <span className="purple">{SITE.name}</span> — a{" "}
                    <span className="purple">software engineer</span> based in{" "}
                    <span className="purple">India</span>.
                    <br />
                    {SITE.about.summary}
                    <br />
                    <br />
                    I currently work as a{" "}
                    <span className="purple">Software Developer at Chefadora</span>,
                    where I build AI agents, mobile features, and backend systems
                    used by real people.
                    <br />
                    Outside of work, I'm always shipping something — side projects,
                    experiments, the odd dev.to article — to keep learning.
                  </p>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="myAvtar">
            <img
              src={myImg}
              className="img-fluid"
              alt="Prasan Bora avatar"
            />
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social" id="connect">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect</span> with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href={SITE.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="Prasan Bora on GitHub"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href={SITE.socials.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="Prasan Bora on Twitter"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href={SITE.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="Prasan Bora on LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href={SITE.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="Prasan Bora on Instagram"
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
