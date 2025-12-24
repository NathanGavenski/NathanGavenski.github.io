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
                            Awards, Grants and Projects
                        </h1>
                        <h2 className="subtitle">
                            A chronological list of all awards, grants and projects.
                        </h2>
                    </div>
                </Col>
            </Row>
            <Row className="list">
                <Container>
                    <div className="projects">
                        <div className="section-header">
                            <p className="section-title">Projects</p>
                            <p className="divider" />
                        </div>
                        <Award 
                            title="Labyrinth"
                            year="Active"
                            extra="A maze environment for training and evaluating agents."
                            misc="
                            <a
                                className='link'
                                href='https://github.com/NathanGavenski/Labyrinth'
                                target='_blank' rel='noreferrer'
                            >
                                GitHub page
                            </a>
                            <a
                                className='link'
                                href='https://github.com/NathanGavenski/Labyrinth'
                                target='_blank' rel='noreferrer'
                            >
                                PyPi page
                            </a>
                            "
                            github="https://github.com/NathanGavenski/Labyrinth"
                        />
                        <Award 
                            title="Imitation Learning Datasets"
                            year="Active"
                            extra="A project for creating imitation learning datasets based on HuggingFace weights and using multithreads for performance."
                            misc="
                            <a
                                className='link'
                                href='https://github.com/NathanGavenski/IL-Datasets'
                                target='_blank' rel='noreferrer'
                            >
                                GitHub page
                            </a>
                            <a
                                className='link'
                                href='https://pypi.org/project/il-datasets/'
                                target='_blank' rel='noreferrer'
                            >
                                PyPi page
                            </a>
                            "
                            github="https://github.com/NathanGavenski/IL-Datasets"
                        />
                        <Award
                            title="Python watcher"
                            year="Active"
                            extra="This is a watcher to rerun scripts, execute tests and run lint after you change a directory or a file." 
                            misc="
                            <a
                                className='link'
                                href='https://github.com/NathanGavenski/python-watcher'
                                target='_blank' rel='noreferrer'
                            >
                                GitHub page
                            </a>
                            <a
                                className='link'
                                href='https://pypi.org/project/watcher-cli/'
                                target='_blank' rel='noreferrer'
                            >
                                PyPi page
                            </a>
                            "
                            github="https://github.com/NathanGavenski/python-watcher"
                        />
                        <Award
                            title="Exhibition: Super Mario Bros: The Turing Quest"
                            year="2024"
                            extra={["The King's Festival of Artificial Intelligence", "Royal Institution Experience: sensational senses"]}
                            misc="
                                <a 
                                    className='link' 
                                    href='https://www.kcl.ac.uk/events/super-mario-bros-the-turing-quest' 
                                    target='_blank' rel='noreferrer'
                                >
                                    Event page
                                </a>
                                <a 
                                    className='link' 
                                    href='https://safeandtrustedai.org/kings-festival-of-ai-super-mario-bros/' 
                                    target='_blank' rel='noreferrer'
                                >
                                    More about it
                                </a>
                            "
                        />
                        <Award
                            title="Exhibition: Can you help me?"
                            year="2023"
                            extra="The King's Festival of Artificial Intelligence"
                            misc="
                                <a 
                                    className='link' 
                                    href='https://www.kcl.ac.uk/events/can-you-help-me' 
                                    target='_blank' rel='noreferrer'
                                >
                                    Event page
                                </a>
                                <a
                                    className='link'
                                    href='https://safeandtrustedai.org/stai-cdt-at-kings-festival-of-ai-can-you-help-me/'
                                    target='_blank' rel='noreferrer'
                                >
                                    More about it
                                </a>
                                <a 
                                    className='link' 
                                    href='https://nathangavenski.github.io/ai-festival/' 
                                    target='_blank' 
                                    rel='noreferrer'
                                >
                                    Project Live Demo
                                </a>
                            "
                        />
                    </div>
                    <div className="academic">
                        <div className="section-header">
                            <p className="section-title">Awards and grants</p>
                            <p className="divider" />
                        </div>
                        <Award
                            title="Fully-funded PhD Studentship"
                            year="2022"
                            extra={["UKRI Centre for Doctoral Training in Safe and Trusted AI", "King's College London"]}
                        />
                        <Award
                            title="Google Award for Inclusion Research Award"
                            year="2022"
                            extra="With Prof. Rodrigo C. Barros"                       
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
