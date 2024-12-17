import React from 'react'
import { Button } from '../button'

const Header = () => {
  return (
    <div className='w-full p-2 shadow-sm flex justify-between items-center px-5  '>
    <img src='/logo.svg' /> 
    <div>
        <Button>Sign In</Button>
    </div>
    </div>
  )
}

export default Header
