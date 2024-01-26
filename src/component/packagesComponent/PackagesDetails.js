import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className='hidden md:block'>
      <FaArrowAltCircleRight
      className={className}
      onClick={onClick} 
      style={{ ...style, color: "red" }} />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className='hidden md:block'>
      <FaArrowAltCircleLeft 
      className={className}
      onClick={onClick} 
      style={{ ...style, color: "red" }} />
    </div>
  );
}

export default function PackagesDetails() {
  const settings = {
    className: "center",
    centerPadding: "60px",
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    rows: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    swipeToSlide: true,
      afterChange: function(index) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
      },
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };
  const data = [
    {
        id: 1,
        title: 'Silver Package 1',
        location: 'Nusa Lembongan',
        date: '13-Maret-2023',
        benefits: 'Snorkeling equipments',
        time: '18:00 PM',
        price: '200.000,00',
    },
    {
        id: 2,
        title: 'Gold Package 1',
        location: 'Nusa Lembongan',
        date: '13-Maret-2023',
        benefits: 'Snorkeling equipments',
        time: '18:00 PM',
        price: '350.000,00',
    },
    {
        id: 3,
        title: 'Platinum Package 1',
        location: 'Nusa Lembongan',
        date: '13-Maret-2023',
        benefits: 'Snorkeling equipments',
        time: '18:00 PM',
        price: '500.000,00',
    },
    {
        id: 4,
        title: 'Silver Package 2',
        location: 'Nusa Lembongan',
        date: '13-Maret-2023',
        benefits: 'Snorkeling equipments',
        time: '18:00 PM',
        price: '200.000,00',
    },
    {
        id: 5,
        title: 'Gold Package 2',
        location: 'Nusa Lembongan',
        date: '13-Maret-2023',
        benefits: 'Snorkeling equipments',
        time: '18:00 PM',
        price: '350.000,00',
    },
    {
        id: 6,
        title: 'Platinum Package 2',
        location: 'Nusa Lembongan',
        date: '13-Maret-2023',
        benefits: 'Snorkeling equipments',
        time: '18:00 PM',
        price: '500.000,00',
    },
    {
        id: 7,
        title: 'Silver Package 3',
        location: 'Nusa Lembongan',
        date: '13-Maret-2023',
        benefits: 'Snorkeling equipments',
        time: '18:00 PM',
        price: '200.000,00',
    },
    {
        id: 8,
        title: 'Gold Package 3',
        location: 'Nusa Lembongan',
        date: '13-Maret-2023',
        benefits: 'Snorkeling equipments',
        time: '18:00 PM',
        price: '350.000,00',
    },
    {
        id: 9,
        title: 'Platinum Package 3',
        location: 'Nusa Lembongan',
        date: '13-Maret-2023',
        benefits: 'Snorkeling equipments',
        time: '18:00 PM',
        price: '500.000,00',
    },
    {
        id: 10,
        title: 'Silver Package 4',
        location: 'Nusa Lembongan',
        date: '13-Maret-2023',
        benefits: 'Snorkeling equipments',
        time: '18:00 PM',
        price: '200.000,00',
    },
    {
        id: 11,
        title: 'Gold Package 4',
        location: 'Nusa Lembongan',
        date: '13-Maret-2023',
        benefits: 'Snorkeling equipments',
        time: '18:00 PM',
        price: '350.000,00',
    },    
    {
        id: 12,
        title: 'Platinum Package 4',
        location: 'Nusa Lembongan',
        date: '13-Maret-2023',
        benefits: 'Snorkeling equipments',
        time: '18:00 PM',
        price: '500.000,00',
    },
    {
        id: 13,
        title: 'Silver Package 5',
        location: 'Nusa Lembongan',
        date: '13-Maret-2023',
        benefits: 'Snorkeling equipments',
        time: '18:00 PM',
        price: '200.000,00',
    },
    {
        id: 14,
        title: 'Gold Package 5',
        location: 'Nusa Lembongan',
        date: '13-Maret-2023',
        benefits: 'Snorkeling equipments',
        time: '18:00 PM',
        price: '350.000,00',
    },
    {
        id: 15,
        title: 'Platinum Package 5',
        location: 'Nusa Lembongan',
        date: '13-Maret-2023',
        benefits: 'Snorkeling equipments',
        time: '18:00 PM',
        price: '500.000,00',
    },
  ]

  return (
    <div class='w-10/12 md:w-11/12 m-auto'>
      
      <div className='lg:mt-9'>
      <Slider {...settings}>
        {data.map ((data) => (
          <div className='bg-white h-[150px] md:h-[170px] lg:h-[200px] text-black rounded-xl'>
            <div className='h-[125px] md:h-[145px] lg:h-[165px] flex flex-row border-2 border-gray-600 rounded-xl shadow-lg'>
                <div className='basis-7/12 ml-3 mt-2 border-r-4 border-dashed border-gray-600'>
                    <div className='font-bold text-sm md:text-lg lg:text-2xl'>{data.title}</div>
                    <div className='flex mt-1'>
                        <div className='bg-VividRed w-7 h-7 lg:w-9 lg:h-9 flex items-center justify-center rounded-md lg:rounded-xl mt-1 lg:mt-2'>
                            <img src='./assets/GPS.svg' alt='map' className='w-7 h-7'/>
                        </div>
                        <div className='text-center text-xs md:text-sm lg:text-base'>
                            <div className='pl-1'>{data.location}</div>
                            <div className='pl-1 text-gray-500'>{data.date}</div>
                        </div>
                    </div>
                    <div className='font-bold text-sm md:text-base lg:text-lg pt-1'>Benefit:</div>
                    <div className='text-xs md:text-sm lg:text-base'>{data.benefits}</div>
                </div>

                <div className='basis-5/12'>
                    <div className='flex flex-col items-center justify-center'>
                        <div className='font-bold text-lg md:text-xl lg:text-2xl mt-2 mb-2 lg:mt-4 lg:mb-4'>{data.time}</div>
                        {/* <Link to={`./PaymentPage/${data.id}`}> */} <Link to='/PaymentPage'>
                        <button className='w-[80px] h-7 md:w-28 md:h-9 lg:h-10 bg-VividRed font-bold text-sm md:text-base lg:text-xl text-white rounded-xl'>Buy Tiket</button>
                        {/* </Link> */}</Link>
                    </div>
                    <div className='ml-1 mt-3 lg:ml-2 lg:mt-4 text-xs md:text-sm lg:text-base'>Price : <span className='text-VividRed font-bold'>Rp</span><span className='text-VividRed font-bold'>{data.price}</span></div>
                </div>
            </div>
          </div>
        ))}
      </Slider>
      </div>
      
    </div>
  )
}
