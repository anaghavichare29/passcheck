import { Card, TextInput } from 'flowbite-react'
import React from 'react'
import { BiShow } from 'react-icons/bi'

function PasswordCard() {
  return (
    <Card href="#" className="max-w-xl mx-auto mt-10 rounded-3xl">
      <h5 className="text-xl tracking-tight text-gray-900 dark:text-white">
        Take a moment to check if your passwords are easy pickings for bad actors
      </h5>
      <span className='bg-gray-200 rounded-xl'>
        <input type="password" name="" id="" placeholder='Enter a password' className='p-2 rounded-xl w-120 outline-none'/>
        <span>
          <button className='cursor-pointer p-3 rounded'><BiShow/></button>
        </span>
      </span>
    </Card>
  )
}

export default PasswordCard