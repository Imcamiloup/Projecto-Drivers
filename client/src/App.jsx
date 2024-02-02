import { useState } from 'react'
import Navbar from './components/Navbar/Navbar';
import Cards from './components/Cards/Cards';
import About from './components/About/About';
import Form from './components/Form/Form';
import Detail from './components/Detail/Detail';
import {Routes, Route} from 'react-router-dom';
import axios from 'axios'

import './App.css'

function App() {
  const [drivers, setDrivers] = useState([])

  const onSearch = () => {
    console.log(axios(`http://localhost:3001/drivers`))
    axios (`http://localhost:3001/drivers`)
    .then(data => {
      setDrivers([ ...drivers, data ])
    }
      )
  }
  

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Cards drivers={drivers} onSearch ={onSearch}/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/form' element={<Form/>} />
        <Route path='/detail/:id' element={<Detail/>} />
      </Routes> 
    </div>
  )
}

export default App
