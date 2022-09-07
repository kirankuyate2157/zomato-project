import React from "react";
import Slider from "react-slick";
import { BiChevronRight } from "react-icons/bi";
// components
import PictureCarousalCard from "../PictureCarousal";
import { NextArrow, PrevArrow } from "../CarousalArrow";

const DiningCarousal = () => {
  const settings = {
    arrows: true,
    infinite: true,
    dots: true,
    speed: 500,

    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1264,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      }, {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          center: true,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          centerMode: true,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
    ],
  };

  return (
    <div className=" container mx-auto px-4 lg:px-20 ">
      <h1 className="text-3xl  font-semibold my-8 pt-5">Collections</h1>
      <div className="flex items-center justify-between gap-2 mb-3">
        <p className="items-center  text-base md:text-xl text-gray-600">
          Explore curated lists of top restaurants, cafes, pubs, and bars in
          Pune, based on trends...
        </p>
        <span className="flex text-red-500 items-center md:text-xl  cursor-pointer ">
          All collections in pune
          <BiChevronRight />
        </span>
      </div>
      <Slider {...settings}>
        <PictureCarousalCard />
        <PictureCarousalCard />
        <PictureCarousalCard />
        <PictureCarousalCard />
        <PictureCarousalCard />
        <PictureCarousalCard />
        <PictureCarousalCard />
      </Slider>
    </div>
  );
};
export default DiningCarousal;
