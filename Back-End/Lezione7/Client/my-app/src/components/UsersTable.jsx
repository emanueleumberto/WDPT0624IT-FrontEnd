import React, { useEffect, useState } from 'react'
import { Image, Table } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function UsersTable() {

    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        let token = localStorage.getItem("userLogin");
        if(!token) {
            navigate("/login");
        } else {
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
            axios.get('http://localhost:3001/users', {}).then(response => setUsers(response.data))
        }
    }, [])

  return (
    <>
        <Table striped bordered hover variant="dark" className="mt-5">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Image</th>
                    <th>Fullname</th>
                    <th>Username</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {users.map((u,i) => (
                <tr key={u._id}>
                    <td>{i+1}</td>
                    <td><Image src={u.img ? u.img : 'https://st4.depositphotos.com/4329009/19956/v/450/depositphotos_199564354-stock-illustration-creative-vector-illustration-default-avatar.jpg'} thumbnail className='w-25 h-25' /></td>
                    <td>{u.fullname}</td>
                    <td>{u.username}</td>
                    <td>{u.email}</td>
                </tr>
                ))}
            </tbody>
        </Table>
    </>
  )
}
