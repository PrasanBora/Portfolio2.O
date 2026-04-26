import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn, FaCode } from "react-icons/fa";
import { SITE } from "../data/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <Container fluid className="footer" id="footer">
      <Row style={{ paddingTop: 16, alignItems: "center" }}>
        <Col md={6} className="footer-copywright" style={{ textAlign: "center" }}>
          <h4 style={{ display: "inline-block" }}>About</h4>
          <p
            style={{
              color: "#b8a8cc",
              fontSize: "0.9em",
              maxWidth: 320,
              margin: "0 auto",
            }}
          >
            Developer based in {SITE.contact.location}. I like building things,
            learning new stuff, and good coffee.
          </p>
          <p style={{ marginTop: 10 }}>
            <a
              href={`mailto:${SITE.contact.email}`}
              style={{ color: "#d3a8ee", textDecoration: "none" }}
            >
              {SITE.contact.email}
            </a>
          </p>
        </Col>

        <Col md={6} className="footer-body">
          <h4>Find me on</h4>
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href={SITE.socials.github}
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Prasan Bora on GitHub"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href={SITE.socials.twitter}
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Prasan Bora on Twitter"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href={SITE.socials.linkedin}
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Prasan Bora on LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href={SITE.socials.leetcode}
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Prasan Bora on LeetCode"
              >
                <FaCode />
              </a>
            </li>
            <li className="social-icons">
              <a
                href={SITE.socials.instagram}
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Prasan Bora on Instagram"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>

      <div className="footer-bottom">
        <Container>
          © {year} {SITE.name}. All rights reserved.
        </Container>
      </div>
    </Container>
  );
}
