import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Timer from './Timer'

const Layout = () => {
  return (
    <div className='w-full h-screen'>
        <Navbar />
        <div className='absolute z-10 top-[10%] md:top-[15%] left-3 pr-3 sm:pr-0 sm:left-8'>
            <p className="text-xl md:text-3xl text-center pb-1">Countdown to launch</p>
            <Timer />
            <p className="text-center 2xl:text-2xl mt-4 md:mt-10 text-white">Psyche is supposed to have <br className='hidden md:block'/> limited depoist of Etherium <br className='hidden md:block'/>in addition to metal</p>
        </div>
        <video autoPlay loop muted className='w-full object-cover absolute z-0 h-screen hidden md:flex'>
            <source src="/fhd.mp4" type="video/mp4" />
        </video>
        <video autoPlay loop muted className='w-full object-cover absolute z-0 h-screen flex md:hidden'>
        <source src="/mobile.mp4" type="video/mp4" />
        </video>
        <Footer />
    </div>
  )
}

export default Layout