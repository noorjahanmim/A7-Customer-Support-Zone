import React from 'react';
import Container from './Container';

const Navbar = () => {

  return (
    <div className='px-4 md:px-8 py-8 shadow-sm'>

      <Container>
        <nav className="flex justify-between items-center ">

        <h1 className="text-xl font-bold">CS — Ticket System</h1>
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

      </nav>
      </Container>

    </div>
  );
};

export default Navbar;