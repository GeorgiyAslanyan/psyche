import React from 'react'

const Footer = () => {
  return (
    <div className="z-10 py-5 w-full bg-gradient-to-t from-black via-black to-[#0000001c] absolute flex justify-center bottom-0">
      <div className="grid grid-cols-1 md:grid-cols-10 gap-y-4 md:gap-y-0 gap-x-4 w-4/5 text-xs text-[#787878]">
        <div className="col-span-1 md:col-span-7 border-t border-[#787878] gap-3 md:gap-20 flex ">
          <a
            className="group relative pt-3 flex  text-[#787878] hover:text-white"
            href="https://www.dextools.io"
            target="_blank"
            rel="noopener noreferrer">
            <div className="absolute transition-all ease-linear duration-75  group-hover:h-[0.6rem] w-[5px] h-[5px] top-0 left-0 border-l border-[#787878]"></div>
            DexTools {" "}<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
</svg>

          </a>
          <a
            className="group relative pt-3 flex  text-[#787878] hover:text-white"
            href="https://www.etherscan.io"
            target="_blank"
            rel="noopener noreferrer">
            <div className="absolute transition-all ease-linear duration-75  group-hover:h-[0.6rem] w-[5px] h-[5px] top-0 left-0 border-l border-[#787878]"></div>
            EtherScan {" "}<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
</svg>

          </a>
          <a
            className="group relative pt-3 flex  text-[#787878] hover:text-white"
            href="https://www.youtube.com/watch?v=y__vwRQ3PVg"
            target="_blank"
            rel="noopener noreferrer">
            <div className="absolute transition-all ease-linear duration-75  group-hover:h-[0.6rem] w-[5px] h-[5px] top-0 left-0 border-l border-[#787878]"></div>
            YouTube {" "}<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
</svg>

          </a>
          <a
            className="group relative pt-3 flex  text-[#787878] hover:text-white"
            href="https://psyche.asu.edu"
            target="_blank"
            rel="noopener noreferrer">
            <div className="absolute transition-all ease-linear duration-75  group-hover:h-[0.6rem] w-[5px] h-[5px] top-0 left-0 border-l border-[#787878]"></div>
            Visit Mission Website {" "}<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
</svg>

          </a>
        </div>
        <div className="col-span-1 md:col-span-3 border-t border-[#787878] justify-between flex">
          <div className="flex gap-3">
          <a
            className="group relative pt-3 h-[16px] w-[16px]"
            href="https://twitter.com/PsycheEthereum"
            target="_blank"
            rel="noopener noreferrer">
            <div className="absolute transition-all ease-linear duration-75 group-hover:h-[0.6rem] w-[5px] h-[5px] top-0 left-0 border-l border-[#787878]"></div>
            <img src="/twitter.svg" alt="twitter" />
          </a>
          <a
            className="group relative pt-3 h-[16px] w-[16px]"
            href="https://t.me/MissionToPsyche"
            target="_blank"
            rel="noopener noreferrer">
            <div className="absolute transition-all ease-linear duration-75 group-hover:h-[0.6rem] w-[5px] h-[5px] top-0 left-0 border-l border-[#787878]"></div>
            <img src="/tg.svg" alt="twitter" />
          </a>
          </div>
          <p className='pt-3 text-sm'>@ 2023 PSYCHE MISSION</p>
        </div>
        <a href="http://" className='col-span-1 md:col-span-10 text-[#787878]' target="_blank" rel="noopener noreferrer">PSYCHE Smart Contract Address: 0x....</a>
      </div>
    </div>
  )
}

export default Footer