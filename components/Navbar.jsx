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
            className="group relative pt-2"
            href="http://"
            target="_blank"
            rel="noopener noreferrer">
            <div className="absolute transition-all ease-linear duration-75 group-hover:h-3 w-[6px] h-[6px] top-0 left-0 border-l border-white"></div>
            BUY/SELL 🡥
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
