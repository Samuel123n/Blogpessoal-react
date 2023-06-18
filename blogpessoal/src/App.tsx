import React from 'react'
import './App.css'
import Navbar from './pages/Components/static/navbar/Navbar'
import Footer from './pages/Components/static/footer/Footer'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      { <Navbar /> }
      <div style={{ minHeight: '70vh' }}>
        <Routes> // Antigo Switch
          <Route path="/" element={<Login />} /> 
          <Route path="/login" element={<Login />} /> 
          <Route path="/home" element={<Home />} />
          {/* <Route path="/cadastro" element={<CadastroUsuario />} /> */}
        </Routes>
      </div>
      { <Footer /> }
    </BrowserRouter>
  )
} export default App
