import "./Awards.scss";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Award from "../../components/Award";

function template() {
    return (
        <div className="experiences">
            <Row className="greetings">
                <Col className="col">
                <span className="emoji" role="img" aria-label="notepad">
                    🏆
                </span>
                <div className="text">
                    <h1 className="title">
                    Awards and Grants
                    </h1>
                    <h2 className="subtitle">
                        A chronological list of all awards and grants.
                    </h2>
                </div>
                </Col>
            </Row>
            <Row className="list">
                <Container>
                    <div className="academic">
                        <div className="section-header">
                        <p className="section-title">Academic</p>
                        <p className="divider" />
                        </div>
                        <Award 
                            title="Award for Inclusion Research Award"
                            year="2022"
                            extra="Google Research"
                        />
                        <Award
                            title="Summa cum laude - Master's Dissertation"
                            year="2019"
                            extra="Pontifícia Universidade Católica do Rio Grande do Sul"
                        />
                    </div>
                </Container>
            </Row>
        </div>
    );
};

export default template;