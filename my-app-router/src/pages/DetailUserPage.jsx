import React, { useEffect, useState } from 'react'
import { Container, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom'

export default function DetailUserPage() {

    const {id} = useParams();
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/'+ id)
            .then(response => response.json())
            .then(json => {
                setTimeout(() => {
                    setUser(json)
                    setIsLoading(false)
                }, 1000)
            })
    }, [])

  return (
    <Container>
        {isLoading && 
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>}
        {!isLoading && <h1>Hello {user.name}</h1>}
        
    </Container>
  )
}
