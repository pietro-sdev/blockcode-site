"use client";

import logo from '../assets/logo.svg';
import Image from 'next/image';
import { navItems } from '../constants';
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.querySelector(item.href) as HTMLElement);
      const scrollPos = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        if (section && section.offsetTop <= scrollPos && section.offsetTop + section.clientHeight > scrollPos) {
          setActiveSection(`#${section.id}`);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="sticky mt-5 z-10 py-3 lg:mr-16 lg:mb-10 lg:ml-6">
      <div className="container px-4 mx-auto relative text-md">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <Image className="h-auto w-[240px]" src={logo} alt="Logo" />
          </div>
          <ul className={`hidden lg:flex space-x-10 font-regular size`}>
            {navItems.map((item, index) => (
              <li key={index} className="group relative">
                <a href={item.href} className={`text-white ${activeSection === item.href ? 'text-gray-300' : 'hover:text-gray-300'}`}>
                  {item.label}
                </a>
                <span className={`block h-[3px] rounded-md bg-gradient-to-r from-[#02674F] to-[#04DC80] absolute left-0 bottom-[-4px] ${activeSection === item.href ? 'w-full' : 'w-0'} group-hover:w-full transition-all duration-290`}></span>
              </li>
            ))}
          </ul>
          <div className="lg:hidden flex items-center">
            <button onClick={toggleNavbar} className="text-white focus:outline-none">
              {mobileDrawerOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {/* Mobile Drawer */}
        {mobileDrawerOpen && (
          <div className="lg:hidden mt-4">
            <ul className="flex flex-col space-y-4 font-regular items-center justify-center bg-black/40 px-10 py-10 rounded-lg">
              {navItems.map((item, index) => (
                <li key={index} className="group relative">
                  <a href={item.href} className={`text-white ${activeSection === item.href ? 'text-gray-300' : 'hover:text-gray-300'} block`}>
                    {item.label}
                  </a>
                  <span className={`block h-[3px] rounded-md bg-gradient-to-r from-[#02674F] to-[#04DC80] absolute left-0 bottom-[-4px] ${activeSection === item.href ? 'w-full' : 'w-0'} group-hover:w-full transition-all duration-290`}></span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

