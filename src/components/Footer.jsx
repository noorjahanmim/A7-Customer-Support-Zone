import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Container from './Container';

const Footer = () => {
  return (
    <div className='bg-black text-white'>
      <Container>
        <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10 grid grid-cols-1 md:grid-cols-5 gap-8 mr-auto mt-20">
          <nav className='text-base-content '>
            <h1 className="text-2xl font-bold mt-4 ">CS — Ticket System</h1>
            <p className='text-[#A1A1AA] text-base mt-4'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </nav>

          <nav className='text-base-content p-10 '>
            <h6 className="footer-title">Company</h6>
            <ul className='mt-4 space-y-3'>
              <li className=''><a className="link link-hover text-[#A1A1AA] text-base">About us</a></li>
              <li className=''><a className="link link-hover text-[#A1A1AA] text-base ">Our Mission</a></li>
              <li className=''><a className="link link-hover text-[#A1A1AA] text-base ">Contact Saled</a></li>
            </ul>

          </nav>

          <nav className='text-base-content p-10'>
            <h6 className="footer-title">Services</h6>
            <ul className='mt-4'>
              <li className='mt-4'><a className="link link-hover text-[#A1A1AA] text-base">Products & Services</a></li>
              <li className='mt-4'><a className="link link-hover text-[#A1A1AA] text-base">Customer Stories</a></li>
              <li className='mt-4'><a className="link link-hover text-[#A1A1AA] text-base">Download Apps</a></li>
            </ul>
          </nav>

          <nav className='text-base-content p-10 gap-4'>
            <h6 className="footer-title">Information</h6>
            <ul className='mt-4'>
              <li className='mt-4'><a className="link link-hover text-[#A1A1AA] text-base">Privacy policy</a></li>
              <li className='mt-4'><a className="link link-hover text-[#A1A1AA] text-base">Terms & Conditions</a></li>
              <li className='mt-4'><a className="link link-hover text-[#A1A1AA] text-base">Join Us</a></li>
            </ul>
          </nav>

          <nav className='text-base-content p-10'>
            <h6 className="footer-title">Social Links</h6>
            <div className="grid grid-flow-col gap-4">
              <ul className='text-[#A1A1AA] mt-2'>
                <li className='mt-2 flex items-center gap-2'><FaTwitter />@CS — Ticket System</li>
                <li className='mt-2 flex items-center gap-2'><FaFacebook />@CS — Ticket System</li>
                <li className='mt-2 flex items-center gap-2'><FaInstagram />@CS — Ticket System</li>
                <li className='mt-2 flex items-center gap-2'><MdEmail />@CS — Ticket System</li>
              </ul>
            </div>
          </nav>

        </footer>
        <aside className='text-center border-t border-gray-800 mt-4 pb-3.5 pt-3.5 text-[#FAFAFA] text-sm'>
          <p>Copyright © {new Date().getFullYear()} - Ticket System. All rights reserved</p>
        </aside>
      </Container>
    </div>
  );
};

export default Footer;