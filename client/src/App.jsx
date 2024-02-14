import { useState } from 'react'
import Navbar from './components/Navbar/Navbar';
import Home from './views/Home/Home';
import About from './views/About/About';
import Login from './components/Login/Login';
import Detail from './views/Detail/Detail';
import Landing from './views/Landing/Landing';
import {Routes, Route, useLocation , useNavigate} from 'react-router-dom';
import axios from 'axios'

import './App.css'

function App() {
  const [access, setAccess] = useState(false)
  const location = useLocation();
  const navigate = useNavigate();



  async function login(userData) {
    const { email, password } = userData;
    const URL = 'http://localhost:3001/users/';
    try {
      const { data } = await axios(URL + `?email=${email}&password=${password}`);
      const { access } = data;
      setAccess(data);
      access && navigate('/home');
    } catch (error) {
      console.error(error);
      setAccess(false);
      throw new Error('Error en el login. Verifica tus credenciales.');
    }
  }
  


  return (
    <div className="App">
      
      {location.pathname !== '/' && <Navbar  />}
        <Routes>
        <Route path='/' element={<Landing />} />
          <Route path='/home' element={<Home  />} />
          <Route path='/about' element={<About/>} />
          <Route path='/login' element={<Login login = {login}/>} />
          <Route path='/detail/:id' element={<Detail/>} />
        </Routes>
      
    </div>
  )
}

export default App
