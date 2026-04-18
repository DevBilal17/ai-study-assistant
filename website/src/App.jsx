import React from 'react'
import { useTheme } from './hooks/useTheme';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';

const App = () => {
  const {toggleTheme} = useTheme();
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/forgot-password" element={<ForgotPassword/>} />
      </Routes>
    </>
  )
}

export default App
