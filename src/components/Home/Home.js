import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/developer.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
            <h1 style={{ paddingBottom: 15 }} className="heading">
                Hello! {" "}
               
              </h1>
              <h1 className="heading-name">
                I'M
                <strong className="main-name"> PRASAN BORA </strong>
              </h1>
              <div style={{ paddingLeft: 45, textAlign: "left" }}>
                <Type />
              </div>
              </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
