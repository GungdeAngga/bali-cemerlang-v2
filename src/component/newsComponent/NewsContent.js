import React, { useState, useEffect, useRef } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className='hidden lg:block'>
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
      <div className='hidden lg:block'>
        <FaArrowAltCircleLeft 
        className={className}
        onClick={onClick} 
        style={{ ...style, color: "red" }} />
      </div>
    );
  }

export default function NewsContent() {
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    let sliderRef1 = useRef(null);
    let sliderRef2 = useRef(null);
  
    useEffect(() => {
      setNav1(sliderRef1);
      setNav2(sliderRef2);
    }, []);

    const settings = {
        infinite: true,
        slidesToShow: 3,
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
                slidesToShow: 2,
                slidesToScroll: 1,
    
              }
            }
          ]
    }

    const newsData = [
        {
            id: 1,
            title: '5 Recommended Indonesia Tourist attractions in March 2023',
            image: './assets/news2.png',
            author: 'Admin Bali Cemerlang',
            date: 'March 10, 2023',
        },
        {
            id: 2,
            title: '5 Recommended Indonesia Tourist attractions in April 2023',
            image: './assets/news3.png',
            author: 'Admin Bali Cemerlang',
            date: 'March 10, 2023',
          },
          {
            id: 3,
            title: '5 Recommended Indonesia Tourist attractions in Mei 2023',
            image: './assets/news4.png',
            author: 'Admin Bali Cemerlang',
            date: 'March 10, 2023',
          },
          {
            id: 4,
            title: '5 Recommended Indonesia Tourist attractions in March 2023',
            image: './assets/news2.png',
            author: 'Admin Bali Cemerlang',
            date: 'March 10, 2023',
        },
        {
            id: 5,
            title: '5 Recommended Indonesia Tourist attractions in March 2023',
            image: './assets/news3.png',
            author: 'Admin Bali Cemerlang',
            date: 'March 10, 2023',
        },
        {
            id: 6,
            title: '5 Recommended Indonesia Tourist attractions in March 2023',
            image: './assets/news4.png',
            author: 'Admin Bali Cemerlang',
            date: 'March 10, 2023',
        },
        // Add more news items as needed
      ];

  return (
    <div class=''>

    <div class='mt-20 lg:mt-44'>
      <div className='text-center pb-5'>
          <p className='font-bold text-lg md:text-2xl lg:text-4xl'>News</p>
      </div>
      
    </div>

    <div className='flex flex-col mt-9 w-[87%] md:w-3/4 m-auto'>
        <Slider asNavFor={nav2} ref={slider => (sliderRef1 = slider)}>
            {newsData.map ((newsItem) => (

            <div className=''>
                <div className='px-2 md:px-0'>
                    <div className='h-64 md:h-[350px] lg:h-[480px] bg-LightGrayishViolet rounded-lg border-2 border-gray-600 shadow-md'>
                        <div className='flex flex-col'>
                            <div className=' p-3 mt-4 m-auto'>
                                <img src={newsItem.image} alt='' className='w-28 h-28 md:w-48 md:h-48 lg:w-72 lg:h-72 object-cover'/>
                            </div>
                            <div className='px-4 md:m-auto'>
                                <div className='flex flex-col text-xs md:text-sm lg:text-base'>
                                    <span className='font-bold'>
                                        {newsItem.title}
                                    </span>
                                    <div className='flex mt-2'>
                                        <img src='./assets/admin1.png' alt='' className='rounded-full w-7 h-7 lg:w-12 lg:h-12'/>
                                        <div className='ml-1 lg:ml-3'>
                                            <div>
                                                {newsItem.author}
                                            </div>
                                            <span>
                                                {newsItem.date}
                                            </span>
                                        </div>
                                        
                                    </div>
                                    <button className='bg-VividRed rounded-xl text-white mt-1 w-20'>Read Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            ))}
        </Slider>

        <div className='px-2 md:px-0 pb-24 mt-10'>
            <div className='rounded-lg border-2 border-gray-600 shadow-md'>
                <span className='ml-2 lg:ml-7'>Latest Article</span>
                    <Slider
                        asNavFor={nav1}
                        ref={slider => (sliderRef2 = slider)}
                        swipeToSlide={true}
                        focusOnSelect={true}
                        {...settings}
                    >
                        {newsData.map ((newsItem) => (
                            <div className='mt-5 lg:mt-0'>
                                <div className='h-64 md:h-[350px] bg-LightGrayishViolet px-1 rounded-lg'>
                
                                    {/* <div className='flex flex-col'> */}

                                        <div className='flex flex-col'>
                                            <div className=' p-1 mt-4 md:flex md:justify-center'>
                                                <img src={newsItem.image} alt='' className='w-28 h-16 md:w-48 md:h-36 object-cover'/>
                                            </div>
                                            <div className=' p-1 mt-4'>
                                                <div className='flex flex-col text-xs md:text-sm lg:text-base'>
                                                    <span className='font-bold'>{newsItem.title}</span>
                                                    <div className='flex mt-2'>
                                                        
                                                        <div>
                                                            <div>
                                                                {newsItem.author}
                                                            </div>
                                                            <span>
                                                                {newsItem.date}
                                                            </span>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    {/* </div> */}
                                    
                                </div>
                            </div>
                        ))}
                    </Slider>
            </div>  
        </div>
    </div>
  </div>
  )
}
