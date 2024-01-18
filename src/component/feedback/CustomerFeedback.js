import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";

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

export default function CustomerFeedback() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
            slidesToShow: 2,
            slidesToScroll: 2,
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
        title: 'User 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: './assets/image4.png',
        rating: '5',
      },
      {
        title: 'User 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: './assets/image5.png',
        rating: '4',
      },
      {
        title: 'User 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: './assets/image6.png',
        rating: '3',
      },
      {
        title: 'User 4',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: './assets/image4.png',
        rating: '2',
      },
      {
        title: 'User 5',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: './assets/image5.png',
        rating: '1',
      },
      {
        title: 'User 6',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: './assets/image6.png',
        rating: '5',
      },
      {
        title: 'User 7',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: './assets/image4.png',
        rating: '4',
      },
      {
        title: 'User 8',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: './assets/image5.png',
        rating: '3',
      },
      {
        title: 'User 9',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: './assets/image6.png',
        rating: '2',
      },
      {
        title: 'User 10',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: './assets/image4.png',
        rating: '1',
      },
      {
        title: 'User 11',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: './assets/image5.png',
        rating: '5',
      },
      {
        title: 'User 12',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: './assets/image6.png',
        rating: '4',
      },
      {
        title: 'User 13',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: './assets/image4.png',
        rating: '3',
      },
      {
        title: 'User 14',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: './assets/image5.png',
        rating: '2',
      },
      {
        title: 'User 15',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: './assets/image6.png',
        rating: '1',
      },
      {
        title: 'User 16',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: './assets/image4.png',
        rating: '5',
      },
      {
        title: 'User 17',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: './assets/image5.png',
        rating: '4',
      },
      {
        title: 'User 18',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: './assets/image6.png',
        rating: '3',
      },
  ]

  return (
    <div class='w-3/4 m-auto'>
        <div class='mt-7 lg:mt-20 text-center text-xs md:text-sm lg:text-base'>
            <p className='font-bold'>Our Customer Feedback</p>
            <p>Don’t take our word for it. Trust our customers</p>
        </div>
        <div className='mt-6 lg:mt-9'>
        <Slider {...settings}>
            {data.map ((data) => (
            <div className='bg-white h-[180px] md:h-[250px] lg:h-[290px] text-black rounded-xl'>
                <div className='h-16 md:h-20 lg:h-24 flex p-4 items-center rounded-t-xl border-x-2 border-t-2 border-gray-400'>
                <img src={data.image} alt='' className='h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 rounded-xl'/>
                <div className='flex ml-28 md:ml-20 lg:ml-64'>
                    {[1, 2, 3, 4, 5].map((ratingValue) => (
                    <FaStar
                        key={ratingValue}
                        className='star'
                        color={ratingValue <= parseInt(data.rating) ? "#ffc107" : "#e4e5e9"}
                    />
                    ))}
                </div>
                </div>

                <div className='flex flex-col justify-center gap-1 p-4 border-x-2 border-b-2 border-gray-400 rounded-b-xl shadow-2xl'>
                <p className='text-sm font-bold md:text-base lg:text-xl'>{data.title}</p>
                <p className='text-xs md:text-sm lg:text-base text-justify'>{(data.id) ? data.description : `${data.description.slice(0, 70)}...`}</p>
                </div>
            </div>
            ))}
        </Slider>
        </div>
    </div>
  )
}
