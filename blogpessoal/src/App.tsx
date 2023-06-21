import React from 'react'
import './App.css'
import Navbar from './pages/components/static/navbar/Navbar'
import Footer from './pages/components/static/footer/Footer'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import CadastroUsuario from './pages/cadastroUsuario/CadastroUsuario'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ListaTema from './pages/components/temas/listatemas/ListaTema'
import ListaPostagem from './pages/components/postagem/listapostagens/ListaPostagem'

function App() {

  return (
    <BrowserRouter>
      { <Navbar /> }
      <div style={{ minHeight: '70vh' }}>
        <Routes> // Antigo Switch
          <Route path="/" element={<Login />} /> 
          <Route path="/login" element={<Login />} /> 
          <Route path="/home" element={<Home />} />
          <Route path="/cadastrousuario" element={<CadastroUsuario />} /> 
          <Route path="/temas" element={<ListaTema />} />
          <Route path="/posts" element={<ListaPostagem />} />

        </Routes>
      </div>
      { <Footer /> }
    </BrowserRouter>
  )
} export default App