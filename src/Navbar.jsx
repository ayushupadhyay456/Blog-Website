import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <nav>
            <ul className='flex justify-center gap-4 text-bg bg-black text-white h-15 py-5   '>
                <li className='hover:text-gray-500 duration-100'><Link to="/">Home</Link></li>
                <li className='hover:text-gray-500 duration-100'><Link to="/About">About</Link></li>
                <li className='hover:text-gray-500 duration-100'><Link to="articles">Articles</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar