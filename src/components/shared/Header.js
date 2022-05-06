import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
const linkStyle = {
    color: 'white',
    textDecoration: 'none'
}

const Header = (props) => {
    return (
        <Navbar variant='dark' id='navbar' expand='md' >
            <div className="container" id='navbox'>
                <Link to='/' className='m-2' style={linkStyle}>Home</Link>
                <Link to='/portfolio' className='m-2' style={linkStyle}>Portfolio</Link>
                {/* <Link to='/contact' className='m-2' style={linkStyle}>Contact</Link> */}
            </div>
        </Navbar>
    )
}

export default Header