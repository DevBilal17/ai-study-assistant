import React from 'react'
import { useTheme } from './hooks/useTheme';

const App = () => {
  const {toggleTheme} = useTheme();
  return (
    <div className="text-5xl bg-background">
      App is running
    </div>
  )
}

export default App
