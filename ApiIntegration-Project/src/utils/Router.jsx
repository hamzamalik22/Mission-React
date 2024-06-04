import React from 'react'
import { Routes, Route } from 'react-router-dom'
import About from '../components/About'
import Home from '../components/Home'
import Shop from '../components/Shop'


function Router() {
  return (
    <>

    <Routes>

    <Route path='/' element={< Home/>} />
    <Route path='/shop' element={< Shop/>} />
    <Route path='/about' element={< About/>} />


    </Routes>

    
    </>
  )
}

export default Router