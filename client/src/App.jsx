import { useState } from 'react'
import Navbar from './components/Navbar/Navbar';
import Home from './views/Home/Home';
import About from './views/About/About';
import Detail from './views/Detail/Detail';
import Landing from './views/Landing/Landing';
import Create from './components/Create/Create';
import {Routes, Route, useLocation , useNavigate} from 'react-router-dom';
import axios from 'axios'


function App() {
  const [access, setAccess] = useState(false)
  const location = useLocation();
  const navigate = useNavigate();



  


  return (
    <div className="App">
      
      {location.pathname !== '/' && <Navbar  />}
        <Routes>
        <Route path='/' element={<Landing />} />
          <Route path='/home' element={<Home  />} />
          <Route path='/about' element={<About/>} />
          <Route path='/detail/:id' element={<Detail/>} />
          <Route path='/create' element={<Create/>} />
        </Routes>
      
    </div>
  )
}

export default App
