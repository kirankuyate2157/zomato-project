import React, { useState, useEffect } from "react";

import { Link, useParams } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";

import Slider from "react-slick";
import ReactStars from "react-rating-stars-component";

// components
import MenuCollection from "../../Components/Restaurant/MenuCollection";
import MenuSimilarRestaurantcard from "../../Components/Restaurant/MenuSimilarRestaurant";
import { NextArrow, PrevArrow } from "../../Components/CarousalArrow";
import { ReviewCard, DefaultReviewCard } from "../../Components/Restaurant/Reviews/reviewCard";
import Mapview from "../../Components/Restaurant/Mapview";

import { getImage } from "../../Redux/Reducer/Image/Image.action";
import { getReviews } from "../../Redux/Reducer/Reviews/review.action";

const Overview = () => {
  const [menuImage, setMenuImages] = useState({ images: [] });
  const [Reviews, setReviewss] = useState([]);

  const { id } = useParams();

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
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

  const reduxState = useSelector(
    (globalStore) => globalStore.restaurant.selectedRestaurant.restaurant
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (reduxState) {
      dispatch(getImage(reduxState?.menuImage)).then((data) => {
        const images = [];
        data.payload.image.images.map(({ location }) => images.push(location));
        setMenuImages(images);
      });

      dispatch(getReviews(reduxState?._id)).then((data) =>
        setReviewss(data.payload.reviews)
      );
    }
  }, []);

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  const getLatLong = (mapAddress) => {
    return mapAddress?.split(",").map((item) => parseFloat(item));
  };

  return (
    <>
      <div className="flex flex-col md:flex-row relative">
        <div className="w-full md:w-8/12">
          <h2 className="font-semibold text-lg md:text-xl my-4">
            About this place
          </h2>
          <div className="flex justify-between items-center">
            <h4 className="text-lg font-medium">Menu</h4>
            <Link to={`/restaurant/${id}/menu`}>
              <span className="flex items-center gap-1 text-zomato-400">
                See all menu <IoMdArrowDropright />
              </span>
            </Link>
          </div>
          <div className="flex flex-wrap gap-3 my-4">
            <MenuCollection menuTitle="Menu" pages="2" image="https://b.zmtcdn.com/data/menus/133/19486133/e1d0795e8889c0229b17b803ad673a7c.jpg" />
            <MenuCollection menuTitle="Menu" pages="4" image="https://b.zmtcdn.com/data/menus/677/11677/dadb365a5dff4d99c2a78509f23a3fab.jpg" />
            <MenuCollection menuTitle="Menu" pages="3" image={menuImage} />
          </div>
          <h4 className="text-lg font-medium my-4">Cuisines</h4>
          <div className="flex flex-wrap gap-2">
            {reduxState?.cuisine.map((data) => (
              <span className="border border-gray-600 text-blue-600 px-2 py-1 rounded-full">
                {data}
              </span>
            ))}
          </div>
          <div className="my-4">
            <h4 className="text-lg font-medium">Average Cost</h4>
            <h6>₹{reduxState?.averageCost} for one order (approx.)</h6>
            <small className="text-gray-500">
              Exclusive of applicable taxes and charges, if any
            </small>
          </div>
          <div className="my-4">
            <h4 className="text-lg font-medium">Similar Restaurants</h4>
            <div>
              <Slider {...settings}>
                <MenuSimilarRestaurantcard
                  image="https://b.zmtcdn.com/data/pictures/chains/0/18401590/4e2654de938e0657dd8b1ca3efb05f50_o2_featured_v2.jpg"
                  title="MOJO Pizza"
                />
                <MenuSimilarRestaurantcard
                  image="https://b.zmtcdn.com/data/dish_photos/1cf/4fada61f3fb26cd5b1286313410ad1cf.jpg"
                  title="tea"
                />
                <MenuSimilarRestaurantcard
                  image="https://b.zmtcdn.com/data/dish_photos/047/21d91c5a0d086a19882fc2c3540e0047.jpg"
                  title="Veg Club Sandwich"
                />
                <MenuSimilarRestaurantcard
                  image="https://b.zmtcdn.com/data/dish_photos/9fd/a8710239f6cd67ea3db7ae74a10d79fd.jpg"
                  title="Paneer-Cheese Roll"
                />
                <MenuSimilarRestaurantcard
                  image="https://b.zmtcdn.com/data/pictures/chains/9/18935969/5d372075b1ac3c14cda71b0e9b82924d_o2_featured_v2.jpg"
                  title="Mendarian Ovak"
                /><MenuSimilarRestaurantcard
                  image="https://b.zmtcdn.com/data/pictures/chains/1/12511/8cbf90f3dbb6eaabad59566dc839f96c_o2_featured_v2.jpg"
                  title="Cafe Durga "
                /><MenuSimilarRestaurantcard
                  image="https://b.zmtcdn.com/data/pictures/chains/9/18874569/ed369b5c2aa178c223ede5c870ac3d4f_o2_featured_v2.jpg"
                  title="The good Bowl"
                /><MenuSimilarRestaurantcard
                  image="https://b.zmtcdn.com/data/pictures/0/13480/e551937843ca787fcfc1154cd654f113_o2_featured_v2.jpg"
                  title="MH-12 pav-bhaji"
                /><MenuSimilarRestaurantcard
                  image="https://b.zmtcdn.com/data/pictures/6/10916/21308ba165f0fa91c32f2b49ee7d253d_o2_featured_v2.jpg"
                  title="Global Punjab"
                />
              </Slider>
            </div>
          </div>
          <div className="my-4">
            <h4 className="text-lg font-medium">
              Rate your delivery experience
            </h4>
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              activeColor="#ffd700"
            />
            {Reviews.map((reviewData) => (
              <ReviewCard {...reviewData} />
            ))}
          </div>

          <div className="my-4 w-full  md:hidden flex flex-col gap-4">
            <Mapview
              title={reduxState?.name}
              phno={`+91${reduxState?.contactNumber}`}
              mapLocation={getLatLong(reduxState?.mapLocation)}
              address={reduxState?.address}
            />
          </div>
          <div className="my-4 flex flex-col gap-4">
            <DefaultReviewCard />
            <DefaultReviewCard />
            <ReviewCard />

          </div>
          <div className="my-4 flex flex-col gap-4"></div>
        </div>
        <aside
          style={{ height: "fit-content" }}
          className="hidden md:flex md:w-4/12 sticky rounded-xl top-2 bg-white p-3 shadow-md flex flex-col gap-4"
        >
          <Mapview
            title={reduxState?.name}
            phno={`+91${reduxState?.contactNumber}`}
            mapLocation={getLatLong(reduxState?.mapLocation)}
            address={reduxState?.address}
          />
        </aside>
      </div>
    </>
  );
};

export default Overview;
