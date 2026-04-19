import { Card, TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import { BiShow } from 'react-icons/bi'
import { GrHide } from 'react-icons/gr';

function PasswordCard() {
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);
  return (
    <Card href="#" className="max-w-xl mx-auto mt-10 rounded-3xl">
      <h5 className="text-xl tracking-tight text-gray-900 dark:text-white">
        Take a moment to check if your passwords are easy pickings for bad actors
      </h5>
      <span className='bg-gray-200 rounded-xl'>
        <input type={show?"text":"password"} name="" id="" placeholder='Enter a password' className='p-3 rounded-xl w-120 outline-none'/>
        <span>
          <button className="cursor-pointer p-3 rounded" onClick={handleToggle}>{show?<GrHide />:<BiShow/>}</button>
        </span>
      </span>
    </Card>
  )
}

export default PasswordCard