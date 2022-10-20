import React from "react";
import Slider from "react-slick";
import { BiChevronRight } from "react-icons/bi";
// components
import PictureCarousalCard from "../PictureCarousal";
import { NextArrow, PrevArrow } from "../CarousalArrow";

const DiningCarousal = () => {
  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
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

  const collectionData = [{
    image: 'https://b.zmtcdn.com/data/collections/bf4aa44d8f97974610e14ebc69f90528_1665575735.jpg',
    special: "BingsWorthy Desserts",
    link: "https://www.zomato.com/pune/bingeworthy-desserts",
    places: "11"
  }, {
    image: 'https://b.zmtcdn.com/data/collections/90999c2395ba9c9c40998607c8dd5af1_1581058174.jpg',
    special: "Romantic Dining",
    link: "https://www.zomato.com/pune/romantic-restaurants",
    places: "9"
  }, {
    image: 'https://b.zmtcdn.com/data/collections/f6d732dc7432ad6e80a309cce6f0745a_1665640262.jpg',
    special: "Greate Buffets",
    link: "https://www.zomato.com/pune/best-buffet",
    places: "8"
  }, {
    image: 'https://b.zmtcdn.com/data/collections/9b4dd41866f756721389ace7b80c0fa1_1665574907.jpg',
    special: "Insta-Worthy",
    link: "https://www.zomato.com/pune/insta-worthy",
    places: "59"
  }, {
    image: 'https://b.zmtcdn.com/data/collections/08f7a8086de7ea36c15770ff7126bb46_1665575340.jpg',
    special: "Best bars & pubs",
    link: "https://www.zomato.com/pune/best-bars-and-pubs",
    places: "12"
  }, {
    image: 'https://b.zmtcdn.com/data/collections/d9eea3ef785def3a1d4e19c89bf19b11_1660816040.jpg',
    special: "World on your plates",
    link: "https://www.zomato.com/pune/world-cuisine",
    places: "11"
  }, {
    image: 'https://b.zmtcdn.com/data/collections/fb00fe5f8cd009bd572b77cc4a3816cc_1665573878.jpg',
    special: "Super sea foods",
    link: "https://www.zomato.com/pune/seafood",
    places: "12"
  }, {
    image: 'https://b.zmtcdn.com/data/collections/4ac24b02c823d846cb1a852f421689ca_1665576973.jpg',
    special: "Luxury At its Best",
    link: "https://www.zomato.com/pune/fine-dining-restaurants",
    places: "11"
  }, {
    image: 'https://b.zmtcdn.com/data/collections/a1d596102aea4ffc5f144f426c1e5283_1665580770.jpg',
    special: "Work friendlily",
    link: "https://www.zomato.com/pune/work-friendly-places",
    places: "11"
  },]

  return (
    <div className=" container mx-auto px-4 lg:px-20 ">
      <h1 className="text-3xl  font-semibold my-8 pt-5">Collections</h1>
      <div className="flex items-center justify-between mb-3">
        <p className="items-center text-xl text-gray-600">
          Explore curated lists of top restaurants, cafes, pubs, and bars in
          Pune, based on trends...
        </p>
        <span className="flex text-red-500 items-center text-xl  cursor-pointer ">
          All collections in pune
          <BiChevronRight />
        </span>
      </div>
      <Slider {...settings}>
        {collectionData.map((data) => (
          <PictureCarousalCard {...data} />
        ))}

      </Slider>
    </div>
  );
};
export default DiningCarousal;
