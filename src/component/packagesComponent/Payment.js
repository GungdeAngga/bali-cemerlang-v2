import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TotalTicket from './TotalTicket';
import TotalPrice from './TotalPrice';

export default function Payment() {
    const [selectedOption, setSelectedOption] = useState(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleToggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleItemClick = (item) => {
        setSelectedOption(item);
        setIsDropdownOpen(false);
    };

    
  return (
    <div className='mt-16 md:mt-24 lg:mt-36'>
        
        <div className='flex'>
            <Link to='/PackagesPage'>
                <img src='./assets/back.svg' alt='back' className='ml-10 md:ml-[80px] lg:ml-[120px] w-6 h-6 md:w-10 md:h-10'/>
            </Link>
            <div className='pb-4 md:pb-10 ml-7 mt-1 text-xs md:text-sm lg:text-base text-VividRed'>
                <label className='font-bold'>Passenger Name</label>
            </div>
        </div>

        <div className='flex flex-col lg:flex lg:flex-row-reverse'>
            <div className='basis-1/2'>
                <TotalTicket/>
            </div>

            <div>
                <div className='flex flex-col md:flex-row pb-4 md:mt-4'>
                    <div className='md:basis-1/2'>
                    <div className='w-10/12 m-auto md:ml-10 md:w-[685px] md:h-[260px] lg:w-[900px] lg:h-[420px] bg-red-200 border-4 border-gray-400 rounded-xl shadow-xl'>

                        <div className='px-5 pt-4 md:px-9 md:pt-[22px] lg:px-12 lg:pt-7'>
                            <div className='pb-1 text-xs md:text-sm lg:text-base'>
                                <label className='font-bold '>Passenger Name</label>
                            </div>
                            <input type='text' placeholder='Passenger name...' className='text-xs md:text-sm lg:text-base border-Gray65 border-2 w-[275px] h-6 md:w-[600px] md:h-10 lg:w-[800px] lg:h-16 text-left pl-5 rounded-lg hover:bg-gray-200 focus:outline-none shadow-xl'/>
                            
                            <div className='pb-4 lg:pt-7'>
                                <div className='flex flex-col md:flex-row'>
                                    <div className='lg:basis-1/2'>
                                        <div className='pb-1'>
                                            <label className='font-bold text-xs md:text-sm lg:text-base'>No. Identity (No. KTP / No. Paspor)</label>
                                        </div>
                                        <input type='text' placeholder='Identity number...' className='text-xs md:text-sm lg:text-base border-Gray65 border-2 w-[275px] h-6 md:w-[290px] md:h-10 lg:w-[380px] lg:h-16 text-left pl-5 rounded-lg hover:bg-gray-200 focus:outline-none shadow-xl'/>
                                    </div>
                                    <div className='lg:basis-1/2 md:pl-[20px] lg:pl-[40px]'>
                                        <div>
                                            <label className='font-bold text-xs md:text-sm lg:text-base'>Sex</label>
                                            <div className='pt-1'>
                                                <button
                                                    onClick={handleToggleDropdown}
                                                    className="flex text-xs md:text-sm lg:text-base border-Gray65 bg-white border-2 w-[275px] h-6 md:w-[290px] md:h-10 lg:w-[380px] lg:h-16 text-left pl-5 md:pt-2 lg:pt-4 rounded-lg hover:bg-gray-200 focus:outline-none shadow-xl"
                                                >
                                                    {selectedOption || 'Sex'}
                                                    <div className='absolute mt-1 ml-56 md:ml-[230px] lg:ml-[320px] lg:mt-2'>
                                                        <img src='./assets/dropdown.svg' alt='dropdown' className='w-3 h-3'/>
                                                    </div>
                                                </button>
                                                {isDropdownOpen && (
                                                    <div className="text-xs md:text-sm lg:text-base absolute w-[275px] lg:w-[380px] bg-white border rounded-lg shadow-md">
                                                    <ul>
                                                        <li onClick={() => handleItemClick('Male')} className="py-2 px-4 cursor-pointer">
                                                        Male
                                                        </li>
                                                        <li onClick={() => handleItemClick('Female')} className="py-2 px-4 cursor-pointer">
                                                        Female
                                                        </li>
                                                    </ul>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            <div className='lg:pt-7'>
                                <div className='pb-1'>
                                    <span className='font-bold text-xs md:text-sm lg:text-base'>Email</span> <span className='text-xs md:text-sm lg:text-base'>*(Used to send the booking code)</span>
                                </div>
                                <input type='text' placeholder='Example@gmail.com' className='text-xs md:text-sm lg:text-base border-Gray65 border-2 w-[275px] h-6 md:w-[600px] md:h-10 lg:w-[800px] lg:h-16 text-left pl-5 rounded-lg hover:bg-gray-200 focus:outline-none shadow-xl'/>
                            </div>
                            </div>
                        </div>
                    </div>
                        <TotalPrice/>

                        <div className='w-10/12 m-auto pt-6 pb-6 md:ml-10 md:w-[685px] lg:pl-36 lg:pt-10 lg:pb-20'>
                            <button className='h-10 w-[325px] md:w-[685px] md:h-12 lg:h-14 lg:w-[600px] bg-VividRed rounded-xl font-poppins text-xl text-white'>Booking</button>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}