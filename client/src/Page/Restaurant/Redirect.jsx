import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Redirect = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    navigate(`/restaurant/123/overview`);
  }, []);

  return <div>hii</div>;
};

export default Redirect;
