import React from 'react'
import { useTheme } from './hooks/useTheme';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';

const App = () => {
  const {toggleTheme} = useTheme();
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login/>} />
      </Routes>
    </>
  )
}

export default App
