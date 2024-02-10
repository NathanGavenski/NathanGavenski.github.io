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
              Currently, I'm working at{' '}
              <a href='https://safeandtrustedai.org/' target='_blank' rel="noreferrer">Safe and Trust AI</a>{' '}
              on my PhD in Imitation Learning and Multi-Agent Systems.
            </h2>
          </div>
        </Col>
      </Row>

      <Row className="list">
        <Container>
          <div className="education">
            <div className="section-header">
              <p className="section-title">Education</p>
              <p className="divider" />
            </div>
            <Experience
              title='Ph.D. in Computer Science'
              year='2022-2026'
              supervisor="Prof. Michael Luck and Dr. Odinaldo Rodrigues"
              extra="at King's College London"
            />
            <Experience
              title='MSc in Computer Science'
              year='2019 - 2020'
              name="Dissertation title: 'Self-Supervised Imitation Learning from Observation'"
              supervisor="Prof. Rodrigo C. Barros"
              extra="at Pontifícia Universidade Católica do Rio Grande do Sul"
            />
            <Experience
              title='Bachelor in Information System'
              year='2015 - 2018'
              name="Dissertation title: Governmental Blockchain"
              supervisor="Prof. Dilnei Venturini"
              extra='at Pontifícia Universidade Católica do Rio Grande do Sul'
            />
          </div>

          <div className="teaching">
            <div className="section-header">
              <p className="section-title">Teaching</p>
              <p className="divider" />
            </div>
            <div className="lecturer">
                <p className="section-divider">Lecturer</p>
                <Experience
                  title='Deep Learning II: Neural Network for Natural Language Processing'
                  year='2021 - Present'
                  name='Visting Lecturer'
                  extra="at Pontifícia Universidade Católica do Rio Grande do Sul"
                />
            </div>
            <div className="teaching-assistant">
                <p className="section-divider">Teaching Assistant</p>
                <Experience
                  title='Elementary Logic With Applications'
                  year='2024'
                  name="Teaching Assistant for Dr. Odinaldo Rodrigues and Dr. Christopher Hampson"
                  extra="at King's College London"
                />
                <Experience
                  title='Logic and Knowledge Representation'
                  year=''
                  name="Teaching Assistant for Dr. Odinaldo Rodrigues and Dr. Christopher Hampson"
                  extra="at King's College London"
                />
                <Experience
                  title='Optimization methods'
                  year='2023'
                  name="Teaching Assistant for Prof. Tomasz Radzik and Dr. Yali Du"
                  extra="at King's College London"
                />
                <Experience
                  title='Business Intelligence'
                  year='2020'
                  name="Teaching Assistant for Prof. Rodrigo C. Barros"
                  supervisor=""
                  extra="at Pontifícia Universidade Católica do Rio Grande do Sul"
                />
                <Experience
                  title='Artificial Intelligence Fundamentals'
                  year=''
                  name="Teaching Assistant for Prof. Rodrigo C. Barros and Prof. Felipe Meneguzzi"
                  extra='at Pontifícia Universidade Católica do Rio Grande do Sul'
                />
                <Experience
                  title='Applied Artificial Intelligence'
                  year=''
                  name="Teaching Assistant for Prof. Rodrigo C. Barros and Prof Felipe Meneguzzi"
                  extra='at Pontifícia Universidade Católica do Rio Grande do Sul'
                />
              </div>
          </div>

          <div className="academic">
            <div className="section-header">
              <p className="section-title">Academic</p>
              <p className="divider" />
            </div>
            <div className="journal">
              <p className="section-divider">Reviewer for Journals</p>
              <Experience 
                title="IEEE Transactions on Neural Network and Learning Systems (TNNLS)"
                year="2022 - Present"
              />
            </div>
            <div className="conferences">
              <p className="section-divider">Reviewer for Conferences</p>
              <Experience 
                title="The International Joint Conference on Neural Networks (IJCNN)"
                year="2021-2023"
              />
              <Experience 
                title="IEEE/CVF Winter Conference on Applications of Computer Vision (WACV)"
                year="2022-2023"
              />
              <Experience 
                title="The British Machine Vision Conference (BMVC)"
                year="2022-2023"
              />
              <Experience 
                title="International Joint Conference On Artificial Intelligence (IJCAI)"
                year="2023"
              />
              <Experience 
                title="IEEE Conference on Artificial Intelligence (IEEE CAI)"
                year="2023"
              />              
            </div>
          </div>

          <div className="industry">
            <div className="section-header">
              <p className="section-title">Industry</p>
              <p className="divider" />
            </div>
            <Experience
              title='Teia Labs'
              year='2021-2022'
              extra='Frontend Developer'
            />
            <Experience
              title='ADP Brazil Labs'
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
        </Container>
      </Row>
    </div>
  );
};

export default template;
