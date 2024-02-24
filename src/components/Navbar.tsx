import React from 'react'
import { Link } from 'react-router-dom'
import Typography from './Typography'
import Button from './Button'

const Navbar = () => {
  return (
    <div className='flex justify-between w-full'>
        <div></div>
        <div className='ml-32'>
        <Typography  title="L2E CRUD" />
        </div>
    
    <Link to="/createpost">
      <Button text="Create Post"  />
        
    </Link>
    </div>
  )
}

export default Navbar