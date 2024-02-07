import { useState , useEffect} from 'react'
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Form from './components/Form/Form';
import Detail from './components/Detail/Detail';
import Landing from './components/Landing/Landing';
import {Routes, Route, useLocation , useNavigate} from 'react-router-dom';
import axios from 'axios'

import './App.css'

function App() {
  const [drivers, setDrivers] = useState([])
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
  

  useEffect(() => {
    if (!access) navigate('/');
    else navigate('/home');
  }
  , 
  [access, navigate]);

  
 




  const onSearch = () => {
    axios (`http://localhost:3001/drivers`)
    .then(res => res.data)
    .then(data => {
      setDrivers([ ...drivers, data ])
    }
      )
  }
  

  return (
    <div className="App">
      
      {location.pathname !== '/' && <Navbar onSearch={onSearch} />}
        <Routes>
        <Route path='/' element={<Landing login = {login}  drivers={drivers} onSearch ={onSearch}/>} />
          <Route path='/home' element={<Home drivers={drivers} onSearch ={onSearch}/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/form' element={<Form login = {login}/>} />
          <Route path='/detail/:id' element={<Detail onSearch ={onSearch} drivers={drivers}/>} />
        </Routes>
      
    </div>
  )
}

export default App
