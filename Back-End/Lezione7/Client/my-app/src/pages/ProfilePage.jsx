import React from 'react'
import { Container } from 'react-bootstrap'
import CardProfile from '../components/CardProfile'
import HeaderComponent from '../components/HeaderComponent'

export default function Profile() {
  return (
    <>
      <HeaderComponent />
      <Container className="my-5 w-25" >
          <CardProfile />
      </Container>
    </>
  )
}
