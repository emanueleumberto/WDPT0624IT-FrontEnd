import React, { useState } from 'react'
import {Col, Form, Row, Button} from 'react-bootstrap';

export default function FormComponent({add}) {

     /* const [firstname, setName] = useState("")
    const [lastname, setLastname] = useState("")
    const [city, setCity] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")

  const handleChangeFirstname = (e) => {
    //console.log(e.target.value)
    setName(e.target.value)
  }

  const handleChangeLastname = (e) => {
    setLastname(e.target.value)
  }

  const handleChangeCity = (e) => {
    setCity(e.target.value)
  }

  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleChangePhone = (e) => {
    setPhone(e.target.value)
  }

  const handleClick = () => {
    let obj = {
      firstname,
      lastname,
      city,
      email,
      phone
    }
    //console.log(obj)
    add(obj)
  }

  */

  const [user, setUser] = useState({})

  const handleChange = (e) => {
    //console.log(e.target.name, e.target.value)
    setUser({
          ...user, 
          [e.target.name] : e.target.value
        })
  } 

  const handleClick = () => {
    add(user)
  }


  return (
    <Form className='my-3'>
      <Row>
        <Col>
          <Form.Control name='firstname' placeholder="Firstname..." onChange={handleChange} />
        </Col>
        <Col>
          <Form.Control name='lastname' placeholder="Lastname..." onChange={handleChange} />
        </Col>
        <Col>
          <Form.Control name='city' placeholder="City..." onChange={handleChange} />
        </Col>
        <Col>
          <Form.Control name='email' placeholder="Email..." onChange={handleChange} />
        </Col>
        <Col>
          <Form.Control name='phone' placeholder="Phone..." onChange={handleChange} />
        </Col>
        <Col>
            <Button variant="dark" className='w-100' onClick={handleClick}>Add</Button>
        </Col>
      </Row>
    </Form>
  )
}
