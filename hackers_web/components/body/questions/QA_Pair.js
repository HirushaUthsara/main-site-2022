import React from "react";
import { Accordion } from "react-bootstrap";

function QA_Pair(props) {
  return (
    <Accordion.Item eventKey={props.eventkey}>
      <Accordion.Header>{props.header}</Accordion.Header>
      <Accordion.Body>{props.body}</Accordion.Body>
    </Accordion.Item>
  );
}

export default QA_Pair;
