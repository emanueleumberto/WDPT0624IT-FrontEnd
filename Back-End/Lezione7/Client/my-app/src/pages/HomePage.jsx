import React from 'react'
import { Container } from 'react-bootstrap'
import HeaderComponent from '../components/HeaderComponent'

export default function HomePage() {
  return (
    <>
    <HeaderComponent />
    <Container className='my-5'>
        <h1 className='text-center'>Home Page</h1>
    </Container>
    </>
  )
}
