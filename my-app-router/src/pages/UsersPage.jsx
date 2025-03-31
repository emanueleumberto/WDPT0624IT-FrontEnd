import React from 'react'
import { Container } from 'react-bootstrap'
import UserListComponent from '../components/UserListComponent'
import SearchComponent from '../components/SearchComponent'

export default function UsersPage() {
  return (
    <Container>
        <h1>Users Page</h1>
        <UserListComponent />
    </Container>
  )
}
