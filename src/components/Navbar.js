import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link, NavLink } from "react-router-dom";
import logo from "../Assets/logo.png";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineFundProjectionScreen,
  AiOutlineAppstore,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { TbStack2 } from "react-icons/tb";
import { SITE } from "../data/site";

export default function NavBar() {
  const [expand, setExpand] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  useEffect(() => {
    const onScroll = () => updateNavbar(window.scrollY >= 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
          className="d-flex"
          aria-label={`${SITE.name} home`}
        >
          <img src={logo} className="img-fluid logo" alt="Prasan Bora logo" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpand(expand ? false : "expanded")}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link
                as={NavLink}
                to="/"
                end
                onClick={() => setExpand(false)}
              >
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={NavLink}
                to="/about"
                onClick={() => setExpand(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={NavLink}
                to="/works"
                onClick={() => setExpand(false)}
              >
                <AiOutlineAppstore style={{ marginBottom: "2px" }} /> Works
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={NavLink}
                to="/projects"
                onClick={() => setExpand(false)}
              >
                <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} />{" "}
                Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={NavLink}
                to="/skills"
                onClick={() => setExpand(false)}
              >
                <TbStack2 style={{ marginBottom: "2px" }} /> Tech Stack
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                href={SITE.contact.resume}
                target="_blank"
                rel="noreferrer"
                onClick={() => setExpand(false)}
                aria-label="Open Prasan Bora's resume"
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
