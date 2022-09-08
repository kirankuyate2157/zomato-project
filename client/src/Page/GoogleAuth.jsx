import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

// redux action
import { googleAuth } from "../Redux/Reducer/Auth/Auth.action";

const GoogleAuth = () => {
  const { token } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      dispatch(googleAuth(token)).then(() => navigate("/delivery"));
    }
  }, [token]);

  return <>Loading, Please wait. </>;
};

export default GoogleAuth;
