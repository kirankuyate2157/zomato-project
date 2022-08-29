import React from "react";

import { useParams } from "react-router-dom";
// components
import Delivery from "./Delivery";
import Dining from "./Dining";
import Nightlife from "./Nightkife";

const Master = () => {
  const { type } = useParams();
  return (
    <div className="my-5">
      {type === "delivery" && <Delivery />}
      {type === "dining" && <Dining />}
      {type === "night" && <Nightlife />}
    </div>
  );
};

export default Master;
