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
        style={{ ...style , color: "red" }} />
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

export default function Content() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
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
            slidesToShow: 2,
            slidesToScroll: 2,
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
  const data = [
    {
      title: 'promo 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus adipiscing maecenas turpis fringilla cursus mi, fermentum.',
      image: './assets/image1.png',
    },
    {
      title: 'promo 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus adipiscing maecenas turpis fringilla cursus mi, fermentum.',
      image: './assets/image2.png',
    },
    {
      title: 'promo 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus adipiscing maecenas turpis fringilla cursus mi, fermentum.',
      image: './assets/image3.png',
    },
    {
      title: 'promo 4',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus adipiscing maecenas turpis fringilla cursus mi, fermentum.',
      image: './assets/image1.png',
    },
    {
      title: 'promo 5',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus adipiscing maecenas turpis fringilla cursus mi, fermentum.',
      image: './assets/image2.png',
    },
    {
      title: 'promo 6',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus adipiscing maecenas turpis fringilla cursus mi, fermentum.',
      image: './assets/image3.png',
    },
    {
      title: 'promo 7',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus adipiscing maecenas turpis fringilla cursus mi, fermentum.',
      image: './assets/image1.png',
    },
    {
      title: 'promo 8',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus adipiscing maecenas turpis fringilla cursus mi, fermentum.',
      image: './assets/image2.png',
    },
    {
      title: 'promo 9',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus adipiscing maecenas turpis fringilla cursus mi, fermentum.',
      image: './assets/image3.png',
    },
    {
      title: 'promo 10',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus adipiscing maecenas turpis fringilla cursus mi, fermentum.',
      image: './assets/image1.png',
    },
    {
      title: 'promo 11',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus adipiscing maecenas turpis fringilla cursus mi, fermentum.',
      image: './assets/image2.png',
    },
    {
      title: 'promo 12',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus adipiscing maecenas turpis fringilla cursus mi, fermentum.',
      image: './assets/image3.png',
    },
    {
      title: 'promo 13',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus adipiscing maecenas turpis fringilla cursus mi, fermentum.',
      image: './assets/image1.png',
    },
    {
      title: 'promo 14',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus adipiscing maecenas turpis fringilla cursus mi, fermentum.',
      image: './assets/image2.png',
    },
    {
      title: 'promo 15',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus adipiscing maecenas turpis fringilla cursus mi, fermentum.',
      image: './assets/image3.png',
    },
    {
      title: 'promo 16',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus adipiscing maecenas turpis fringilla cursus mi, fermentum.',
      image: './assets/image1.png',
    },
    {
      title: 'promo 17',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus adipiscing maecenas turpis fringilla cursus mi, fermentum.',
      image: './assets/image2.png',
    },
    {
      title: 'promo 18',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus adipiscing maecenas turpis fringilla cursus mi, fermentum.',
      image: './assets/image3.png',
    },
  ]

  return (
    <div class='w-11/12 md:w-3/4 m-auto'>
      <div class='mt-7 lg:mt-20 text-center text-xs md:text-sm lg:text-base '>
        <p className='font-bold pt-4 md:pt-6 lg:pt-10'>Special Offer</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper nec sed ligula ac tellus senectus ut. Ac.</p>
      </div>
      <div className='mt-6 lg:w-full lg:mt-9'>
      <Slider {...settings}>
        {data.map ((data) => (
          <div className='bg-white h-[200px] md:h-[270px] lg:h-[390px] text-black rounded-xl'>
            <div className='h-[95px] md:h-36 lg:h-56 flex justify-center items-center bg-VividRed rounded-t-xl'>
              <img src={data.image} alt='' className='h-[94px] w-[130px] md:h-32 md:w-32 lg:h-52 lg:w-52 md:rounded-full'/>
            </div>

            <div className='flex flex-col justify-center items-center gap-1 p-2 lg:gap-4 lg:p-4'>
              <p className='text-sm font-bold md:text-base lg:text-xl'>{data.title}</p>
              <p className='text-xs md:text-sm lg:text-base text-justify px-3'>{(data.id) ? data.description : `${data.description.slice(0, 50)}...`}</p>
              <button className='bg-VividRed text-white text-xs md:text-base lg:text-lg px-6 py-1 rounded-xl'>Read More</button>
            </div>
          </div>
        ))}
      </Slider>
      </div>
      <div className='flex justify-center mt-4 md:mt-8 lg:mt-16 pb-4 md:pb-6 lg:pb-10'>
        <Link to='/SpecialOfferPage'>
          <button class='h-8 md:h-10 lg:h-14 w-[200px] md:w-[300px] lg:w-[400px] text-sm md:text-lg lg:text-2xl font-bold bg-VividRed rounded-full font-poppins text-white'>
            clik here to see more offers
          </button>
        </Link>
      </div>
    </div>
  )
}
