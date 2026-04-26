import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FiGithub } from "react-icons/fi";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";
import { PROJECTS, SITE } from "../../data/site";
import useDocumentMeta from "../../hooks/useDocumentMeta";

import domgame from "../../Assets/Projects/2048.jpg";
import chatpod from "../../Assets/Projects/chatpod.jpg";
import pomodoro from "../../Assets/Projects/pomodoro.jpg";
import movie_plus from "../../Assets/Projects/movie_plus.jpg";
import webapp from "../../Assets/Projects/webapp.jpg";
import linkedin from "../../Assets/Projects/linkedIn.png";
import portfolio3 from "../../Assets/Projects/portfolio3.svg";

const IMAGES = {
  linkedin,
  chatpod,
  movie_plus,
  webapp,
  domgame,
  pomodoro,
  portfolio3,
};

export default function Projects() {
  useDocumentMeta({
    title: "Side Projects — Prasan Bora | Software Engineer",
    description:
      "Side projects by Prasan Bora — built to learn and explore. LinkedIn clone, real-time chat, weather app, 2048 and a Pomodoro Chrome extension.",
    path: "/projects",
  });

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          A few things I built to learn and explore — not everything needs a
          business case.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {PROJECTS.map((p) => (
            <Col md={4} className="project-card" key={p.id}>
              <ProjectCard
                imgPath={IMAGES[p.image]}
                title={p.title}
                date={p.date}
                description={p.description}
                tech={p.tech}
                ghLink={p.repo}
                demoLink={p.demo}
              />
            </Col>
          ))}
        </Row>

        <Row style={{ justifyContent: "center", paddingTop: 30 }}>
          <Col md={6} style={{ textAlign: "center" }}>
            <p style={{ color: "#c8b8da", marginBottom: 16 }}>
              Want to see more? Check out my GitHub for additional projects and
              contributions.
            </p>
            <a
              href={SITE.socials.github}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
              style={{ display: "inline-flex", alignItems: "center", gap: 8 }}
            >
              <FiGithub /> View All on GitHub
            </a>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
