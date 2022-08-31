import React from "react";
import Slider from "react-slick";

// components
import { NextArrow, PrevArrow } from "../CarousalArrow";

const Brand = (props) => {
  const logos = [
    "https://b.zmtcdn.com/data/brand_creatives/logos/775f928725d1a9dd80422632de22c224_1611377090.png?output-format=webp",
    "https://b.zmtcdn.com/data/brand_creatives/logos/396a89cdb1f7a999717b01aa98da7017_1631990893.png?output-format=webp",
    "https://b.zmtcdn.com/data/brand_creatives/logos/84edd5489389f21069c09f0c88ea8abb_1628179363.png?output-format=webp",
    "https://b.zmtcdn.com/data/brand_creatives/logos/05a2c24a8de3f8fe07fc46a07fdbba99_1611576819.png?output-format=webp",
    "https://b.zmtcdn.com/data/brand_creatives/logos/45137b90df2f1154a8766b00c03c8fc3_1655798578.png?output-format=webp",
    "https://b.zmtcdn.com/data/brand_creatives/logos/b61270c5ac3356384460b1c2a1a35071_1633121947.png?output-format=webp",
    "https://b.zmtcdn.com/data/brand_creatives/logos/d3c593271933bba9027ab27e60e7e9c9_1605068098.png?output-format=webp",
    "https://b.zmtcdn.com/data/brand_creatives/logos/acc68e452e5e8ea16d56292838cd0056_1659429791.png?output-format=webp",
  ];
  const SettingsCast = {
    Infinity: true,
    autoplay: false,
    arrow: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    InitialSlide: 0,
    nextArrow: <NextArrow />,
    PrevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          focusMode: true,
          slidesToScroll: 2,
          InitialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          focusMode: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className=" mb-5 md:pt-9 ">
      <h1 className="text-3xl bold  my-5">Top brands for you</h1>
      <Slider {...SettingsCast}>
        {logos.map((logo) => (
          <div className="flex flex-col bg-white items-center">
            <div className="w-56 h-56 z-10 rounded-2xl border border-gray-100 shadow-md">
              <img
                src={logo}
                alt="brand"
                className="w-full h-full rounded-2xl  "
              />
            </div>
            <h1 className="text-xl  text-gray-800">{props.castName}</h1>
            <h5 className="text-sm  text-gray-500"> {props.role}</h5>
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default Brand;
