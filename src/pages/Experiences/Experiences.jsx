import "./Experiences.scss";
import React from "react";

import { Row, Col, Container } from 'react-bootstrap';
// import Experience from '../../components/Experience;'

function template() {
  return (
    <div className="experience">
      <Row className="greetings">
        <Col className="col">
          <span className="emoji" role="img" aria-label="notepad">
            🖥️
          </span>
          <div className="text">
            <h1 className="title">
              Experience
            </h1>
            <h2 className="subtitle">
              Currently I'm working at{' '}
              <a href='http://www.teialabs.com/' target='_blank'>Teia</a>{' '}
              as a Front-end developer and at my PhD on Imitation Learning.
            </h2>
          </div>
        </Col>
      </Row>
      <Row className="list">
        <Container>
          <div className="teaching">
            <p className="title">Teaching</p>
            {/* <Experience
              title='Artificial Intelligence Fundamentals'
              year='Summer 2020'
              extra='Teaching Assistant, with Prof. Barros, Rodrigo C. and Prof Meneguzzi, Felipe at PUCRS'
            /> */}
          </div>
        </Container>
      </Row>
    </div>
  );
};

export default template;
