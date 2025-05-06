import React from 'react'
import FormRegisterComponent from '../components/FormRegisterComponent'
import { Container } from 'react-bootstrap'
import HeaderComponent from '../components/HeaderComponent'

export default function RegisterPage() {
  return (
    <>
      <HeaderComponent />
      <Container className='my-5 w-50'>
        <h1 className='text-center'>Register Page</h1>
        <FormRegisterComponent />
      </Container>
    </>
  )
}
