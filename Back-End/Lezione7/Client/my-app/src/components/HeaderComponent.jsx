import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import jwt_decode from "jwt-decode";

export default function HeaderComponent() {

  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    let userLogin = localStorage.getItem("userLogin");
    if(userLogin) {
      var userLoginDecoded = jwt_decode(userLogin);
      setUser(userLoginDecoded);
      console.log(userLoginDecoded)
    }
  }, [])

  const logout = (e) => {
    e.preventDefault();
    setUser(null);
    localStorage.removeItem("userLogin");
    navigate("/login");
  }

  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">ReactNodeAuth</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="me-auto">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/users">Users</Link>
            
          </Nav>
          <Nav>
            { !user ? 
                <><Link className="nav-link" to="/login">Login</Link>
                  <Link className="nav-link" to="/register">Register</Link>
                </>
              : <>
              
                  <Link className="nav-link" to="/profile">Hi {user.fullname}</Link>
                  <Link className="nav-link" onClick={logout}>Logout</Link>
                </>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
