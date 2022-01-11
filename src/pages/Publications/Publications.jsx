import "./Publications.scss";
import React from "react";

import { Row, Col, Container } from 'react-bootstrap';

import Publication from '../../components/Publication';

function template(publications) {
  return (
    <div className="publications">
      <Row className="greetings">
        <Col className="col">
          <span className="emoji" role="img" aria-label="notepad">
            📋
          </span>
          <div className="text">
            <h1 className="title">
              Publications
            </h1>
            <h2 className="subtitle">
              Currently my research topics are computer vision and imitation learning.
            </h2>
          </div>
        </Col>
      </Row>
      <Row className="list">
        <Container>
          {publications.map((value, index) => (
            <Row className="item" key={value.title + index} >
              <Publication value={value} />
            </Row>
          ))}
        </Container>
      </Row>
    </div>
  );
};

export default template;
