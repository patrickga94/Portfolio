import React, {useState} from "react"
import { Link, useNavigate } from 'react-router-dom'
import {Container, Form, Button} from 'react-bootstrap'

const Home = (props) => {
    return (
        <Container>
            <h1 className="text-center mt-5">Hi! I'm Patrick, a fullstack developer!</h1>
            <hr />
            {/* <div className="photo">
                <img src="/IMG-4022.jpg" alt="Man standing in the forrest with his hands in his jacket" />
            </div> */}
            <div className="container mt-3" id="aboutMe">
                <h4>About me:</h4>
                <p>After five years in the fine dining world, I made the switch to software engineering in January 2022. This change was driven by my passion for problem solving and the desire to create something meaningful. My background in theatre and hospitality gives me a unique advantage in forging connections with new people and delivering unparalleled customer service, and during my time at General Assembly I sharpened my skills in HTML, CSS, JavaScript, and Python. When I'm not coding you'll find me on my bike, at the grill, or playing Dungeons and Dragons!</p>
            </div>
        </Container>
    )
}

export default Home