import React, {useState} from "react"
import { Container, Row, Col } from "react-bootstrap"

const Contact = (props) => {
    return (
        <Container>
            <div className="d-flex flex-column align-items-center">
                <Row>
                    <Col>
                        <h4>Email: </h4>
                    </Col>
                    <Col>
                        <h4>patrick.g.alvarez@gmail.com</h4>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h4>Linkedin: </h4>
                    </Col>
                    <Col>
                        <h4>linkedin.com/in/patrick-g-alvarez/</h4>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default Contact