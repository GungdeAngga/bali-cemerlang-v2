import React from 'react'
import { Link } from 'react-router-dom';
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

export default function SpecialOfferDetalis() {

    const settings = {
        className: "center",
        centerPadding: "60px",
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        rows: 4,
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
                slidesToShow: 3,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                rows: 3
              }
            }
          ]
      };
  return (
    <div class='w-3/4 m-auto '>

      <div class='mt-20 lg:mt-44'>
        <Link to='/'>
            <img src='./assets/back.svg' alt='back' className='ml-1 w-6 h-6 md:w-10 md:h-10'/>
        </Link>
        <div className='text-center text-xs md:text-sm lg:text-base lg:-mt-8'>
            <p className='font-bold'>Special Offer</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper nec sed ligula ac tellus senectus ut. Ac.</p>
        </div>
        
      </div>
      <div className='mt-6 lg:mt-20'>
      <Slider {...settings}>
        {data.map ((data) => (
          <div className='bg-white h-[240px] md:h-[330px] lg:h-[460px] text-black rounded-xl'>
            <div className='h-[95px] md:h-36 lg:h-56 flex justify-center items-center bg-VividRed rounded-t-xl'>
              <img src={data.image} alt='' className='h-20 w-20 md:h-32 md:w-32 lg:h-52 lg:w-52 rounded-full'/>
            </div>

            <div className='flex flex-col justify-center items-center gap-1 p-2 lg:gap-4 lg:p-4 border-2 rounded-b-xl shadow-2xl'>
              <p className='text-sm font-bold md:text-base lg:text-xl'>{data.title}</p>
              <p className='text-xs md:text-sm lg:text-base text-justify px-3'>{(data.id) ? data.description : `${data.description.slice(0, 50)}...`}</p>

              <button className='bg-VividRed text-white text-xs md:text-base lg:text-lg px-6 py-1 rounded-xl'>Read More</button>

            </div>
          </div>
        ))}
      </Slider>
      </div>
    </div>
  )
}
