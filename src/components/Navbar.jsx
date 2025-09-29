import React from 'react';
import Container from './Container';

const Navbar = () => {

  return (
    <div className='shadow-sm p-4'>

      <Container>
        <nav className="flex justify-between items-center  md:p-0 navbar">

        <h1 className=" text-base sm:text-xl md:text-2xl font-bold">CS — Ticket System</h1>
        <ul className=" hidden md:flex gap-6 items-center">
          <li><a>Home</a></li>
          <li><a>FAQ</a></li>
          <li><a>Changelog</a></li>
          <li><a>Blog</a></li>
          <li><a>Download</a></li>
          <li><a>Contact</a></li>
          <button className="bg-gradient-to-br from-[#422AD5] to-purple-400 text-white px-4 py-2 rounded font-bold">
            + New Ticket
          </button>
        </ul>

        <div className='md:hidden flex items-center gap-2'>
          <button className="bg-gradient-to-br from-[#422AD5] to-purple-400 text-white px-2 py-1 rounded font-bold text-xs">
            + New Ticket
          </button>
        </div>
        

      </nav>
      </Container>

    </div>
  );
};

export default Navbar;