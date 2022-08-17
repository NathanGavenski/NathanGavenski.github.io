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
            I'm currently a Computer Science PhD student at <a className="profile-link uni" href="https://www.kcl.ac.uk/" target="_blank" rel="noreferrer">King's College London</a>. <br />
            Currently, I'm a part of the <a className="lab" href="https://safeandtrustedai.org/" target="_blank" rel="noreferrer">STAI</a> centre for Doctoral Training. <br />
            My research areas are <span className="research-field">Imitation Learning</span> and <span className="research-field">Multi-agent Systems</span>. <br />
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
