import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { baseStorage, getPromo } from "../util/api/api";
import useQuery from "../util/hooks/useQuery";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className="hidden md:block">
      <FaArrowAltCircleRight
        className={className}
        onClick={onClick}
        style={{ ...style, display: "block", color: "red" }}
      />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className="hidden md:block">
      <FaArrowAltCircleLeft
        className={className}
        onClick={onClick}
        style={{ ...style, display: "block", fontSize: "25px", color: "red" }}
      />
    </div>
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
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const { data: dataPromo, isLoading, isError } = useQuery(getPromo);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>error</div>;
  }

  if (!dataPromo) {
    return null;
  }

  return (
    <div class="w-11/12 md:w-3/4 m-auto">
      <div class="mt-7 lg:mt-20 text-center text-xs md:text-sm lg:text-base">
        <p className="font-bold pt-4 md:pt-6 lg:pt-10">Promo</p>
        <p>Here promo for you</p>
      </div>
      <div className="mt-6 lg:mt-9">
        <Slider {...settings}>
          {dataPromo.map((data) => (
            <div
              key={data.id}
              className="bg-white h-[180px] md:h-[223px] lg:h-[338px] text-black rounded-xl"
            >
              <div className="h-28 md:h-36 lg:h-56 flex justify-center items-center bg-VividRed rounded-t-xl border-x-2 border-t-2 border-gray-400">
                <img
                  src={baseStorage + data.foto_promo}
                  alt=""
                  className="h-24 w-24 md:h-32 md:w-32 lg:h-full lg:w-full rounded-full lg:object-cover lg:rounded-t-lg lg:rounded-b-none"
                />
              </div>

              <div className="flex flex-col justify-center items-center gap-1 p-2 lg:gap-4 lg:p-4 border-x-2 border-b-2 border-gray-400 rounded-b-xl ">
                <p className="text-sm font-bold md:text-base lg:text-xl">
                  {data.judul_promo}
                </p>
                <Link to="/PromoDetailsPage">
                  <button className="bg-VividRed text-white text-xs md:text-base lg:text-lg px-6 py-1 rounded-xl">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="mt-4 md:mt-8 lg:mt-16 pb-1" />
    </div>
  );
}
