import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import Pizzalist from './Pizzalist'
import Footer from './Footer'


export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Pizzalist/>
      <Footer/>
    </>
  )
}

