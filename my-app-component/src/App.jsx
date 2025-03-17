import { Container } from 'react-bootstrap'
import './App.css'
import FormComponent from './components/FormComponent'
import ListComponent from './components/ListComponent'
import NavbarComponent from './components/NavbarComponent'
import { useState } from 'react'

let userlist = [
  {firstname: 'John', lastname: 'Smith', city: 'London', phone: '123', email: 'johnsmith@example.com'},
  {firstname: 'Maggie', lastname: 'Dhoe', city: 'Paris', phone: '456',  email: 'maggiedhoe@example.com'},
  {firstname: 'Mario', lastname: 'Rossi', city: 'Roma', phone: '',  email: 'mariorossi@example.com'},
  {firstname: 'Mario', lastname: 'Verdi', city: 'Milano', phone: '789',  email: 'marioverdi@example.com'},
]

function App() {

  const [users, setUsers] = useState(userlist)

  const removeUser = (obj) => {
    //console.log(obj)
    let arr = users.filter(u => u.email !== obj.email)
    setUsers(arr)
  }

  const addUser = (obj) => {
    //console.log(obj)
    setUsers([...users, obj])
  }

  return (
    <>
      <NavbarComponent />
      <Container className='my-3'>
        <FormComponent add={addUser} />
        <ListComponent users={users} remove={removeUser} />
      </Container>
    </>
  )
}

export default App
