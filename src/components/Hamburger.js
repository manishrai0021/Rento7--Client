import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Hamburger = () => {
  const [hamOpen, setHamOpen] = useState(false);

  const handleClick = () => {
    setHamOpen(!hamOpen);
  };

  return (
    <div className='sm:hidden cursor-pointer' onClick={handleClick}>
      <div className='flex flex-col gap-1 items-center'>
        <div className={!hamOpen?'w-[20px] h-[3px] bg-white':'w-[20px] h-[3px] bg-white translate-y-[6px]  rotate-[40deg]'}></div>
        <div className={!hamOpen?'w-[20px] h-[3px] bg-white':''}></div>
        <div className={!hamOpen?'w-[20px] h-[3px] bg-white':'w-[20px] h-[3px] bg-white -translate-y-[5px] -rotate-[40deg]'}></div>
      </div>
      <div className={!hamOpen?'absolute -top-[60px] right-0 -z-10 transform duration-0':'bg-slate-200 absolute top-[6.7%] right-0 flex flex-col items-center text-[20px] font-semibold text-black px-4 py-4 transform duration-300'}>
        <Link to="/" className='hover:underline underline-offset-4'>Home</Link>
        <Link to="/service" className='hover:underline underline-offset-4'>Service</Link>
        <Link to="/about" className='hover:underline underline-offset-4'>About</Link>
        <Link to="/contactus" className='hover:underline underline-offset-4'>ContactUs</Link>
      </div>
    </div>
  )
}

export default Hamburger