import React from 'react'
import { useContext } from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { AuthContext, ThemeContext } from '../modules/context';

export default function ListComponent({users, removeUser}) {

  const [theme, setTheme] = useContext(ThemeContext);
  const [auth, setAuth] = useContext(AuthContext);

  return (
    <ListGroup variant={theme}>
      {users.map((u,i) => <ListGroup.Item key={i} variant={theme} >
          {u.firstname} {u.lastname}
          <span className='float-end'>
              <Button variant="outline-warning" size="sm" onClick={() => setAuth(u.firstname + " " + u.lastname)}>i</Button>
              <Button variant="outline-danger" size="sm" onClick={() => removeUser(u)}>x</Button>
          </span>
      </ListGroup.Item>)}
    </ListGroup>
  )
}
