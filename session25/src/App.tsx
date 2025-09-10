

import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'

function App() {


  return (
    <>
      <Routes>  
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </>
  )
}

export default App
