import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Footer.css'

function Footer() {
  return (
    <div>
        <Navbar className="bg-primary p-2 pt-4 shadow">
            <Container>
            <Navbar.Brand href="#home" className='text-light'>
                <p>All Rights are Reserved Under Resto Cafe &copy; restocafe@</p>
            </Navbar.Brand>
            </Container>
        </Navbar>
    </div>
  )
}

export default Footer