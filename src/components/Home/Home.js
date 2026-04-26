import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import { FiMail } from "react-icons/fi";
import homeLogo from "../../Assets/developer.svg";
import Particle from "../Particle";
import Type from "./Type";
import Home2 from "./Home2";
import useDocumentMeta from "../../hooks/useDocumentMeta";
import { SITE } from "../../data/site";

export default function Home() {
  useDocumentMeta({
    title:
      "Prasan Bora — Software Engineer & Full-Stack Developer Portfolio",
    description:
      "Prasan Bora is a software engineer and full-stack developer based in India, building production web, mobile and AI products. Explore Prasan Bora's portfolio, work, projects, tech stack and resume.",
    path: "/",
  });

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hello!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> PRASAN BORA </strong>
              </h1>

              <div
                style={{
                  paddingLeft: 45,
                  paddingBottom: 24,
                  textAlign: "left",
                }}
              >
                <Type />
              </div>

              <p
                style={{
                  paddingLeft: 45,
                  color: "#d8cce6",
                  maxWidth: 620,
                  fontSize: "1.05em",
                  lineHeight: 1.65,
                  marginBottom: 18,
                }}
              >
                {SITE.hero.lead}
              </p>

              <div className="home-cta-row">
                <Link to="/works" className="btn-pb primary">
                  View My Work <HiArrowRight aria-hidden />
                </Link>
                <a
                  href={`mailto:${SITE.contact.email}`}
                  className="btn-pb outline"
                >
                  <FiMail aria-hidden /> Let's Connect
                </a>
              </div>

              <div className="home-availability">Open to opportunities</div>
            </Col>

            <Col md={5} style={{ paddingBottom: 30 }}>
              <img
                src={homeLogo}
                alt="Prasan Bora — software engineer illustration"
                className="img-fluid"
                style={{ maxHeight: "500px", paddingTop: 50 }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}
