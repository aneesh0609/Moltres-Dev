import React from 'react'
import { Route , Routes } from 'react-router-dom'
import AdminDashboard from './pages/Home'


const App = () => {
  return (
   <Routes >
      <Route path='/' element={<AdminDashboard />}  />   
   </Routes>
  )
}

export default App