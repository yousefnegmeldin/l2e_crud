import React from 'react'
import { Link } from 'react-router-dom'
import Typography from './Typography'

const Navbar = () => {
  return (
    <div className='flex justify-between w-full'>
        <div></div>
        <div className='ml-32'>
        <Typography  title="L2E CRUD" />
        </div>
    
    <Link to="/createpost">
        <button className='bg-blue-800 text-white shadow-2xl rounded-2xl h-12 w-32'>Create Post</button>
    </Link>
    </div>
  )
}

export default Navbar