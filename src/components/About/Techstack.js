import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiGit,
  DiMongodb,
  DiCss3,
} from "react-icons/di";

import {
  SiFirebase,
  SiPostgresql,
  SiCanva,
  SiTailwindcss,
  SiVisualstudiocode,
  SiVercel,

} from "react-icons/si";

import { FaHtml5 ,
  FaFigma,
  FaGithub,
   FaBootstrap 

} from "react-icons/fa";

import { TbSql } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={2} className="tech-icons">
      <FaHtml5 />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
      <DiCss3 />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
      <FaBootstrap />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
      <SiTailwindcss />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>

       <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col> 
     
      <Col xs={4} md={2} className="tech-icons">
      <TbSql />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <FaGithub />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
 
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        </Col>
 
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
      <SiCanva />
      </Col>
   
      <Col xs={4} md={2} className="tech-icons">
      <FaFigma />
      </Col>

    </Row>
  );
}

export default Techstack;
