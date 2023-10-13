'use client'
import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Timer from './Timer'
import Modal from './Modal'

const Layout = () => {
  const [open, setOpen] = React.useState(false)

  return (
    <div className='w-full h-screen bg-black text-white'>
        <Navbar setOpen={setOpen}/>
        <div className='absolute z-10 top-[10%] md:top-[15%] left-3 pr-3 sm:pr-0 sm:left-8 font-light tracking-[1px]'>
            <p className="text-xl md:text-3xl text-center pb-1">Countdown to launch</p>
            <Timer />
            <p className="text-center md:text-[x-large] 2xl:text-2xl mt-4 md:mt-10 text-white">Asteroid Psyche is rumored to contain <br className='hidden md:block'/> <span className=' text-[#AEFEFF]'>unlimited amounts of Ethereum</span> <br className='hidden md:block'/> in addition to metal</p>
        </div>
        <video autoPlay loop muted playsInline className='bg-[url("/preloader.webp")] bg-center bg-cover w-full object-cover absolute z-0 h-screen hidden md:flex'>
            <source src="/background.mp4" type="video/mp4" />
        </video>
        <video autoPlay loop playsInline muted className='w-full object-cover absolute z-0 h-screen flex md:hidden'>
        <source src="/mobile.mp4" type="video/mp4" />
        <source src="/mobile.webm" type="video/webm" />
        </video>
        <Footer />
        
      {open && <Modal setOpen={setOpen}/>}
    </div>
  )
}

export default Layout