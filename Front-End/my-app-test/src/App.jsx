import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import NavbarComponent from './components/NavbarComponent'
import ErrorPage from './pages/ErrorPage'
import UsersPage from './pages/UsersPage'
import DetailUserPage from './pages/DetailUserPage'

function App() {

  return (
    <>
      <BrowserRouter>
             <NavbarComponent />
             <Routes>
               <Route index element={<HomePage />} /> {/* Soluzione equivalente */}
               <Route path='/' element={<HomePage />} /> {/* Soluzione equivalente */}
               <Route path='/home' element={<HomePage />} />
               <Route path='/about' element={<AboutPage />} />
               <Route path='/users' element={<UsersPage />} />
               <Route path='/users/:id' element={<DetailUserPage />} />
               <Route path='/contact' element={<ContactPage />} />
               <Route path='*' element={<ErrorPage />} />
             </Routes>
           </BrowserRouter>
    </>
  )
}

export default App
