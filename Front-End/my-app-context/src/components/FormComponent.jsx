import { useContext } from 'react';
import { useState } from 'react';
import {Col, Form, Row, Button} from 'react-bootstrap';
import { ThemeContext } from '../modules/context';

export default function FormComponent({addUser}) {

  const [user, setUser] = useState({});
  const [theme, setTheme] = useContext(ThemeContext);

  const handleChange = (e) => {
    //console.log(e.target.name, e.target.value)
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = () => {
    //console.log(user)
    addUser(user)
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
          <Form.Control name='city' placeholder="City..." onChange={handleChange}  />
        </Col>
        <Col>
          <Form.Control name='email' placeholder="Email..." onChange={handleChange} />
        </Col>
        <Col>
          <Form.Control name='phone' placeholder="Phone..." onChange={handleChange}  />
        </Col>
        <Col>
            <Button variant={theme} className='w-100' onClick={handleSubmit}>Add</Button>
        </Col>
      </Row>
    </Form>
  )
}
