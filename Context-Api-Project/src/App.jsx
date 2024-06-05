import React from 'react'
import Navbar from './components/Navbar'
import  Router  from './utils/Router'

function App() {
  return (
    <div className='bg-gray-800 text-white h-[100vh]'>

    <Navbar />

    <Router />

    </div>
  )
}

export default App