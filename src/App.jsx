import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Conponents/Navbar/Navbar'
import NavbarRaw from './Conponents/NavbarRaw/NavbarRaw'
import PricingOptions from './Conponents/PricingOptions/PricingOptions'
import ResultsChart from './Conponents/ResultChart/ResultsChart'
import axios from 'axios';
import MarksChart from './Conponents/MarksChart/MarksChart'


const menuJson = async () => {
    const response = await fetch(`/menu.json`);

    return response.json();
}

const menuPromise = menuJson();


const MembershipsJson = async () => {
  const res = await fetch(`/memberships.json`);
  return res.json();
}

const membershipPromise = MembershipsJson();


// Marks promise 

const marksPromise = axios.get(`/marksData.json`);

function App() {
  

  return (
    <>
      
      <div className='max-w-screen-xl mx-auto font-roboto'>
      
        <div>
          {/* <Navbar></Navbar> */}
        <Suspense >
              <NavbarRaw menuPromise={menuPromise}></NavbarRaw>
          </Suspense>
        </div>

        <div className='text-center'>
          <Suspense fallback={<span className="loading loading-bars loading-xl text-center my-48" ></span>}>
            <PricingOptions membershipPromise={membershipPromise}></PricingOptions>
          </Suspense>
        </div>

        <div className='text-center flex items-center justify-center'>
          <ResultsChart></ResultsChart>
        </div>

        <div>
          <Suspense fallback={<span className="loading loading-bars loading-xl text-center my-48" ></span>}>
            <MarksChart marksPromise={marksPromise}></MarksChart>
          </Suspense>
        </div>
        

      </div>
      
     
     
      
    </>
  )
}

export default App
