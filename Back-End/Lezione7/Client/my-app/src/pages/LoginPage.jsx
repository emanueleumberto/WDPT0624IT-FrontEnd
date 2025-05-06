import React from 'react'
import FormLoginComponent from '../components/FormLoginComponent'
import { Container } from 'react-bootstrap'
import HeaderComponent from '../components/HeaderComponent'

export default function LoginPage() {
  return (
    <>
      <HeaderComponent />
      <Container className='my-5 w-50'>
        <h1 className='text-center'>Login Page</h1>
        <FormLoginComponent />
      </Container>
    </>
  )
}
