import React, { useEffect, useState } from 'react'
import { Button, ListGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import SearchComponent from './SearchComponent';

export default function UserListComponent() {

    const [users, setUsers] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();


    useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => setUsers(json))
    }, [])
    
    const userDetail = (id) => {
        //alert("Detail " + id)
        navigate('/users/'+id)
    }

    const filteredUser = (data) => {
        setSearchQuery(data.toLowerCase())
    }


  return (
    <>    
    <SearchComponent filteredUser={filteredUser} />
    <ListGroup variant="flush">
        {users
        .filter(u => u.name.toLowerCase().includes(searchQuery))
        .map(u => <ListGroup.Item key={u.id} data-testid="user-element">{u.name}  
                            <Button 
                                variant="dark" 
                                className="float-end"
                                onClick={() => userDetail(u.id)}>info</Button>
                        </ListGroup.Item>)}
    </ListGroup>
    </>

  )
}
