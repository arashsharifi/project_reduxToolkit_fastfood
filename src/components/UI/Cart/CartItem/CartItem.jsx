import React from "react";
import pic from "../../../../assets/images/product_01.1.jpg";
import { RiChatDeleteFill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../../store/shopping-cart/cartSlice";
import { Link } from "react-router-dom";

export default function CartItem({ data, setSignal, setNameProduct }) {
  const dispatch = useDispatch();

  function icrementItem() {
    dispatch(
      cartActions.addItem({
        id: data.id,
        title: data.title,
        price: data.price,
        taste: data.taste,
        image01: data.image01,
      })
    );
  }
  function decrementItem() {
    dispatch(cartActions.removeItem(data.id));
  }

  function deleteItemHandler() {
    dispatch(cartActions.deleteItem(data.id));
    setSignal(true);
    setNameProduct(data.title);
  }

  return (
    <div className="flex  w-full bg-white  rounded-lg shadow-xl p-4">
      <div className="flex p-1 items-start">
        <div className="w-16">
          <img className="h-full w-full" src={data.image01} alt="nooot" />
        </div>
      </div>
      <div className="relative flex flex-col w-full gap-4 p-3">
        <div
          onClick={() => deleteItemHandler()}
          className="w-6 absolute top-4 right-3 cursor-pointer"
        >
          <RiChatDeleteFill className="h-full w-full" />
        </div>
        <h1 className="relative text-lg font-bold italic max-w-[80%]">
          <Link to={`/foods/${data.id}`}>{data.title}</Link>
          <p
            className={` absolute text-white px-2 py-1 rounded-lg italic top-[-27px] right-10 text-[11px] ${
              data.taste === "hot" ? "bg-red-800" : "bg-blue-400"
            }`}
          >
            {data.taste}
          </p>
        </h1>
        <div className="flex items-center p-1 justify-between w-full">
          <div className="flex gap-1 text-sm font-bold">
            {" "}
            <span>{data.quantity}</span> <span>X</span>
          </div>
          <div className="text-2xl text-red-600 flex items-center">
            <span>$</span>
            <span>{data.totalPrice.toFixed(2)}</span>
          </div>
        </div>
        <div className="bg-red-100 rounded-lg p-1 px-2 flex justify-between items-center w-[70%]   ">
          <span
            onClick={() => icrementItem()}
            className="text-3xl cursor-pointer"
          >
            +
          </span>
          <span className="text-2xl">{data.quantity}</span>
          <span
            onClick={() => decrementItem()}
            className="text-3xl cursor-pointer"
          >
            -
          </span>
        </div>
      </div>
    </div>
  );
}
