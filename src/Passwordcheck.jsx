import React from 'react'
import Passwordcard from './components/PasswordCard'
function Passwordcheck() {
  return (
    //hero section
    <div>
      <h1 className='text-white text-5xl font-semibold text-center mt-15'>How secure is my password?</h1>
      <Passwordcard/>
      <h2 className='text-pink-700 font-semibold text-center mt-7'>We do not collect or store the passwords entered in the field.</h2>
    </div>
  )
}

export default Passwordcheck