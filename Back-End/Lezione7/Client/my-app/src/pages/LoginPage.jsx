import React from 'react'
import HeaderComponent from '../components/HeaderComponent'
import FormLoginComponent from '../components/FormLoginComponent'

export default function LoginPage() {
  return (
    <>
        <HeaderComponent />
        <Container>
            <FormLoginComponent />
        </Container>
    </>
  )
}
