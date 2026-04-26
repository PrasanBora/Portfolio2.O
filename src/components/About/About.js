import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FiExternalLink, FiFileText } from "react-icons/fi";
import Particle from "../Particle";
import Techstack from "./Techstack";
import { EXPERIENCE, WRITING, SITE } from "../../data/site";
import useDocumentMeta from "../../hooks/useDocumentMeta";

export default function About() {
  useDocumentMeta({
    title: "About Prasan Bora — Software Engineer & Full-Stack Developer",
    description:
      "About Prasan Bora — software engineer and full-stack developer. Bio, work experience, education, writing and how I build products.",
    path: "/about",
  });

  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        {/* Bio */}
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={9}
            style={{ justifyContent: "center", paddingTop: "30px", paddingBottom: "20px" }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px", color: "white" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Card className="quote-card-view">
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p style={{ textAlign: "justify" }}>
                    {SITE.about.long[0]}
                    <br />
                    <br />
                    {SITE.about.long[1]}
                  </p>
                  <ul className="about-bullet-list">
                    {SITE.about.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                  {SITE.about.closing.map((p) => (
                    <p key={p} style={{ textAlign: "justify" }}>
                      {p}
                    </p>
                  ))}
                  <footer className="blockquote-footer">
                    <span className="purple">{SITE.name}</span> · {SITE.role}
                  </footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row style={{ paddingTop: "40px" }}>
          <Col md={12}>
            <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
              Things I've <strong className="purple">Written</strong>
            </h1>
          </Col>
          <Col md={{ span: 10, offset: 1 }}>
            {WRITING.map((w) => (
              <div className="writing-card" key={w.href}>
                <span className="writing-card__icon" aria-hidden>
                  <FiFileText />
                </span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h3>
                    <a
                      href={w.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#fff", textDecoration: "none" }}
                    >
                      {w.title}
                    </a>
                  </h3>
                  <p>{w.summary}</p>
                  <a
                    href={w.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="writing-card__link"
                  >
                    Read on {w.publication} <FiExternalLink aria-hidden />
                  </a>
                </div>
              </div>
            ))}
          </Col>
        </Row>

        {/* Experience timeline */}
        <Row style={{ paddingTop: "40px" }}>
          <Col md={12}>
            <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
              Where I've <strong className="purple">Been</strong>
            </h1>
          </Col>
          <Col md={{ span: 10, offset: 1 }} className="resume">
            {EXPERIENCE.map((item) => (
              <div className="resume-item" key={`${item.role}-${item.org}`}>
                <h4>{item.role}</h4>
                <h5>@ {item.org}</h5>
                <span className="resume-title">{item.period}</span>
                <p>{item.summary}</p>
                <ul>
                  {item.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </Col>
        </Row>

       

        {/* Tech stack snapshot */}
        <h1 className="project-heading" style={{ paddingTop: "60px" }}>
          Professional <strong className="purple">Skillset</strong>
        </h1>
        <Techstack />
      </Container>
    </Container>
  );
}
