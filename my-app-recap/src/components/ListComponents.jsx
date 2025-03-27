import React from 'react'
import { ListGroup } from 'react-bootstrap'

export default function ListComponents({users}) {
  return (
    <ListGroup variant="flush">
      { users.map(e => <ListGroup.Item key={e.id}>{e.name}</ListGroup.Item>)}
    </ListGroup>
  )
}
