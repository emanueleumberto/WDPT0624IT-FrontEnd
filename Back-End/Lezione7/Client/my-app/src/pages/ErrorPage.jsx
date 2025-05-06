import React from 'react'
import { Container } from 'react-bootstrap'
import HeaderComponent from '../components/HeaderComponent'

export default function ErrorPage() {
  return (
    <>
    <HeaderComponent />
    <Container className='my-5'>
        <h1 className='text-center'>Error Page</h1>
    </Container>
    </>
  )
}
