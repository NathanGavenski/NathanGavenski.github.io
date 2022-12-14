import "./Award.scss";
import React from "react";

import { Col, Row } from 'react-bootstrap';

function template(title, year, extra) {
  return (
    <div className="award">
      <Row>
        <Col xl={1}>
          <p className="year">{year}</p>
        </Col>

        <Col>
          <div className="title">
            <p className="position">{title}</p>
          </div>
          <div className="extra">{extra}</div>
        </Col>
      </Row>
    </div>
  );
};

export default template;
