import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Passwordcheck from '../Passwordcheck'
function AppRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Navigate to="/secure-password" />} />
      <Route path='/secure-password' element={<Passwordcheck/>}/>      
    </Routes>  
  )
}

export default AppRoutes
