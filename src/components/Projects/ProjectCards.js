import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

export default function ProjectCards({
  imgPath,
  title,
  date,
  description,
  tech = [],
  ghLink,
  demoLink,
  isBlog,
}) {
  return (
    <Card className="project-card-view">
      {imgPath && (
        <Card.Img variant="top" src={imgPath} alt={`${title} preview`} />
      )}
      <Card.Body>
        {date && <span className="project-date">{date}</span>}
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>{description}</Card.Text>

        {tech.length > 0 && (
          <div className="project-tech" aria-label="Technology stack">
            {tech.map((t) => (
              <span key={t} className="tech-tag">
                {t}
              </span>
            ))}
          </div>
        )}

        <div
          style={{
            marginTop: 12,
            display: "flex",
            flexWrap: "nowrap",
            gap: 10,
            alignItems: "center",
          }}
        >
          {ghLink && (
            <Button
              variant="primary"
              href={ghLink}
              target="_blank"
              rel="noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: 6 }}
            >
              <BsGithub /> {isBlog ? "Blog" : "GitHub"}
            </Button>
          )}
          {!isBlog && demoLink && (
            <Button
              variant="primary"
              href={demoLink}
              target="_blank"
              rel="noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: 6 }}
            >
              <CgWebsite /> Demo
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
