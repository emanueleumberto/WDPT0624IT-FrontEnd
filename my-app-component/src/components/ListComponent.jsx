import React from 'react'
import { Button, ListGroup } from 'react-bootstrap';

export default function ListComponent({users, remove}) {

 

  return (
    <ListGroup variant="flush">
      {users.map((u,i) => <ListGroup.Item key={i}>
                              {u.firstname} {u.lastname} - {u.city} 
                              <span className='float-end'>
                                <Button 
                                    variant="outline-danger" 
                                    size="sm"
                                    onClick={() => remove(u)}>x</Button>
                              </span>
                          </ListGroup.Item>)}
    </ListGroup>
  )
}
