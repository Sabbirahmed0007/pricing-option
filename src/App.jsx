import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Conponents/Navbar/Navbar'
import NavbarRaw from './Conponents/NavbarRaw/NavbarRaw'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <div className='max-w-screen-xl mx-auto font-roboto'>
      
        {/* <Navbar></Navbar> */}
        <NavbarRaw></NavbarRaw>

      </div>
      
     
     
      
    </>
  )
}

export default App
