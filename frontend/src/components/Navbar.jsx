import React from 'react';
import  codexClubLogo from "../assets/icons/codex-club.gif"
import uuLogo from "../assets/icons/uuFull.jpeg"
// coding club logo at the left
// BYTE at the center
// it utsav 2024 at the right
// 
const Navbar = () => {
  return (
    <div className="container m-auto ">
      <div className='rounded-xl p-6  mt-1 mb-4 shadow-xl flex justify-between items-center bg-zinc-600 '>
        <img className='h-20' src={codexClubLogo} alt="codex-club-logo" />
        <h1 className='font-' >BYTE 1.0</h1>
        <img className='h-20' src={uuLogo} alt="USCS IT_UTSAV-2024" />
      </div>
      
    </div>
  );
};

export default Navbar;
