import React from 'react'
import { Route , Routes } from 'react-router-dom'
import Home from './pages/Home'
import VerifyEmail from './pages/VerifyEmail'
import Login from './pages/Login'
import ResetPassword from './pages/ResetPassword'

function App() {
  return (
      <div>
        <Routes>
          <Route  path='/'  element={<Home />}  />
          <Route  path='/verify-email'  element={<VerifyEmail />}  />
          <Route  path='/reset-password'  element={<ResetPassword />}  />
          <Route  path='/login'  element={<Login />}  />
        </Routes>
      </div>
  )
}

export default App