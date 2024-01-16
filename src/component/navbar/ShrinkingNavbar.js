import React, { useEffect, useState } from 'react';
import NavbarMenu from './NavbarMenu';

export default function ShrinkingNavbar() {
    const [isScrolled, setIsScrolled] = useState(false);
  
    useEffect(() => {
      window.addEventListener('scroll', () => {
        setIsScrolled(window.scrollY > 0);
      });
  
      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener('scroll', () => {
          setIsScrolled(window.scrollY > 0);
        });
      };
    }, []);

  return (
    <div
        className={`z-40 fixed top-0 left-0 w-full transition-all duration-300 ${
        isScrolled ? 'h-8 md:h-24 bg-VividRed' : 'h-8 md:h-24 bg-transparent'
        }`}
    >
      <NavbarMenu/>
    </div>
  )
}
