import "./CV.scss";
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import { ThemeContext } from '../../services/ThemeService';

function template(cv_url, loading, download) {
    return (
        <ThemeContext.Consumer>
            {({theme, toggleTheme}) =>
            <div
                className="cv" 
                style={{
                    "display": "flex",
                    "flex-direction":"column",
                    "height": "90vh"
                    
                }}>
                <Row className="greetings">
                    <Col className="col"> 
                        <span className="emoji" role="img" aria-label="id">🪪</span>
                        <h1 className="title"> My CV</h1>
                    </Col>
                    <Button
                        className={"download"}
                        variant={(theme === "light" ? "dark" : "light")}
                        onClick={() => download()}
                    >
                        { loading ? "Downloading..." : "Download" }
                    </Button>
                </Row>
                <Row style={{"flex-grow": "1"}}>
                  <iframe
                    src={cv_url}
                    width="100%"
                    height="100%"
                    frameborder="0"
                  >
                  </iframe>
                    
                </Row>
            </div>
        }
        </ThemeContext.Consumer>
    );
};

export default template;

