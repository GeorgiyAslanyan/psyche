'use client'
import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
    const deadline = new Date('2023-10-12T19:16:50').getTime();
    const [timeRemaining, setTimeRemaining] = useState(deadline - new Date().getTime());
    

    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
  
    const calculateTimeRemaining = () => {
      const currentTime = new Date().getTime();
      const remaining = deadline - currentTime;
  
      if (remaining > 0) {
        const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((remaining % (1000 * 60)) / 1000);
  
        setTimeRemaining(remaining);
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    };
  
    useEffect(() => {
      calculateTimeRemaining();
  
      const timer = setInterval(() => {
        calculateTimeRemaining();
      }, 1000);
  
      return () => {
        clearInterval(timer);
      };
    }, []);
  return (
    <div>
      <div className='grid justify-items-center items-center grid-cols-7 gap-y-1 md:gap-y-2'>
        <div className="text-2xl md:text-4xl">{days}</div>
        <p className='text-[#787878]'>/</p>
        <div className="text-2xl md:text-4xl">{hours}</div>
        <p className='text-[#787878]'>/</p>
        <div className="text-2xl md:text-4xl">{minutes}</div>
        <p className='text-[#787878]'>/</p>
        <div className="text-2xl md:text-4xl">{seconds}</div>
        <div className="text-xs md:text-sm">DAYS</div>
        <div></div>
        <div className="text-xs md:text-sm">HOURS</div>
        <div></div>
        <div className="text-xs md:text-sm">MINS</div>
        <div></div>
        <div className="text-xs md:text-sm">SECS</div>
      </div>
    </div>
  );
};

export default CountdownTimer;