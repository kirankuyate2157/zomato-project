import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// component
import MenuCollection from "../../Components/Restaurant/MenuCollection";

// redux actions
import { getImage } from "../../Redux/Reducer/Image/Image.action";

const Menu = () => {
  const [menus, setMenus] = useState([]);
  const reduxState = useSelector(
    (globalStore) => globalStore.restaurant.selectedRestaurant.restaurant
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (reduxState) {
      dispatch(getImage(reduxState?.menuImage)).then((data) => {
        const images = [];
        data.payload.image.images.map(({ location }) => images.push(location));
        setMenus(images);
      });
    }
  }, []);

  return (
    <>
      <div className="flex flex-wrap gap-3">
        <MenuCollection menuTitle="Menu" pages="2" image="https://b.zmtcdn.com/data/menus/133/19486133/e1d0795e8889c0229b17b803ad673a7c.jpg" />
        <MenuCollection menuTitle="Menu" pages="4" image="https://b.zmtcdn.com/data/menus/677/11677/dadb365a5dff4d99c2a78509f23a3fab.jpg" />
        <MenuCollection menuTitle="Menu" pages={menus.length} image={menus} />
        {/* <h1>hello menu</h1> */}
      </div>
    </>
  );
};

export default Menu;
