import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import UsersPage from './pages/UsersPage';
import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';
import HeaderComponent from './components/HeaderComponent';
import Profile from './pages/ProfilePage';

function App() {

  return (
    <>
      <BrowserRouter>
        {/* <HeaderComponent /> */}
        <Routes>
          <Route index element={<HomePage />} />
          <Route path='/users' element={<UsersPage />} />
          <Route path='/users/:token' element={<UsersPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/profile' element= {<Profile />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
