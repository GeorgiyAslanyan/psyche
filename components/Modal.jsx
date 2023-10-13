import React from "react";

const Modal = ({ setOpen }) => {
  return (
    <div
      onClick={() => setOpen(false)}
      className="absolute top-0 left-0 justify-center items-center flex text-center w-screen h-screen z-[110] ">
      <div className="absolute bg-black backdrop-blur-xl bg-opacity-70 w-full h-full z-[60] flex pointer-events-none"></div>
      <div className="flex flex-col gap-5 z-[70]  font-extralight tracking-[2px]">
        <p>Psychenomiсs:</p>
        <p className="text-start">
          Name: PSYCHE MISSION <br />
          Ticker: PSYCHE <br />
          Total Supply: 420,690,000 <br />
          Circulation: 100% (Uniswap V2) <br />
          Tax: 1/1 <br />
          Liquidity Locked
        </p>
        <p>✨ 100% FAIR Launch ✨</p>
      </div>
    </div>
  );
};

export default Modal;
