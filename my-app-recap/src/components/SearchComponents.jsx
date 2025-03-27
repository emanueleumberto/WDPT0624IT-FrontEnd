import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'

export default function SearchComponents({search}) {

  const [input, setInput] = useState('');

  const handleChange = (ev) => {
    //console.log(ev.target.value)
    setInput(ev.target.value)
  }

  const handleClick = (ev) => {
    //console.log(input)
    search(input)
  }

  return (
    <Form className='my-3'>
      <Row>
        <Col xs={9}>
          <Form.Control placeholder="First name" onChange={handleChange} />
        </Col>
        <Col>
            <Button variant="dark" className='w-100' onClick={handleClick}>Dark</Button>
        </Col>
      </Row>
    </Form>
  )
}
