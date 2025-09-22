import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes } from 'react-router-dom'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    
    <Footer></Footer>
    // aca van los componentes fijos 
    <Routes>
    {/* aca adentro se pone todo los componentes que se van a actualizar entre cambios */}
    </Routes>
    </BrowserRouter>
  )
}

export default App
