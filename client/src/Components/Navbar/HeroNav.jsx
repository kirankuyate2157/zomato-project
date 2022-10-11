import React, { useState } from "react";
import { CgSmartphone } from "react-icons/cg";
import { HiLocationMarker } from "react-icons/hi";
import { IoMdArrowDropdown } from "react-icons/io";
import { RiSearch2Line } from "react-icons/ri";
import gravatar from "gravatar";
import { useSelector } from "react-redux";

// components
import SignIn from "../Auth/SignIn";
import SignUp from "../Auth/SignUp";

const LargeNav = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const reduxState = useSelector((global) => global.user.user);

  return (
    <>
      <div className="">
        <div className="w-full absolute h-96">
          <img
            src="https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png"
            alt="Hero img"
            className="w-full h-full  "
          />
        </div>
        <div className="relative  container px-20 mx-auto flex justify-between pt-2 ">
          <div>
            <button className="text-gray-100 gap-1 text-xl flex items-center hover:text-gray-200">
              <CgSmartphone />
              Get the App
            </button>
          </div>
          <div className="gap-8 flex ml-5">
            <button className="text-gray-200 text-xl hover:text-gray-200">
              Investor Relations
            </button>
            <button className="text-white text-xl hover:text-gray-200">
              Add restaurant
            </button>
            {reduxState?.user?.fullname ? (
              <div className=" gap-8 flex ml-5">
                {" "}
                <div
                  onClick={() => setIsDropDownOpen((prev) => !prev)}
                  className="border p-2 border-gray-300 text-zomato-400 w-full h-20 rounded-full"
                >
                  <img
                    src={gravatar.url(reduxState?.user?.email)}
                    alt={reduxState?.user?.email}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                {isDropDownOpen && (
                  <div className="absolute shadow-lg py-3  -right-4 w-full bg-white z-30 flex flex-col gap-2">
                    <button>Sign Out</button>
                  </div>
                )}
              </div>
            ) : (
              <div className=" gap-8 flex ml-5 ">
                <button
                  onClick={SignIn}
                  className="text-white text-xl  hover:text-gray-200"
                >
                  Login
                </button>
                <button
                  onClick={SignUp}
                  className="text-white text-xl  hover:text-gray-200"
                >
                  Signup
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="relative  container px-20 mx-auto flex flex-col gap-8 items-center pt-10">
          <div className=" w-96 ">
            <img
              src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png"
              alt="logo"
              className="w-full h-full"
            />
          </div>
          <h1 className="text-4xl text-white">
            Discover the best food & drinks in Pune
          </h1>
          <div className=" w-2/3 bg-white shadow-md p-3 flex items-center gap-3  border border-gray-200 rounded-xl">
            <div className="flex items-center gap-2 border-r-2 border-gray-300 pr-2">
              <span className="text-zomato-400">
                <HiLocationMarker />
              </span>
              <input
                type="text"
                placeholder="Bengaluru"
                className=" focus:outline-none"
              />
              <IoMdArrowDropdown />
            </div>
            <div className="flex w-full items-center gap-2">
              <RiSearch2Line />
              <input
                type="search"
                placeholder="Search for restaurant, cuisine or a dish"
                className="w-full focus:outline-none"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const HeroNav = () => {
  const [openSignin, setOpenSignin] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);

  const openSignInmodal = () => setOpenSignin(true);
  const openSignUpmodal = () => setOpenSignup(true);
  return (
    <>
      <SignIn isOpen={openSignin} setIsOpen={setOpenSignin} />
      <SignUp isOpen={openSignup} setIsOpen={setOpenSignup} />

      <LargeNav SignIn={openSignInmodal} SignUp={openSignUpmodal} />
    </>
  );
};

export default HeroNav;
