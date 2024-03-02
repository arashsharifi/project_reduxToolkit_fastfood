import React from "react";
import { FiDollarSign } from "react-icons/fi";

import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";
import { Link } from "react-router-dom";

export default function ProductsCart({ data }) {
  const dispatch = useDispatch();
  function addToCartHandler(data) {
    dispatch(
      cartActions.addItem({
        id: data.id,
        title: data.title,
        image01: data.image01,
        price: data.price,
        taste: data.taste,
        desc: data.desc,
      })
    );
  }
  return (
    <div className="relative w-full flex flex-col gap-2 p-3 border border-1 border-black shadow-md rounded-md">
      <div className="w-52 md:w-40 lg:w-32 self-center p-5">
        <img
          className="w-full h-full duration-200 hover:scale-125"
          src={data.image01}
          alt="noote"
        />
      </div>
      <h1 className=" relative font-bold text-center my-3">
        <Link to={`/foods/${data.id}`}>{data.title}</Link>
        <p
          className={` absolute text-white px-2 py-1 rounded-lg italic top-[-10px] right-0 text-[10px] ${
            data.taste === "hot" ? "bg-red-800" : "bg-blue-400"
          }`}
        >
          {data.taste}
        </p>
      </h1>
      <div className="w-[90%] mx-auto flex justify-between">
        <div className="flex items-center gap-1">
          <span>
            <FiDollarSign className="text-red-600" />
          </span>
          <p className="text-red-600">{data.price}</p>
        </div>
        <button
          onClick={() => addToCartHandler(data)}
          className="bg-red-600 text-white rounded-lg px-4 py-2 hover:shadow-xl shadow-black duration-300"
        >
          add to basket
        </button>
      </div>
    </div>
  );
}
