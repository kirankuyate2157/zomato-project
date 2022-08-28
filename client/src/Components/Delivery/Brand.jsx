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
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    PrevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="my-5 mb-32">
      <Slider {...settings}>
        {logos.map((logo) => (
          <div className="w-24 h-24 mx-3 bg-white shadow">
            <img
              src={logo}
              alt="brand"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Brand;
