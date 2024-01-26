import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
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

export default function TotalTicket() {
    const settings = {
        className: "center",
        centerPadding: "60px",
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        rows: 2,
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
                slidesToShow: 2,
                slidesToScroll: 1,
                rows: 1,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2,
                rows: 1
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
            time: '18:00 PM',
        },
        {
            id: 2,
            title: 'Gold Package 1',
            location: 'Nusa Lembongan',
            date: '13-Maret-2023',
            time: '18:00 PM',
        },
        {
            id: 3,
            title: 'Platinum Package 1',
            location: 'Nusa Lembongan',
            date: '13-Maret-2023',
            time: '18:00 PM',
        },
    ]
  return (

    <div class='w-10/12 md:w-11/12 m-auto'>
      
      <div className='md:mt-3 lg:mt-9'>
      <Slider {...settings}>
          {data.map ((data) => (
          <div className='bg-white h-[180px] md:h-[190px] lg:h-[220px] text-black rounded-xl'>
              <div className='h-[160px] md:h-[165px] lg:h-[205px]  border-2 border-VividRed rounded-xl shadow-xl'>
                  <div className='w-full mt-2 border-b-2 border-dashed border-VividRed flex flex-col items-center justify-center'>
                      <div className='font-bold text-lg md:text-xl lg:text-2xl'>{data.title}</div>
                          <div className='flex flex-col items-center justify-center font-bold text-lg md:text-xl lg:text-2xl mb-2 lg:mt-4 lg:mb-4'>
                              <div className='text-VividRed'>{data.date}</div>
                              <div className=''>{data.time}</div>
                          </div>

                      
                  </div>

                  <div className='mt-2'>
                      <div className='flex ml-3 text-xs md:text-sm lg:text-base'>
                          <div className='bg-VividRed w-7 h-7 lg:w-9 lg:h-9 flex items-center justify-center rounded-md lg:rounded-xl mt-1 lg:mt-2'>
                              <img src='./assets/send1.svg' alt='map' className='w-7 h-7'/>
                          </div>
                          <div>
                              <div className='pl-1 font-bold'>{data.location}</div>
                              <div className='pl-1 text-gray-500'>{data.date}</div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          ))}
      </Slider>
      </div>
      
    </div>

  )
}
