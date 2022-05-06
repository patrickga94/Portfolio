import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

const Portfolio = (props) => {
    return (
        <Container>
            <h1 className="text-center mt-3">Projects:</h1>
            <div className="mt-4" id="project">
                <div>
                    <a href="https://patrickga94.github.io/Project-1-Homie-Quest/" target={'_blank'}>
                        <img src="/homiequest.png" alt="A robot standing on the street with cars heading towards it" />
                    </a>
                </div>
                <div>
                    <a href="https://adventurerspellbook.herokuapp.com/" target={'_blank'}>
                        <img src="/spellbook.png" alt="" />
                    </a>
                </div>
                <div>
                    <a href="https://its-happy-hour.herokuapp.com/" target={'_blank'}>
                        <img src="/happy-hour.png" alt="" />
                    </a>
                </div>
            </div>
        </Container>
    )
}

export default Portfolio