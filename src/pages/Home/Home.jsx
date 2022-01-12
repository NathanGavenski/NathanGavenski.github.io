import "./Home.scss";
import React from "react";

import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'

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
            I'm currently a PhD student at <a className="profile-link pucrs" href="http://www.pucrs.br/en/" target="_blank" rel="noreferrer">PUCRS</a> studying Computer Science. <br />
            Currently, I'm a part of the <span className="malta">MALTA</span> research group. <br />
            My research areas are <span className="research-field">Imitation Learning</span> and <span className="research-field">Computer Vision</span>. <br />
          </p>

          <p>
            Before, I've worked at ADP Brazil Labs as a Software Developer. <br />
            I also previously was a Quality Analyst at IBM. <br />
          </p>
          <p>
            I am a fan of photography, technology, traveling, and music. <br />
            Feel free to contact me in any of the links below.
          </p>
          <div className="socials">
            <a href="https://twitter.com/NGavenski" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faTwitter} className="icons" size="2x" />
            </a>
            <a href="https://www.linkedin.com/in/nathan-gavenski-87196449/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="icons" size="2x" />
            </a>
            <a href="https://scholar.google.com.br/citations?user=hX9WqxUAAAAJ" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGraduationCap} className="icons" size="2x" />
            </a>
            <a href="https://github.com/NathanGavenski" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} className="icons" size="2x" />
            </a>
          </div>
        </Col>
        <Col className="image" lg={4}>
          <img className="avatar rounded-circle" src={avatar} alt="Avatar" />
        </Col>
      </Row>
    </div>
  );
};

export default template;
