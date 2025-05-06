import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom';
import UsersTable from '../components/UsersTable';
import HeaderComponent from '../components/HeaderComponent';

export default function UsersPage() {

  let {token} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if(token !== undefined) {
      localStorage.setItem('userLogin', token)
          navigate('/users')
    }

    if(localStorage.getItem('userLogin') === null) {
      navigate('/login')
    }
  }, []) 
  

  return (
    <>
    <HeaderComponent />
    <Container className='my-5'>
        <h1 className='text-center'>Users Page</h1>
        <UsersTable />
    </Container>
    </>
  )
}
