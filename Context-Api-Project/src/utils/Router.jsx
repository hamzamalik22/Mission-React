import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import Services from '../components/Services'
import About from '../components/About'
import { UserDetails } from '../components/UserDetails'

function Router() {
  return (
    <>
        <Routes>

        <Route path='/' element={<Home/> } />
        <Route path='/services' element={<Services/> } />
        <Route path='/services/:id' element={<UserDetails/> } />
        <Route path='/about' element={<About/> } />



        </Routes>


    </>
  )
}

export default Router