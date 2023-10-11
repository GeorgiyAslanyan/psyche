import React from 'react'

const Footer = () => {
  return (
    <div className="z-10 py-5 w-full bg-gradient-to-t from-black via-black to-[#0000001c] absolute flex justify-center bottom-0">
      <div className="grid grid-cols-1 md:grid-cols-10 gap-y-4 md:gap-y-0 gap-x-4 w-4/5 text-xs text-[#787878]">
        <div className="col-span-1 md:col-span-7 border-t border-[#787878] gap-3 md:gap-20 flex ">
          <a
            className="group relative pt-2"
            href="http://"
            target="_blank"
            rel="noopener noreferrer">
            <div className="absolute transition-all ease-linear duration-75 group-hover:text-white group-hover:h-3 w-[6px] h-[6px] top-0 left-0 border-l border-[#787878]"></div>
            ABOUT 🡥
          </a>
          <a
            className="group relative pt-2"
            href="http://"
            target="_blank"
            rel="noopener noreferrer">
            <div className="absolute transition-all ease-linear duration-75 group-hover:text-white group-hover:h-3 w-[6px] h-[6px] top-0 left-0 border-l border-[#787878]"></div>
            ABOUT 🡥
          </a>
          <a
            className="group relative pt-2"
            href="http://"
            target="_blank"
            rel="noopener noreferrer">
            <div className="absolute transition-all ease-linear duration-75 group-hover:text-white group-hover:h-3 w-[6px] h-[6px] top-0 left-0 border-l border-[#787878]"></div>
            ABOUT 🡥
          </a>
          <a
            className="group relative pt-2"
            href="http://"
            target="_blank"
            rel="noopener noreferrer">
            <div className="absolute transition-all ease-linear duration-75 group-hover:text-white group-hover:h-3 w-[6px] h-[6px] top-0 left-0 border-l border-[#787878]"></div>
            ABOUT 🡥
          </a>
        </div>
        <div className="col-span-1 md:col-span-3 border-t border-[#787878] justify-between flex">
          <div className="flex gap-3">
          <a
            className="group relative pt-2 h-[16px] w-[16px]"
            href="http://"
            target="_blank"
            rel="noopener noreferrer">
            <div className="absolute transition-all ease-linear duration-75 group-hover:h-3 w-[6px] h-[6px] top-0 left-0 border-l border-[#787878]"></div>
            <img src="/twitter.svg" alt="twitter" />
          </a>
          <a
            className="group relative pt-2 h-[16px] w-[16px]"
            href="http://"
            target="_blank"
            rel="noopener noreferrer">
            <div className="absolute transition-all ease-linear duration-75 group-hover:h-3 w-[6px] h-[6px] top-0 left-0 border-l border-[#787878]"></div>
            <img src="/tg.svg" alt="twitter" />
          </a>
          </div>
          <p className='pt-2 text-sm'>© 2023 APE FOUNDATION</p>
        </div>
        <a href="http://" className='col-span-1 md:col-span-10 text-[#787878]' target="_blank" rel="noopener noreferrer">ApeCoin Smart Contract Address: 0x4d224452801aced8b2f0aebe155379bb5d594381</a>
      </div>
    </div>
  )
}

export default Footer