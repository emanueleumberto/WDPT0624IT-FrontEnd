import { Container } from 'react-bootstrap'
import './App.css'
import NavbarComponents from './components/NavbarComponents'
import SearchComponents from './components/SearchComponents'
import ListComponents from './components/ListComponents'
import { useEffect, useState } from 'react'

function App() {

  const [data, setData]  = useState([]);
  const [searchStr, setSearchStr] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(err => console.log(err))
  }, [])

  useEffect(() => {
    //console.log("UseEffect per il filtro")
    let arr = data.filter(e => e.name === searchStr)
    setData(arr)
  }, [searchStr])

  const searchData = (str) => {
    console.log("Sono in app " + str)
    setSearchStr(str)
  }
  
  return (
    <>
      <NavbarComponents />
      <Container>
        <SearchComponents search={searchData} />
        <ListComponents users={data} />
      </Container>
    </>
  )
}

export default App
