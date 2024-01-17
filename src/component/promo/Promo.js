import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

export default function Promo() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
  };
  const data = [
    {
      title: 'Promo 1',
      image: './assets/image1.png',
    },
    {
      title: 'Promo 2',
      image: './assets/image2.png',
    },
    {
      title: 'Promo 3',
      image: './assets/image3.png',
    },
    {
      title: 'Promo 4',
      image: './assets/image1.png',
    },
    {
      title: 'Promo 5',
      image: './assets/image2.png',
    },
    {
      title: 'Promo 6',
      image: './assets/image3.png',
    },
    {
      title: 'Promo 7',
      image: './assets/image1.png',
    },
    {
      title: 'Promo 8',
      image: './assets/image2.png',
    },
    {
      title: 'Promo 9',
      image: './assets/image3.png',
    },
  ]


  return (
    <div class='w-3/4 m-auto'>
      <div class='mt-7 lg:mt-20 text-center text-xs md:text-sm lg:text-base'>
        <p className='font-bold'>Promo</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper nec sed ligula ac tellus senectus ut. Ac.</p>
      </div>
      <div className='mt-6 lg:mt-9'>
      <Slider {...settings}>
        {data.map ((data) => (
          <div className='bg-white h-[160px] md:h-[250px] lg:h-[370px] text-black rounded-xl'>
            <div className='h-20 md:h-36 lg:h-56 flex justify-center items-center bg-VividRed rounded-t-xl border-x-2 border-t-2 border-gray-400'>
              <img src={data.image} alt='' className='h-[70px] w-[70px] md:h-32 md:w-32 lg:h-full lg:w-full rounded-full lg:rounded-t-lg lg:rounded-b-none'/>
            </div>

            <div className='flex flex-col justify-center items-center gap-1 p-2 lg:gap-4 lg:p-4 border-x-2 border-b-2 border-gray-400 rounded-b-xl shadow-2xl'>
              <p className='text-sm font-bold md:text-base lg:text-xl'>{data.title}</p>
              <button className='bg-VividRed text-white text-xs md:text-base lg:text-lg px-6 py-1 rounded-xl'>Read More</button>
            </div>
          </div>
        ))}
      </Slider>
      </div>

    </div>
  )
}
