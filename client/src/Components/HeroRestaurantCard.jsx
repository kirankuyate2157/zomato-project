import React from "react";

const HeroRestaurantCard = (props) => {
  return (
    <>
      <div class="a-box">
        <div class="img-container">
          <div class="img-inner">
            <div class="inner-skew">
              <img src={props.image} alt="img" />
            </div>
          </div>
        </div>
        <div class="text-container">
          <h3>{props.title}</h3>
          <div>{props.desc}</div>
        </div>
      </div>
    </>
  );
};
export default HeroRestaurantCard;
