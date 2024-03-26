import React, { useState } from "react";
import pic from "../../assets/images/res-logo.png";
import Navlinks from "../Navlinks/Navlinks";

import { RxHamburgerMenu } from "react-icons/rx";
import { ImCancelCircle } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { cartUiActions } from "../../store/shopping-cart/cartUiSlice";
import { cartUiDashbordActions } from "../../store/shopping-cart/cartUiSliceDashbord";

export default function Header() {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const dispatch = useDispatch();

  const store = useSelector((state) => state.cartUi.cartIsVisiable);

  function toggleCart() {
    dispatch(cartUiActions.toggle());
  }
  function toggleDashbord() {
    dispatch(cartUiDashbordActions.toggle());
  }
  return (
    <nav className="bg-white z-50 shadow-xl fixed left-0 right-0 opacity-90">
      <div className="flex  gap-1 w-[100%] md:w-[80%] mx-auto justify-between  md:p-0 p-3">
        <div className="flex flex-col gap-1 items-center p-3">
          <div className="w-16">
            <img className="h-full w-full" src={pic} alt="nooot" />
          </div>
          <h1 className=" text-lg">foody foods</h1>
        </div>
        <div className=" md:flex hidden items-center">
          <ul className="md:flex hidden uppercase items-center gap-8 ">
            <Navlinks />
          </ul>
        </div>
        <div className="z-50 p-5 md:w-auto w-[60%] flex justify-between  ">
          <div className="flex  md:hidden items-center gap-8  w-[10%]">
            <Link to="/login">
              <FaUser className="text-gray-400 text-2xl" />
            </Link>
            <div className=" relative">
              <FaShoppingBasket
                onClick={() => toggleDashbord()}
                className="text-gray-300 text-2xl cursor-pointer"
              />
              <div className="bg-red-600 rounded-full w-6 h-6 flex items-center justify-center absolute right-[-12px] top-[-21px]">
                <span className="text-white text-[12px] ">{totalQuantity}</span>
              </div>
            </div>
          </div>
          <div
            onClick={() => toggleCart()}
            className="text-3xl mt-3 md:hidden "
          >
            {store == false ? (
              <RxHamburgerMenu className="cursor-pointer " />
            ) : (
              <ImCancelCircle className="cursor-pointer " />
            )}
          </div>
        </div>
        <div className="hidden md:flex items-center gap-8  w-[10%]">
          <Link to="/login">
            <FaUser className="text-gray-400 text-2xl" />
          </Link>
          <div className=" relative">
            <FaShoppingBasket
              onClick={() => toggleDashbord()}
              className="text-gray-300 text-2xl cursor-pointer"
            />
            <div className="bg-red-600 rounded-full w-6 h-6 flex items-center justify-center absolute right-[-12px] top-[-21px]">
              <span className="text-white text-[12px] ">{totalQuantity}</span>
            </div>
          </div>
        </div>
        {/* mobail responsive */}
        <ul
          className={`md:hidden bg-white   flex flex-col gap-0 md:gap-12 absolute w-full h-full bottom-0 py-24 
          duration-500 ${store ? "left-0" : "left-[-100%]"} `}
        >
          <div className="flex flex-col gap-2">
            <div className="w-16 ml-4  ">
              <img className="w-full h-full" src={pic} alt="noot" />
            </div>
            <h1 className="text-sm ml-3  ">foody foods</h1>
          </div>
          <Navlinks />
          <div className="py-5 bg-white flex flex-col gap-4 p-4">
            <div className="flex gap-1">
              <span className="text-xl">
                <FaPhone className="text-red-700" />
              </span>
              <p className="text-sm"> 09365305248</p>
            </div>
            <div className="flex gap-1">
              <span className="text-xl">
                <MdEmail className="text-red-700" />
              </span>
              <p className="text-sm"> ArashSharfi1970@gmail.com</p>
            </div>
          </div>
        </ul>
      </div>
    </nav>
  );
}
