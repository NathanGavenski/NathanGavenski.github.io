import "./Home.scss";
import React from "react";

import { Col, Row } from 'react-bootstrap';

import avatar from '../../assets/avatar.jpg';

function template() {
  return (
    <div className="home">
      <Row className="greetings">
        <Col className="col">
          <span className="emoji" role="img" aria-label="waving-hand">👋</span>
          <div className="text">
            <h1 className="title"> Hi there, </h1>
            <h2 className="subtitle"> It's nice to meet you! </h2>
          </div>
        </Col>
      </Row>

      <Row className="content">
        <Col className="text" lg={8}>
          <p>
            I'm currently an MSc student at PUCRS studying Computer Science. <br />
            Now, I'm a part of the MALTA research group. <br />
            My research areas are Imitation Learning and Computer Vision. <br />
          </p>

          <p>
            Before, I've worked at ADP Brazil Labs as a Software Developer. <br />
            I also previously was a Quality Analyst at IBM. <br />
          </p>
          <p>
            I am a fan of photography, technology, traveling, and music. <br />
            Feel free to contact me in any of the links below.
          </p>
        </Col>
        <Col className="image" lg={4}>
          <img className="avatar rounded-circle" src={avatar} alt="Avatar" />
        </Col>
      </Row>
    </div>
  );
};

export default template;
