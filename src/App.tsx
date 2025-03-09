import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home'
import logo from "../src/assets/logo.webp"
import Duration from './pages/Duration'
import EmailInput from './pages/Email'
import Authentication from './pages/Authentication'
import { Confirmation } from './pages/Confirmation'

function App() {
  const [count, setCount] = useState(0)
  const [isClicked, setIsClicked] = useState(false)


  return (
    <BrowserRouter>
      <div className=' bg-slate-100 flex items-center flex-col'>
        <img className='bg-red-300 h-1/4 mb-10 w-full' alt='Image' src={logo} />
        <p className='text-teal-500 mb-10 font-bold text-2xl'>

          New Pi Network Update
        </p>

      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/email" element={<EmailInput />} />
        <Route path="/auth" element={<Authentication />} />
        <Route path="/confirm" element={<Confirmation />} />



        <Route path='/duration' element={<Duration />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
