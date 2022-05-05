import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

const Portfolio = (props) => {
    return (
        <Container>
            <h1 className="text-center mt-3">Projects:</h1>
            <div className="row mt-4" id="project">
                <div className="col-sm">
                    <img src="/homiequest.png" alt="A robot standing on the street with cars heading towards it" />
                </div>
                <div className="col-sm">
                 <img src="/spellbook.png" alt="" />
                </div>
                <div className="col-sm">
                    <img src="/happy-hour.png" alt="" />
                </div>
            </div>
        </Container>
    )
}

export default Portfolio