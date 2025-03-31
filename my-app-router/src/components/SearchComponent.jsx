import React from 'react'
import { Form } from 'react-bootstrap'

export default function SearchComponent({filteredUser}) {

  return (
    <Form.Control 
        type='search' 
        placeholder='Search User' 
        className='my-3'
        onChange={(e) => filteredUser(e.target.value)}  />
  )
}
