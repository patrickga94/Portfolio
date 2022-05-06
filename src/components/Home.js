import React, {useState} from "react"
import { Link, useNavigate } from 'react-router-dom'
import {Container, Form, Button} from 'react-bootstrap'

const Home = (props) => {
    return (
        <Container className="mb-5">
            <h1 className="text-center mt-5">Hi! I'm Patrick, a fullstack developer!</h1>
            <hr />
            <div className="container mt-3" id="aboutMe">
                <h4>About me:</h4>
                <p>After five years in the fine dining world, I made the switch to software engineering in January 2022. This change was driven by my passion for problem solving and the desire to create something meaningful. My background in theatre and hospitality gives me a unique advantage in forging connections with new people and delivering unparalleled customer service, and during my time at General Assembly I sharpened my skills in HTML, CSS, JavaScript, and Python. When I'm not coding you'll find me on my bike, at the grill, or playing Dungeons and Dragons!</p>
            </div>
            <div className="container mt-3" id="contact">
                <h4>Contact:</h4>
                <p><strong>email:</strong> patrick.g.alvarez@gmail.com</p>
                <p><strong>Linkedin:</strong> <a href="https://linkedin.com/in/patrick-g-alvarez/" target={"_blank"}>linkedin.com/in/patrick-g-alvarez/</a></p>
            </div>
        </Container>
    )
}

export default Home