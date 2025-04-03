import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

export default function AboutPage() {

    const navigate = useNavigate();

    const handleClick = () => {
        //alert("Click button");
        navigate('/home')
    }

  return (
    <Container>
        <div>AboutPage</div>
        <Button variant="success" onClick={handleClick}>Click</Button>
    </Container>
  )
}
