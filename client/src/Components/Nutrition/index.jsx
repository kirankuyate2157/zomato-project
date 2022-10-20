import React from "react";

// component
import NutritionHeroCarousal from "./NutritionHeroCarousal";
import NutritionCarousal from "./NutritionCarousal";
import NutritionCard from "./NutritionCard";

const Nutrition = () => {
  return (
    <div className="container mx-auto px-4 lg:px-20 ">
      <NutritionHeroCarousal />
      <div className="my-6">
        <NutritionCarousal />
      </div>
      <div className="flex justify-between  flex-wrap ">
        <NutritionCard
          bg="red"
          name="Burn - Weight Balanace"
          image="https://dote.zmtcdn.com/prod/data/admin_assets/images/985/1db983abf8a38bdebb42171b5ea7d985_1614756360.png?output-format=webp"
          desc="This formula with VFill™ technology will help improve metabolism and support fat burn."
          price="600.00"
          actualPrice="320.00"
          service="30 tables monthly* "
        />
        <NutritionCard
          bg="red"
          name="HealthKart Immunity+"
          image="https://m.media-amazon.com/images/I/31cWdp3A0SL._SX300_SY300_QL70_FMwebp_.jpg"
          desc="HealthKart Immunity+, Immunity Boosters for Adults, Zinc, Vitamin C, B6, A, D, E & Immunity Blend of Amla, Giloy "
          price="699.00"
          actualPrice="348.00"
          service="60 Tablets monthly*"
        />
        <NutritionCard
          bg="red"
          name="Herbalvilla Immunity Booster for Adults "
          image="https://m.media-amazon.com/images/I/61AfZx8Rl7L._SL1100_.jpg"
          desc="Tulsi, Giloy, Ashwagandha & 11 Other ayurvedic Herbs"
          price="349.00"
          actualPrice="320.00"
          service="60 Casules monthly*"
        />
        <NutritionCard
          bg="red"
          name="Himalaya Ashvagandha - General Wellness"
          image="https://m.media-amazon.com/images/I/61AfZx8Rl7L._SL1100_.jpg"
          desc="Stress Relief,Restoring,Strengthening,Rejuvenates | Stress Relief | Rejuvenates Mind & Body "
          price="180.00"
          actualPrice="140.00"
          service="60 Tablets monthly*"
        />
        <NutritionCard
          bg="red"
          name="Charak Kofol Immunity"
          image="https://m.media-amazon.com/images/I/41ZqLt25uzL.jpg"
          desc="Goodness Of Giloy, Haldi, Pippali & Shunti, Immunity Enhancer For Complete Family, Children & elders"
          price="180.00"
          actualPrice="168.00"
          service="60 Tablets monthly*"
        />  <NutritionCard
          bg="red"
          name="Zingavita Omega 3 + Multivitamins"
          image="https://m.media-amazon.com/images/I/61bGFHENwmL._SL1500_.jpg"
          desc=" capsules help support the brain, joint, muscle and heart health, energy and immunity."
          price="1,412.00"
          actualPrice="699.00"
          service="120 Tablets monthly*"
        />
        <NutritionCard
          bg="red"
          name="Himalaya Ashvagandha - General Wellness"
          image="https://onemg.gumlet.io/xswkrt80bodw5wod0dxt.jpg"
          desc="Stress Relief,Restoring,Strengthening,Rejuvenates | Stress Relief | Rejuvenates Mind & Body "
          price="1,099.00"
          actualPrice="499.00"
          service="60 Casules monthly*"
        />
        <NutritionCard
          bg="red"
          name="Zingavita Multivitamins Women"
          image="https://onemg.gumlet.io/h2iqtxntjccduiofubnk.jpg"
          desc=" 45 Vitamins, Calcium & Herbal Extracts, Calci,Iron,Magnesium,Vitamin B & C,Zinc"
          price="899.00"
          actualPrice="329.00"
          service="120 Tablets in one bottle*"
        />  <NutritionCard
          bg="red"
          name="RawRX Organic Calcium and Vitamin D3 "
          image="https://onemg.gumlet.io/b0a0a8fac25e4d53b6b37195f84892af.jpg"
          desc="Vitamin C, Magnesium and Zinc for Bone Health & Joint Pain, Pack of 2"
          price="1,480.00"
          actualPrice="890.00"
          service="30 Tablets in one bottle*"
        />

      </div>
    </div>
  );
};

export default Nutrition;
