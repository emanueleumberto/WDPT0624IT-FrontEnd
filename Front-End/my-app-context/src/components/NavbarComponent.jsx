import React from 'react'
import { useContext } from 'react';
import {Container, Nav, Navbar, Button} from 'react-bootstrap';
import { AuthContext, ThemeContext } from '../modules/context';

export default function NavbarComponent() {

  const [theme, setTheme] = useContext(ThemeContext);
  const [auth, setAuth] = useContext(AuthContext);

  return (
    <Navbar expand="lg" className="bg-body-tertiary" bg={theme}  data-bs-theme={theme}>
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Users</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Text className='mx-3'>
           {auth === '' ? '' : "Hello " + auth}
        </Navbar.Text>
        <Button variant="warning" onClick={() => {
          theme === 'light' ? setTheme('dark') : setTheme('light')
        }}>Theme</Button>
      </Container>
    </Navbar>
  )
}
