import React from 'react'
import ScrollFade from "@benestudioco/react-scrollfade";
import  music  from "../../assets/test.mp3"
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

function Production(props) {
    return (
        <div className = {props.page.production.page}>
            <div className = "active-presentation">
                <div className = "portfolio-container">
                    <h1 className = "portfolio-header">Music Compositions</h1>
                    <p className = "portfolio-text">Showcase of my original music productions and compositions.</p>
                    <div className = "scroll-container">
                        <Container>
                            <Row>
                                <Col>
                                <div className = "production-card">
                                    <div>
                                        Song Title 1
                                    </div>
                                    <div>
                                        <audio controls src={music}></audio>
                                    </div>
                                </div>
                                </Col>
                                <Col>
                                <div className = "production-card">
                                    <div>
                                        Song Title 2
                                    </div>
                                    <div>
                                        <audio controls src={music}></audio>
                                    </div>
                                </div>
                                </Col>
                                <Col>
                                <div className = "production-card">
                                    <div>
                                        Song Title 3
                                    </div>
                                    <div>
                                        <audio controls src={music}></audio>
                                    </div>
                                </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                <div className = "production-card">
                                    <div>
                                        Song Title 4
                                    </div>
                                    <div>
                                        <audio controls src={music}></audio>
                                    </div>
                                </div>
                                </Col>
                                <Col>
                                <div className = "production-card">
                                    <div>
                                        Song Title 5
                                    </div>
                                    <div>
                                        <audio controls src={music}></audio>
                                    </div>
                                </div>
                                </Col>
                                <Col>
                                <div className = "production-card">
                                    <div>
                                        Song Title 6
                                    </div>
                                    <div>
                                        <audio controls src={music}></audio>
                                    </div>
                                </div>
                                </Col>
                            </Row>
                        </Container>
                    <ScrollFade />
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default Production
