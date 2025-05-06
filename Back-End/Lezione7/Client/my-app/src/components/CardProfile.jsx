import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import { Card, Col, Image, Row } from 'react-bootstrap';

export default function CardProfile() {

const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    let userLogin = localStorage.getItem("userLogin");
    if(!userLogin) {
      navigate("/login");
    } else {
      var userLoginDecoded = jwt_decode(userLogin);
      setUser(userLoginDecoded);
    }
  }, [])


  return (
    <>
    <h1>Profile</h1>
    { user ? 
    <Row xs={1} md={12} className="mt-5">
        <Col>
        <Card>
        <Row>
            <Col md={3} className="m-3 d-flex">
                <Image className="w-100 align-self-center" roundedCircle src={user.img ? user.img : 'https://st4.depositphotos.com/4329009/19956/v/450/depositphotos_199564354-stock-illustration-creative-vector-illustration-default-avatar.jpg'} />
            </Col>
            <Col md={9}>
            <Card.Body>
              <Card.Title>{user.fullname}</Card.Title>
              <Card.Text>Email: {user.email}</Card.Text>
            </Card.Body>
          </Col> 
        </Row>
        </Card>
        </Col>
    </Row>
     : '' }
    </>
  )
}