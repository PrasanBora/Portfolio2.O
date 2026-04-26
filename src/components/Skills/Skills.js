import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaCode,
  FaMobileAlt,
  FaServer,
  FaTachometerAlt,
  FaLightbulb,
  FaSearch,
} from "react-icons/fa";
import Particle from "../Particle";
import Techstack from "../About/Techstack";
import useDocumentMeta from "../../hooks/useDocumentMeta";

const SERVICES = [
  { Icon: FaCode, title: "Web Apps", desc: "Full websites or specific features." },
  { Icon: FaMobileAlt, title: "Mobile Apps", desc: "React Native, iOS and Android." },
  { Icon: FaServer, title: "Backend & APIs", desc: "The stuff that makes apps work." },
  {
    Icon: FaTachometerAlt,
    title: "Performance Fixes",
    desc: "Making slow things fast.",
  },
  {
    Icon: FaLightbulb,
    title: "Technical Consulting",
    desc: "Advice on architecture decisions.",
  },
  { Icon: FaSearch, title: "Code Reviews", desc: "Second pair of eyes on your code." },
];

export default function Skills() {
  useDocumentMeta({
    title: "Tech Stack — Prasan Bora | Software Engineer",
    description:
      "The tools, frameworks and platforms Prasan Bora uses to build production web, mobile and AI products: React, Next.js, React Native, Node.js, TypeScript, AWS and more.",
    path: "/skills",
  });

  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset</strong>
        </h1>
        <p style={{ color: "#c8b8da", textAlign: "center", marginBottom: 0 }}>
          The tech I actually use day to day — across frontend, backend, data
          and infra.
        </p>
        <Techstack />

        <h1 className="project-heading">
          How I Can <strong className="purple">Help</strong>
        </h1>
        <p style={{ color: "#c8b8da", textAlign: "center", marginBottom: 24 }}>
          If you need a developer who can own a project from start to finish,
          here's what I typically take on.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          {SERVICES.map(({ Icon, title, desc }) => (
            <Col xs={12} md={4} className="project-card" key={title}>
              <div className="work-card">
                <div className="work-card__body">
                  <span
                    className="stack-item__icon"
                    aria-hidden
                    style={{ marginBottom: 14 }}
                  >
                    <Icon />
                  </span>
                  <h3 style={{ marginTop: 0 }}>{title}</h3>
                  <p className="work-card__desc" style={{ margin: 0 }}>
                    {desc}
                  </p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}
