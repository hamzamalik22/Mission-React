import React from 'react'

function Navbar() {
  return (
    <div className='w-full h-12 bg-[#5F4B8BFF] text-[#E69A8DFF] px-4 flex justify-between items-center'>
        <h1 className='text-3xl font-semibold tracking-tight'>Todo App</h1>
        <ul className='flex gap-10'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </div>
  )
}

export default Navbar