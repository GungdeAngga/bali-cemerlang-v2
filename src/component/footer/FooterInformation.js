import React from 'react'

export default function FooterInformation() {
    const email = 'info@balicemerlangtours.com';
    const phoneNumber = '628113971099';
    const BaliCemerlangRenon = 'Bali Cemerlang Tours in Renon'; // Replace with the actual place name or address
    // const BaliCemerlangKuta = 'Bali Cemerlang Tours in Kuta';

    const encodedPlace1 = encodeURIComponent(BaliCemerlangRenon);
    const googleMapsURL1 = `https://www.google.com/maps/search/?api=1&query=${encodedPlace1}`;

    // const encodedPlace2 = encodeURIComponent(BaliCemerlangKuta);
    // const googleMapsURL2 = `https://www.google.com/maps/search/?api=1&query=${encodedPlace2}`;
  return (
    <div>
      <p className='text-white pt-3 text-sm md:text-lg lg:text-2xl font-bold'>Get In Touch</p>
      <div className="flex items-center pt-1 md:pt-3 lg:pt-[15px]">
          <div className="flex flex-col text-xs md:text-sm lg:text-base text-white space-y-1 md:space-y-2">
              
            <div className='flex items-center'>
                <img src='/assets/email.svg' alt='instagram' class='h-3 w-3 mr-1'/>
                E-Mail
            </div>
            <a href={`mailto:${email}`}>balicemerlangtours@gmail.com</a>
        
            <div className='flex items-center'>
                <img src='/assets/WA2.svg' alt='wa' class='h-3 w-3 mr-1'/>
                WhatsApp
            </div>
            <a href={`https://wa.me/${phoneNumber}`}>+62 812-3456-7890</a>
        
            <p className=''>Denpasar ID</p> 
            <a href={googleMapsURL1} target="_blank" rel="noopener noreferrer">Jl. Tukad Ayung No.5, Denpasar - Bali</a><br/>
            {/* <p>Kuta ID</p>
            <a href={googleMapsURL2} target="_blank" rel="noopener noreferrer">Jl. By Pass Ngurah Rai Komplek Pertokoan Segi Tiga Mas No 25, Kuta - Bali</a> */}
              
          </div>
      </div>
    </div>
  )
}
