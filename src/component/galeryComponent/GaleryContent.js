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
  const data = [
    {
      image: './assets/galery1.png',
    },
    {
      image: './assets/galery2.png',
    },
    {
      image: './assets/galery3.png',
    },
    {
      image: './assets/galery4.png',
    },
    {
      image: './assets/galery5.png',
    },
    {
      image: './assets/galery6.png',
    },
    {
      image: './assets/galery7.png',
    },
    {
      image: './assets/galery8.png',
    },
    {
      image: './assets/galery1.png',
    },
    {
      image: './assets/galery2.png',
    },
    {
      image: './assets/galery3.png',
    },
    {
      image: './assets/galery4.png',
    },
    {
      image: './assets/galery5.png',
    },
    {
      image: './assets/galery6.png',
    },
    {
      image: './assets/galery7.png',
    },
    {
      image: './assets/galery8.png',
    },
    {
      image: './assets/galery1.png',
    },
    {
      image: './assets/galery2.png',
    },
    {
      image: './assets/galery3.png',
    },
    {
      image: './assets/galery4.png',
    },
    {
      image: './assets/galery5.png',
    },
    {
      image: './assets/galery6.png',
    },
    {
      image: './assets/galery7.png',
    },
    {
      image: './assets/galery8.png',
    }
  ]

export default function GaleryContent() {

    const settings = {
        className: "center",
        centerMode: true,
        centerPadding: "60px",
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        rows: 4,
        slidesToScroll: 2,
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
                slidesToScroll: 1,
              }
            }
          ]
      };

      
  return (
    <div class='w-3/4 lg:w-full m-auto lg:pb-20'>

      <div class='mt-20 lg:mt-44'>
        <div className='text-center lg:-mt-8'>
            <p className='font-bold text-lg md:text-2xl lg:text-4xl '>Galery of Bali Cemerlang</p>
            <p className='text-xs md:text-sm lg:text-base lg:mt-5'>a collection of photos from Cemerlang Bali, a solution to your travel problems</p>
        </div>
        
      </div>
      <div className='lg:w-10/12 m-auto mt-6 lg:mt-20'>
      <Slider {...settings}>
        {data.map ((data) => (
          <div className='bg-white h-[110px] md:h-[140px] lg:h-[170px] text-black rounded-xl'>
            <div className='h-[95px] md:h-36 lg:h-56 flex justify-center items-center'>
              <img src={data.image} alt='' className='h-full w-full lg:w-72'/>
            </div>
          </div>
        ))}
      </Slider>
      </div>
    </div>
  )
}
