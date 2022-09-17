import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Redirect = () => {
  const navigate = useNavigate();
  const { _id } = useParams();
  useEffect(() => {
    navigate(`/restaurant/${_id}/overview`);
  }, []);

  return <div>hii</div>;
};

export default Redirect;
