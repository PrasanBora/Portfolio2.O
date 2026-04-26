import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FiExternalLink } from "react-icons/fi";
import Particle from "../Particle";
import { FEATURED_WORKS } from "../../data/site";
import useDocumentMeta from "../../hooks/useDocumentMeta";

import chefadoraImg from "../../Assets/Projects/chefadora-hero.png";
import himalayanImg from "../../Assets/Projects/himalayan-valley-hero.png";
import physioImg from "../../Assets/Projects/physio-hero.png";

const IMAGES = {
  chefadora: chefadoraImg,
  korperheil: physioImg,
  "himalayan-valley": himalayanImg,
};

export default function Works() {
  useDocumentMeta({
    title: "Selected Works — Prasan Bora | Full-Stack Software Engineer",
    description:
      "Selected works by Prasan Bora — production projects across AI platforms, e-commerce, and client websites. Built with React Native, Next.js, Node.js and TypeScript.",
    path: "/works",
  });

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Selected <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "#c8b8da", textAlign: "center", marginBottom: 0 }}>
          Production projects I've contributed to — from AI platforms to client
          websites.
        </p>

        <Row style={{ paddingTop: 40 }}>
          {FEATURED_WORKS.map((w) => (
            <Col md={12} key={w.id} className="project-card" style={{ paddingBottom: 30 }}>
              <article className="work-card">
                <Row className="g-0">
                  <Col md={5}>
                    <div className="work-card__media">
                      <img
                        src={IMAGES[w.id]}
                        alt={`${w.title} — ${w.subtitle}`}
                        loading="lazy"
                      />
                    </div>
                  </Col>
                  <Col md={7}>
                    <div className="work-card__body">
                      <span className="work-card__cat">{w.category}</span>
                      <h3>{w.title}</h3>
                      <p className="work-card__sub">{w.subtitle}</p>
                      <p className="work-card__desc">{w.description}</p>
                      <div className="work-card__tags">
                        {w.tags.map((t) => (
                          <span key={t} className="tech-tag">
                            {t}
                          </span>
                        ))}
                      </div>
                      <a
                        href={w.href}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-primary"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 8,
                        }}
                        aria-label={`${w.cta} — ${w.title}`}
                      >
                        {w.cta} <FiExternalLink aria-hidden />
                      </a>
                    </div>
                  </Col>
                </Row>
              </article>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}
