import React, { useEffect, useState } from 'react'
import { Container, Form, ListGroup, Spinner, Alert } from 'react-bootstrap'

export default function UserListFunc() {

    const url = "https://jsonplaceholder.typicode.com/users/";
    const urlPosts = "https://jsonplaceholder.typicode.com/posts/";
    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);
    const [comments, setComments] = useState([]);
    const [userSelected, setUserSelected] = useState(0);
    const [postSelected, setPostSelected] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        // logica da eseguire al montaggio del componente
        // logica da eseguire ad ogni modifica dello stato del componente
        return () => {
            // logica da eseguire subito prima dell smontaggio del componente
        }
    }, [users]) // Dipendenza da ascoltare per eseguire lo useEffect come un componentDidUpdate

    useEffect(() => {
        console.log("useEffect")
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setTimeout(() => {
                    setUsers(data)
                    setLoading(false)
                }, 2000) // Simulo un ritardo dato da una connessione lenta
            })
            .catch(error => {
                setError("Caricamento errato... ")
            })
    }, [])

    useEffect(() => {
        console.log("useEffect")
        // https://jsonplaceholder.typicode.com/users/ + userSelected + /posts
        fetch(url+userSelected+"/posts")
            .then(response => response.json())
            .then(data => setPosts(data))
            .catch(error => console.log(error))
    }, [userSelected])

    useEffect(() => {
        console.log("useEffect")
        // https://jsonplaceholder.typicode.com/posts/ + postSelected + /comments
        fetch(urlPosts+postSelected+"/comments")
            .then(response => response.json())
            .then(data => setComments(data))
            .catch(error => {
                setError("Caricamento errato... ")
            })
    }, [postSelected])

    const handleChangeUser = (e) => {
        //console.log(e.target.value)
        setUserSelected(e.target.value)
        setPostSelected(0)
    }

    const handleChangePost = (e) => {
        //console.log(e.target.value)
        setPostSelected(e.target.value)
    }

    return (
        <>
        <Container>
            {loading && <Spinner animation="grow" />}
            {error && <Alert key='danger' variant='danger'> {error} </Alert>}
            {/* <ListGroup variant="flush">
                {users.map((u,i) => <ListGroup.Item key={i}>{u.name} - {u.email}</ListGroup.Item>)}
            </ListGroup> */}
            <Form.Select aria-label="Default select example" onChange={handleChangeUser}>
                <option>Open this select menu</option>
                {users.map((u,i) => <option value={u.id} key={i} >{u.name} - {u.email}</option>)}
            </Form.Select>
            <Form.Select aria-label="Default select example" onChange={handleChangePost}>
                <option>Open this select menu</option>
                {posts.map((p,i) => <option value={p.id} key={i} >{p.title}</option>)}
            </Form.Select>
            <ListGroup variant="flush">
                {comments.map((c,i) => <ListGroup.Item key={i}>{c.name} - {c.email}</ListGroup.Item>)}
            </ListGroup>
        </Container>
        </>
    )
}