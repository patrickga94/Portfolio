import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
const linkStyle = {
    color: 'white',
    textDecoration: 'none'
}

const Footer = (props) => {
    return(
        <Navbar className="navbar fixed-bottom mt-5" id="footer" expand="md">
            <div className="container">
                <a href="https://www.linkedin.com/in/patrick-g-alvarez/" target="_blank" style={linkStyle}>Linkedin</a>
                <Link to="/Patrick-Alvarez-updated-resume.pdf" download target={"_blank"} style={linkStyle}>Resume</Link>
                <a href="https://github.com/patrickga94" target="_blank" style={linkStyle}>Github</a>
            </div>
        </Navbar>
    )
}

export default Footer