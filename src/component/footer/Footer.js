import React from 'react'
import FooterAboutUs from './FooterAboutUs';
import FooterSearch from './FooterSearch';
import FooterInformation from './FooterInformation';

export default function Footer() {
    const openInstagram = () => {
        window.open('https://www.instagram.com/balicemerlangtours/?hl=en', '_blank');
      };

    const openFacebook = () => {
        window.open('https://www.facebook.com/balicemerlangtours/?locale=id_ID', '_blank');
      };
  return (
    <div className='bottom-0 w-full bg-VividRed h-[500px] md:h-[330px] lg:h-[360px]'>
        <div className='px-4 py-4'>
            <div className='flex flex-col md:flex md:flex-row md:border-b-2 md:border-white lg:mt-4'>

                <div className='md:w-2/4 lg:ml-5 '>
                    <img src='/assets/LogobaliCemerlang.svg' alt='logo' className='w-10 h-10 mt-2 lg:mt-0 lg:w-14 lg:h-14'/>
                    <div className='lg:pt-4'>
                        <p className='text-xs md:text-sm lg:text-base text-white text-justify pt-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus adipiscing maecenas turpis fringilla cursus mi, fermentum.</p>
                        <div className='flex items-center pt-2 lg:pt-6'>
                            <ul className="flex space-x-2 md:space-x-4 lg:space-x-6">
                                <li>
                                    <div class='w-5 h-5 lg:w-6 lg:h-6 bg-white flex items-center justify-center' onClick={openInstagram}>
                                        <img src='./assets/IG.svg' alt='instagram' class='w-4 h-4 lg:w-5 lg:h-5'/>
                                    </div>
                                </li>
                                <li>
                                    <div class='w-5 h-5 lg:w-6 lg:h-6 bg-white flex items-center justify-center' onClick={openFacebook}>
                                        <img src='./assets/FB.svg' alt='facebook' class='w-4 h-4 lg:w-5 lg:h-5'/>
                                    </div>
                                </li>
                                <li>
                                    <div class='w-5 h-5 lg:w-6 lg:h-6 bg-white flex items-center justify-center'>
                                        <img src='./assets/LinkIn.svg' alt='linkin'class='w-4 h-4 lg:w-5 lg:h-5' />
                                    </div>
                                </li>
                                <li>
                                    <div class='w-5 h-5 lg:w-6 lg:h-6 bg-white flex items-center justify-center'>
                                        <img src='./assets/YT.svg' alt='youtube' class='w-4 h-4 lg:w-5 lg:h-5'/>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='md:ml-5 md:flex md:flex-row md:px-4 lg:px-0 lg:ml-40'>
                    <div className='md:w-1/4 lg:w-[280px]'>
                        <FooterAboutUs/>
                    </div>
                    <div className='md:w-1/4 lg:w-[180px]'>
                        <FooterSearch/>
                    </div>
                    <div className='md:w-1/2 lg:w-[300px] border-b-2 border-white md:border-none'>
                        <FooterInformation/>
                    </div>
                </div>

            </div>
            <div className='text-end pt-1 text-xs md:text-sm lg:text-base text-white lg:mr-6'>created with ♥ by cvmaiharta</div>
        </div>
    </div>
  )
}
