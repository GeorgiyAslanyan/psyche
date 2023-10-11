import React from "react";

const Navbar = () => {
  return (
    <div className="z-10 py-5 w-full bg-gradient-to-b from-black via-black to-[#0000001c] absolute flex justify-center top-0">
      <div className="flex gap-x-7 justify-between w-4/5 text-xs">
        <div className="flex gap-3">
            <img src="/nasa.svg" alt="logo" className="h-8" />
            <img src="/psyche.png" alt="logo" className="h-8" />
        </div>
        <div className="min-w-[120px] border-t border-white gap-20 flex">
           
          <a
            className="group flex relative pt-3"
            href="http://www.uniswap.org"
            target="_blank"
            rel="noopener noreferrer">
            <div className="absolute transition-all ease-linear duration-75 group-hover:h-[0.6rem] w-[5px] h-[5px] top-0 left-0 border-l border-white"></div>
            BUY/SELL {" "}<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
</svg>

          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
