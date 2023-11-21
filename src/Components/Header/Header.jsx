import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div>
        <Navbar className="bg-primary p-3">
            <Container>
            <Navbar.Brand href="/" className='text-light fs-1 fw-bolder'>
                <i class="fa-sharp fa-solid fa-utensils fa-bounce me-3"></i>
                Resto Cafe
            </Navbar.Brand>
            </Container>
        </Navbar>
    </div>
  )
}

export default Header