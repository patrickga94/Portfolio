import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

const Portfolio = (props) => {
    return (
        <Container className="mb-5">
            <h1 className="text-center mt-3">Projects:</h1>
            <div className="mt-4" id="project">
                <h4><strong>Homie Quest</strong></h4>
                <div className="project-link">
                    <a href="https://patrickga94.github.io/Project-1-Homie-Quest/" target={'_blank'}>
                        <img src="/homiequest.png" alt="A robot standing on the street with cars heading towards it" />
                    </a>
                </div>
                <div className="description">
                    <p>A sidescrolling game about friendship and aggressive drivers. Built with HTML, CSS, and JavaScript.</p>
                </div>
                <h4><strong>The Adventurer's Spellbook</strong></h4>
                <div className="project-link">
                    <a href="https://adventurerspellbook.herokuapp.com/" target={'_blank'}>
                        <img src="/spellbook.png" alt="" />
                    </a>
                </div>
                <div className="description">
                    <p>A fullstack companion application to Dungeons & Dragons 5e that allows users to build their character's spellbooks and create custom spells. Built following MVC structure with Mongoose, Express, Liquid, CSS, and the DnD 5e API.</p>
                </div>
                <h4><strong>Happy houR</strong></h4>
                <div className="project-link">
                    <a href="https://its-happy-hour.herokuapp.com/" target={'_blank'}>
                        <img src="/happy-hour.png" alt="" />
                    </a>
                </div>
                <div className="description">
                    <p>A fullstack MERN application that allows bars and restaurants to upload information about their happy hour deals. Guests can then view those deals, search for happy hours by city and tags, and add happy hours to their favorites. Built using Mongoose, Express, React, Node.js, and the Google Maps, Places, and Geocoding APIs.</p>
                </div>
            </div>
        </Container>
    )
}

export default Portfolio