import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
const linkStyle = {
    color: 'white',
    textDecoration: 'none'
}

const Footer = (props) => {
    return(
        <Navbar className="navbar fixed-bottom" id="footer" expand="md">
            <div className="container">
                <a href="https://www.linkedin.com/in/patrick-g-alvarez/" target="_blank" style={linkStyle}>Linkedin</a>
                <a href="/home/patrickalvarez/sei/projects/postgrad/portfolio/public/Patrick-Alvarez-updated-resume.pdf" download={"Patrick-Alvarez-resume"} style={linkStyle}>Resume</a>
                <a href="https://github.com/patrickga94" target="_blank" style={linkStyle}>Github</a>
            </div>
        </Navbar>
    )
}

export default Footer