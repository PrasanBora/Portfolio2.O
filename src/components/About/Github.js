import React from "react";
import { Row } from "react-bootstrap";
import GitHubCalendar from "react-github-calendar";

export default function Github() {
  return (
    <Row
      style={{ justifyContent: "center", paddingBottom: "10px" }}
      aria-label="GitHub contributions calendar"
    >
      <GitHubCalendar
        username="PrasanBora"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      />
    </Row>
  );
}
