import React, { useEffect, useState } from "react";
import { CgDollar } from "react-icons/cg";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { MdOutlineDeleteForever } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/shopping-cart/cartSlice";

export default function TbodyMobailBoodyStore({ setSignal, setNameProduct }) {
  const storeDatas = useSelector((state) => state.cart.cartItems);

  const dispatch = useDispatch();

  function deleteHandler(idObj) {
    dispatch(cartActions.deleteItem(idObj));
    setSignal(true);
  }

  return (
    <>
      <div className="w-[90%] mx-auto m-3 overflow-auto rounded-lg shadow-lg hidden md:block">
        <table className="w-full">
          <thead className="bg-gray-50 border-b-2 border-gray-200">
            <tr>
              <th className=" w-[15%] p-3 text-sm font-semibold tracking-wide text-left ">
                image
              </th>
              <th className=" w-[30%]  p-3 text-sm font-semibold tracking-wide text-left ">
                product Title
              </th>
              <th className=" w-[15%] p-3 text-sm font-semibold tracking-wide text-left ">
                Price
              </th>
              <th className="w-[15%] p-3 text-sm font-semibold tracking-wide text-left ">
                Quantity
              </th>
              <th className="w-[15%] p-3 text-sm font-semibold tracking-wide text-left ">
                Dlete
              </th>
            </tr>
          </thead>
          <tbody className=" divide-gray-100 w-full ">
            {storeDatas.map((store) => (
              <Tr
                key={store.id}
                data={store}
                deleteHandler={deleteHandler}
                setNameProduct={setNameProduct}
              />
            ))}
          </tbody>
        </table>
      </div>
      <div className="grid grid-cols-1 gap-4 md:hidden m-4">
        {storeDatas.map((store) => (
          <MoBaileTr
            key={store.id}
            data={store}
            deleteHandler={deleteHandler}
            setNameProduct={setNameProduct}
          />
        ))}
      </div>
    </>
  );
}

const Tr = ({ data, deleteHandler, setNameProduct }) => {
  console.log(data);
  const { id, image01, title, quantity, totalPrice } = data;
  return (
    <tr>
      <td className="p-3 ">
        <div className="w-20">
          <img className="w-full h-full" src={image01} alt="nooot" />
        </div>
      </td>
      <td className="font-bold text-xl">
        <p className="ml-2">{title}</p>
      </td>
      <td>
        <div className="flex gap-1 items-center">
          <span>
            <CgDollar className="text-red-700 text-xl" />
          </span>
          <p>{totalPrice.toFixed(2)}</p>
        </div>
      </td>
      <td>
        <div className=" ml-2 flex gap-1 items-center">
          <span>
            <MdOutlineProductionQuantityLimits className="text-red-700 text-xl" />
          </span>
          <p className="text-xl">{quantity}</p>
        </div>
      </td>
      <td>
        <div
          onClick={() => {
            deleteHandler(id);
            setNameProduct(title);
          }}
          className="flex w-20 justify-center p-3 bg-red-600 rounded-lg shadow-lg duration-300 hover:shadow-gray-400 cursor-pointer"
        >
          <MdOutlineDeleteForever className="text-white text-xl" />
        </div>
      </td>
    </tr>
  );
};

const MoBaileTr = ({ data, deleteHandler, setNameProduct }) => {
  const { id, image01, price, title, quantity, totalPrice, desc } = data;
  return (
    <div className="bg-white border-red-600 border-2  space-y-3 p-4 rounded-lg shadow-lg shadow-red-300 block md:hidden">
      <div className="flex flex-col p-2 gap-3 space-x-2 text-sm ">
        <div className="w-20">
          <img
            className="w-full h-full duration-200 hover:scale-125"
            src={image01}
            alt="nooot"
          />
        </div>
        <div className="font-bold text-xl italic flex gap-2 items-center ">
          <p className="text-gray-400 text-[16px]">name is :</p> {title}
        </div>
        <div className="flex gap-1 items-center   ">
          <p className="text-gray-400 text-[16px]">price is:</p>
          <div className="flex gap-1 items-center ">
            <span className="text-red-700 text-xl">
              <CgDollar />
            </span>
            <p className="text-xl">{totalPrice}</p>
          </div>
        </div>
        <div className="flex gap-1 items-center   ">
          <p className="text-gray-400 text-[16px]">quantity is:</p>
          <div className="flex gap-1 items-center ">
            <span className="text-red-700 text-xl">
              <MdOutlineProductionQuantityLimits />
            </span>
            <p className="text-xl">{quantity}</p>
          </div>
        </div>
      </div>
      <div className="max-w-[100%]  p-4 text-sm  italic">{desc}</div>
      <div className="p-3">
        <button
          onClick={() => {
            deleteHandler(id);
            setNameProduct(title);
          }}
          className="bg-red-600 flex justify-center text-white px-2 py-1 w-20 rounded-lg shadow-lg duration-300 hover:shadow-gray-600 cursor-pointer"
        >
          <MdOutlineDeleteForever className="text-xl" />
        </button>
      </div>
    </div>
  );
};
