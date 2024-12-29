import "./Award.scss";
import React from "react";
import ReactHtmlParser from 'html-react-parser';
import { Col, Row } from 'react-bootstrap';
import GitHubCard from '../GitHubCard/GitHubCard';

function template(title, year, extra, misc, github) {
  return (
    <div className="award">
      <Row>
        <Col xl={1}>
          {
            year &&
            <p className="year">{year}</p>
          }
        </Col>

        <Col>
          <div className="title">
            <p className="position">{title}</p>
          </div>
          {!github && extra.map((value, index) => (
              <div className="extra" key={value+index}>⮞ {value}</div>
          ))}
          {
            misc && !github &&
            <div className="misc">{ReactHtmlParser(misc)}</div>
          }
          {
            github &&
            <GitHubCard repoUrl={github} />
          }
        </Col>
      </Row>
    </div>
  );
};

export default template;
