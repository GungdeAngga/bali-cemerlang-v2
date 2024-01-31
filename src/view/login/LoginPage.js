import React from 'react'
import StaticNavbar from '../../component/navbar/StaticNavbar'
import LoginComponent from '../../component/loginComponent/LoginComponent'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className='hidden'>
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
      <div className='hidden'>
        <FaArrowAltCircleLeft 
        className={className}
        onClick={onClick} 
        style={{ ...style, color: "red" }} />
      </div>
    );
  }

export default function LoginPage() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        cssEase: "linear"
      };
      const data = [
        {
          image: './assets/Besakih.jpg',
        },
        {
          image: './assets/GWK.jpg',
        },
        {
          image: './assets/Kuta.jpg',
        },
        {
          image: './assets/MonkeyForest.jpg',
        },
        {
          image: './assets/TanahLot.jpg',
        },
        {
          image: './assets/TegalalangRice.jpg',
        },
        {
          image: './assets/Uluwatu.jpg',
        },
      ]
  return (
    <div>
        <StaticNavbar/>
        <div className='flex flex-col md:flex md:flex-row mt-20 md:mt-28 lg:mt-40'>

            <div className='md:basis-1/2'>
                <div className='flex flex-col px-7 lg:px-16'>
                    <div className=''>
                        <img src='./assets/LogoBaliCemerlang2.svg' alt='logo' className='w-9 m-auto md:m-0 lg:w-16'/>
                    </div>
                    <div className='mt-4'>
                        <LoginComponent/>
                    </div>
                </div>
            </div>

            <div className='hidden md:block md:basis-1/2 md:m-auto'>
                <div className='px-7 w-3/4'>
                {/* <Slider {...settings}> */}
                    {/* {data.map ((data) => ( */}
                        <div className='h-[530px] w-80 flex lg:w-[500px]'>

                                {/* <img src={data.image} alt='' className=' object-cover rounded-lg '/> */}
                                <img src='./assets/Uluwatu.jpg' alt='' className='w-72 h-[525px] object-cover rounded-lg m-auto lg:w-[500px]'/>

                            
                        </div>
                    {/* ))} */}
                {/* </Slider> */}

                </div>
            </div>
            
        </div>

    </div>
  )
}
