import { useState } from 'react'
import './App.css'
import FormComponent from './components/FormComponent'
import ListComponent from './components/ListComponent'
import NavbarComponent from './components/NavbarComponent'
import { Container } from 'react-bootstrap'
import data from  './users.json'
import { AuthContext, ThemeContext } from './modules/context'

function App() {

  /* let userlist = [
    {firstname: 'John', lastname: 'Smith', city: 'London', phone: '123', email: 'johnsmith@example.com'},
    {firstname: 'Maggie', lastname: 'Dhoe', city: 'Paris', phone: '456',  email: 'maggiedhoe@example.com'},
    {firstname: 'Mario', lastname: 'Rossi', city: 'Roma', phone: '',  email: 'mariorossi@example.com'},
    {firstname: 'Mario', lastname: 'Verdi', city: 'Milano', phone: '789',  email: 'marioverdi@example.com'},
  ] */

  const [users, setUsers] = useState(data);
  //const [theme, setTheme] = useState('light'); // light | dark -> Metodo senza context

  // Metodo con context
  const [themes, setThemes] = useState('light');
  const [authUser, setAuthUser] = useState('');

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
    <ThemeContext.Provider value={[themes, setThemes]}>
      <AuthContext.Provider value={[authUser, setAuthUser]}>
        {/* <NavbarComponent theme={theme} setThemes={setTheme} /> //  -> Metodo senza context */}
        <NavbarComponent />
        <Container>
          <FormComponent addUser={addUser} />
          <ListComponent users={users} removeUser={removeUser} />
        </Container>
      </AuthContext.Provider>
    </ThemeContext.Provider>
    </>
  )
}

export default App
