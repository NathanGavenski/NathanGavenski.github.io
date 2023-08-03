import "./Home.scss";
import React from "react";

import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGraduationCap, faEnvelope } from '@fortawesome/free-solid-svg-icons'

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
            I'm a Computer Science PhD student at <a className="profile-link uni" href="https://www.kcl.ac.uk/" target="_blank" rel="noreferrer">King's College London</a>. <br />
            Currently, I'm a part of the <a className="lab" href="https://safeandtrustedai.org/" target="_blank" rel="noreferrer">STAI</a> centre for Doctoral Training. <br />
            My research interests are <span className="research-field">Imitation Learning</span>, <span className="research-field">Multi-agent Systems</span> and <span className="research-field">Machine Learning</span> <br />
          </p>

          <p>
            Before working with research I was a software developer at ADP Brazil Labs, and a Quality Analyst at IBM.<br />
          </p>
          <p>
            I am a fan of photography, reading, traveling, and music. <br />
            Feel free to get in touch using any of the links below.
          </p>
          <div className="socials">
            <a href="mailto:nathan.schneider_gavenski@kcl.ac.uk" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faEnvelope} className="icons" size="2x" />
            </a>
            <a href="https://twitter.com/NGavenski" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faTwitter} className="icons" size="2x" />
            </a>
            <a href="https://www.linkedin.com/in/nathan-gavenski-87196449/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="icons" size="2x" />
            </a>
            <a href="https://github.com/NathanGavenski" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} className="icons" size="2x" />
            </a>
            <a href="https://scholar.google.com.br/citations?user=hX9WqxUAAAAJ" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGraduationCap} className="icons" size="2x" />
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
