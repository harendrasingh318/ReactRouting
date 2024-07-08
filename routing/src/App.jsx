import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Dashboard } from './components/Dashboard'
import { Landingpage } from './components/Landingpage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path= "dashboard" element = {<Dashboard/>} />
        <Route path ="/" element ={<Landingpage/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App
