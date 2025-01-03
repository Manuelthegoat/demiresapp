import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Menu from './Pages/Menu'
import Wine from './Pages/Wine'
import Contact from './Pages/Contact'
import Notfound from './Components/Notfound'
import Cart from './Pages/Cart'
import Admin from './Pages/Admin'
import Login from './Pages/Login'

const Routing = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='*' element={<Notfound />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/wine' element={<Wine />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/admin' element={<Admin />} />
            <Route path='/login' element={<Login />} />
        </Routes>
    </>
  )
}

export default Routing