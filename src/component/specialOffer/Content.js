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
      title: 'Besakih',
      description: 'Sebagai pura terbesar dan paling suci di Bali, Pura Besakih terletak di lereng Gunung Agung dan dianggap sebagai "Pura Agung Besakih."',
      image: './assets/Besakih.jpg',
    },
    {
      title: 'GWK',
      description: 'Sebuah taman budaya yang menampilkan patung Garuda Wisnu Kencana setinggi 122 meter, yang sedang dalam proses pembangunan.',
      image: './assets/GWK.jpg',
    },
    {
      title: 'Kuta Beach',
      description: 'Salah satu pantai paling terkenal di Bali, Kuta Beach menawarkan ombak yang sempurna untuk berselancar dan memiliki atmosfer yang hidup di sekitar area pantai.',
      image: './assets/Kuta.jpg',
    },
    {
      title: 'Monkey Forest',
      description: 'Hutan Monkey di Ubud adalah tempat tinggal bagi ratusan monyet ekor panjang yang dapat dilihat dengan bebas di lingkungan alaminya.',
      image: './assets/MonkeyForest.jpg',
    },
    {
      title: 'Tanah Lot',
      description: 'Sebuah pura laut yang terletak di atas batu karang besar, memberikan pemandangan matahari terbenam yang spektakuler.',
      image: './assets/TanahLot.jpg',
    },
    {
      title: 'Tegalalang Rice Terrace',
      description: 'Teras-teras sawah yang indah di Tegallalang menawarkan pemandangan alam yang menakjubkan dan merupakan tempat yang populer untuk berfoto.',
      image: './assets/TegalalangRice.jpg',
    },
    {
      title: 'Uluwatu',
      description: 'Terletak di tebing tinggi yang menghadap Samudra Hindia, Pura Uluwatu menawarkan pemandangan laut yang menakjubkan dan pertunjukan tari Kecak di sore hari.',
      image: './assets/Uluwatu.jpg',
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
            <div className='h-[95px] md:h-36 lg:h-56 flex justify-center items-center md:bg-VividRed rounded-t-xl'>
              <img src={data.image} alt='' className='h-full w-full md:h-32 md:w-32 lg:h-52 lg:w-52 object-cover rounded-t-xl md:rounded-full'/>
            </div>

            <div className='flex flex-col justify-center items-center gap-1 p-2 lg:gap-4 lg:p-4'>
              <p className='text-sm font-bold md:text-base lg:text-xl'>{data.title}</p>
              <p className='text-xs md:text-sm lg:text-base text-justify px-3'>{(data.id) ? data.description : `${data.description.slice(0, 50)}...`}</p>
              <button className='bg-VividRed text-white text-xs md:text-base lg:text-lg px-6 py-1 mt-3 md:mt-1 rounded-xl'>Read More</button>
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
