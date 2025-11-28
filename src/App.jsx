import { useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Myportfolio from './components/Myportfolio'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='main_root text-white min-h-screen font-sans'>
        <Myportfolio />
      </div>

    </>
  )
}

export default App
