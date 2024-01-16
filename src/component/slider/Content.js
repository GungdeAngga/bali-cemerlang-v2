import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", color: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", color: "red" }}
      onClick={onClick}
    />
  );
}

export default function Content() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
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
            dots: true
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
      title: 'Slide 1',
      description: 'This is the first slide for Slider 1.',
      image: './assets/image1.png',
    },
    {
      title: 'Slide 2',
      description: 'This is the second slide for Slider 1.',
      image: './assets/image2.png',
    },
    {
      title: 'Slide 3',
      description: 'This is the third slide for Slider 1.',
      image: './assets/image3.png',
    },
    {
      title: 'Slide 4',
      description: 'This is the first slide for Slider 1.',
      image: './assets/image1.png',
    },
    {
      title: 'Slide 5',
      description: 'This is the second slide for Slider 1.',
      image: './assets/image2.png',
    },
    {
      title: 'Slide 6',
      description: 'This is the third slide for Slider 1.',
      image: './assets/image3.png',
    },
    {
      title: 'Slide 7',
      description: 'This is the first slide for Slider 1.',
      image: './assets/image1.png',
    },
    {
      title: 'Slide 8',
      description: 'This is the second slide for Slider 1.',
      image: './assets/image2.png',
    },
    {
      title: 'Slide 9',
      description: 'This is the third slide for Slider 1.',
      image: './assets/image3.png',
    },
  ]


  return (
    <div class='w-3/4 m-auto'>
      <div className='mt-20'>
      <Slider {...settings}>
        {data.map ((d) => (
          <div className='bg-white h-[450px] text-black rounded-xl'>
            <div className='h-56 flex justify-center items-center'>
              <img src={d.image} alt='' className='h-full w-full'/>
            </div>

            <div className='flex flex-col justify-center items-center gap-4 p-4 border-2 rounded-b-xl'>
              <p className='text-xl font-bold'>{d.title}</p>
              <p>{d.description}</p>
              <button className='bg-VividRed text-white text-lg px-6 py-1 rounded-xl'>Read More</button>
            </div>
          </div>
        ))}
      </Slider>
      </div>

    </div>
  )
}
