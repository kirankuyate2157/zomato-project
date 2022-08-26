import React from "react";
import { Route } from "react-router-dom";

// Layout
import HomeLayout from "../Layout/Home.Layout";

const HomeLayoutHOC = ({ element: Element, ...rest }) => {
  return (
    <>
      <Route
        {...rest}
        element={(props) => (
          <HomeLayout>
            <Element {...props} />
          </HomeLayout>
        )}
      />
    </>
  );
};

export default HomeLayoutHOC;
