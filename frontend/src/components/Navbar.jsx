import React from 'react';
import  codexClubLogo from "../assets/icons/codex-club.gif"
import uuLogo from "../assets/icons/uuFull.jpeg"
// coding club logo at the left
// BYTE at the center
// it utsav 2024 at the right
// 
const Navbar = () => {
  return (
    <div className="container mx-auto ">
      <div className='rounded-xl py-2 px-4  mt-1 mb-4  flex justify-between items-center bg-zinc-950 shadow-lg shadow-cyan-300 '>
        <img className='size-30' src={codexClubLogo} alt="codex-club-logo" />
        <h1 className='text-[48px] font-secondary font-medium '>BYTE 1.0</h1>
        <img className='h-20 hidden md:block rounded-2xl' src={uuLogo} alt="USCS IT_UTSAV-2024" />
      </div>
      
    </div>
  );
};

export default Navbar;
