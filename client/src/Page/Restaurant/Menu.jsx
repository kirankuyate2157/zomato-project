import React, { useState } from "react";

// component
import MenuCollection from "../../Components/Restaurant/MenuCollection";
const Menu = () => {
    const [menus,] = useState([]);

    return (
        <>
            <div className="flex flex-wrap gap-3">
                {menus.map((menu) => (
                    <MenuCollection {...menu} />
                ))}
            </div>
        </>
    );
};

export default Menu;