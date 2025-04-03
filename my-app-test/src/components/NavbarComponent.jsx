import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function NavbarComponent() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* 
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link> 
            */}
                <Link to="/home" className='nav-link'>Home</Link>
                <Link to="/about" className='nav-link'>About</Link>
                <Link to="/users" className='nav-link' title="users">Users</Link>
                <Link to="/contact" className='nav-link'>Contact</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
