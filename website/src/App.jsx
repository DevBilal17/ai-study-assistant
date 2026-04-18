import React from 'react'
import { useTheme } from './hooks/useTheme';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import OTPVerify from './pages/OTPVerify';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/forgot-password" element={<ForgotPassword/>} />
        <Route path="/otp-verify" element={<OTPVerify/>} />
      </Routes>
    </>
  )
}

export default App
