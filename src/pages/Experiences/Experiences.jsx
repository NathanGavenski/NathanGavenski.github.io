import "./Experiences.scss";
import React from "react";

import { Row, Col, Container } from 'react-bootstrap';
import Experience from '../../components/Experience';

function template() {
  return (
    <div className="experiences">
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
              <a href='http://www.teialabs.com/' target='_blank' rel="noreferrer">Teia</a>{' '}
              as a Front-end developer and at my PhD on Imitation Learning.
            </h2>
          </div>
        </Col>
      </Row>
      <Row className="list">
        <Container>
          <div className="teaching">
            <div className="section-header">
              <p className="section-title">Teaching</p>
              <p className="divider" />
            </div>
            <Experience
              title='Deep Learning II: Neural Network for Natural Language Processing'
              year='2021 - Present'
              extra='Visting Professor at Pontifícia Universidade Católica do Rio Grande do Sul'
            />
            <Experience
              title='Business Intelligence'
              year='Spring 2020'
              extra='Teaching Assistant, with Prof. Barros, Rodrigo C. at Pontifícia Universidade Católica do Rio Grande do Sul'
            />
            <Experience
              title='Artificial Intelligence Fundamentals'
              year='Summer 2020'
              extra='Teaching Assistant, with Prof. Barros, Rodrigo C. and Prof Meneguzzi, Felipe at Pontifícia Universidade Católica do Rio Grande do Sul'
            />
            <Experience
              title='Applied Artificial Intelligence'
              year=''
              extra='Teaching Assistant, with Prof. Barros, Rodrigo C. and Prof Meneguzzi, Felipe at Pontifícia Universidade Católica do Rio Grande do Sul'
            />
          </div>

          <div className="industry">
            <div className="section-header">
              <p className="section-title">Industry</p>
              <p className="divider" />
            </div>
            <Experience
              title='ADP'
              year='2018 - 2019'
              extra='Software Developer II'
            />
            <Experience
              title='IBM'
              year='2014 - 2018'
              extra='QA Test Analyst'
            />
            <Experience
              title='Dell'
              year='2012 - 2013'
              extra='Intern'
            />
          </div>

          <div className="education">
            <div className="section-header">
              <p className="section-title">Education</p>
              <p className="divider" />
            </div>
            <Experience
              title='Ph.D.'
              year='2021 - 2024'
              extra='Computer Science at Pontifícia Universidade Católica do Rio Grande do Sul'
            />
            <Experience
              title='MsC'
              year='2019 - 2020'
              extra='Self-Supervised Imitation Learning from Observation, Computer Science at Pontifícia Universidade Católica do Rio Grande do Sul'
            />
            <Experience
              title='Bachelor'
              year='2015 - 2018'
              extra='Governmental Blockchain, Information System at Pontifícia Universidade Católica do Rio Grande do Sul'
            />
          </div>
        </Container>
      </Row>
    </div>
  );
};

export default template;
