import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function NavbarMenu() {

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleToggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (

    <div className='flex md:items-center'>
      <div class='w-8 pt-2 ml-8 md:w-12 md:pt-2 md:ml-7 lg:w-16 lg:ml-14 lg:mt-2'>
        <Link to='/'>
          <img src='/assets/LogoBaliCemerlang.svg' alt='Logo'/>
        </Link>
      </div>

      <div className='md:absolute md:flex md:right-0 md:pt-2 md:mr-7 lg:mr-14 lg::mt-6'>
        { /* Conditionally render the menu based on screen size */ }
        { window.innerWidth < 768 ? (
          <div className='group absolute right-0 mt-4 text-xs w-[60px]'>
            <button onClick={handleToggleDropdown} className='font-poppins text-white md:text-gray-300 focus:outline-none'>
              Menu
            </button>
            <ul
            className={`${
              isDropdownOpen ? 'block' : 'hidden'
            } absolute right-0 mt-2 space-y-2 w-24 bg-VividRed border flex flex-col items-center text-white`}
            >
              <li>
                <a href="/" className="font-poppins hover:text-gray-300 ">
                  Home
                </a>
              </li>
              <li>
                <a href="/PackagesPage" className="font-poppins hover:text-gray-300 ">
                  Packages
                </a>
              </li>
              <li>
                <a href="/" className="font-poppins hover:text-gray-300 ">
                  News
                </a>
              </li>
              <li>
                <a href="/" className="font-poppins hover:text-gray-300 ">
                  Gallery
                </a>
              </li>
              <li>
                <a href="/AboutUsPage" className="font-poppins hover:text-gray-300 ">
                  About Us
                </a>
              </li>
              <li>
                <div className='w-4 flex'>
                <img src='/assets/search1.svg' alt='search'/>
                </div>
              </li>
              <li>
                <div className='w-5'>
                  <img src='/assets/user1.svg' alt='user'/>
                </div>
              </li>
              {/* Add similar list items for other menu options */}
            </ul>
          </div>
        ) : (
          <ul className='flex md:flex-row md:items-center'>
          <li>
            <a href="/" className="font-poppins text-white hover:text-gray-300 pl-6">
              Home
            </a>
          </li>
          <li>
            <a href="/PackagesPage" className="font-poppins text-white hover:text-gray-300 pl-6">
              Packages
            </a>
          </li>
          <li>
            <a href="/" className="font-poppins text-white hover:text-gray-300 pl-6">
              News
            </a>
          </li>
          <li>
            <a href="/" className="font-poppins text-white hover:text-gray-300 pl-6">
              Gallery
            </a>
          </li>
          <li>
            <a href="/" className="font-poppins text-white hover:text-gray-300 pl-6">
              About Us
            </a>
          </li>
          <li>
            <div className='pl-6'>
              <img src='/assets/search1.svg' alt='search'/>
            </div>
          </li>
          <li>
            <div className='pl-6'>
              <img src='/assets/user1.svg' alt='user'/>
            </div>
          </li>
        </ul>
        )}
      </div>
    </div>
      
  )
}
