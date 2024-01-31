import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className='hidden md:block'>
      <FaArrowAltCircleRight
      className={className}
      onClick={onClick} 
      style={{ ...style, display: "block", color: "red" }} />
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
      style={{ ...style, display: "block", fontSize: "25px", color: "red" }} />
    </div>
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
        title: 'Alice',
        description: '"We had an amazing time exploring the local attractions. The historical sites were captivating!"',
        image: './assets/image4.png',
        rating: '5',
      },
      {
        title: 'Felix',
        description: '"The hospitality of the locals made our stay truly memorable. Everyone was so welcoming."',
        image: './assets/image5.png',
        rating: '5',
      },
      {
        title: 'Oscar',
        description: '"The weather was a bit unpredictable, but we still managed to have a good time."',
        image: './assets/image6.png',
        rating: '3',
      },
      {
        title: 'Vydia',
        description: '"The Wi-Fi in our accommodation was unreliable. Better connectivity would be appreciated."',
        image: './assets/image4.png',
        rating: '2',
      },
      {
        title: 'John',
        description: '"We encountered issues with cleanliness in certain public spaces. Improvement is needed."',
        image: './assets/image5.png',
        rating: '1',
      },
      {
        title: 'Wayan',
        description: '"The food was fantastic, and we enjoyed trying the local cuisine. The restaurants recommended were spot on."',
        image: './assets/image6.png',
        rating: '5',
      },
      {
        title: 'Vina',
        description: '"Some areas could use better signage for tourists. Got a bit lost a couple of times."',
        image: './assets/image4.png',
        rating: '4',
      },
  ]

  return (
    <div class='w-11/12 md:w-3/4 m-auto lg:pb-10'>
        <div class='mt-7 lg:mt-20 text-center text-xs md:text-sm lg:text-base'>
            <p className='font-bold'>Our Customer Feedback</p>
            <p>Don’t take our word for it. Trust our customers</p>
        </div>
        <div className='mt-6 lg:mt-9'>
        <Slider {...settings}>
            {data.map ((data) => (
            <div className='bg-white h-[180px] md:h-[250px] lg:h-[230px] text-black rounded-xl'>
                <div className='h-16 md:h-20 lg:h-24 flex p-4 items-center rounded-t-xl border-x-2 border-t-2 border-gray-400'>
                <img src={data.image} alt='' className='h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 rounded-xl'/>
                <div className='absolute flex ml-56 md:ml-[154px] lg:ml-[340px]'>
                    {[1, 2, 3, 4, 5].map((ratingValue) => (
                    <FaStar
                        key={ratingValue}
                        className='star'
                        color={ratingValue <= parseInt(data.rating) ? "#ffc107" : "#e4e5e9"}
                    />
                    ))}
                </div>
                </div>

                <div className='flex flex-col justify-center p-4 border-x-2 border-b-2 border-gray-400 rounded-b-xl shadow-lg'>
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
