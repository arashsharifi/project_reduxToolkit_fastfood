import React, { useEffect, useState } from "react";
import { FaDeleteLeft } from "react-icons/fa6";
import { FiDollarSign } from "react-icons/fi";
import CartItem from "./CartItem/CartItem";
import { Link } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useDispatch, useSelector } from "react-redux";
import { cartUiDashbordActions } from "../../../store/shopping-cart/cartUiSliceDashbord";

export default function Carts() {
  const [singnal, setSignal] = useState(false);
  const [nameProduct, setNameProduct] = useState("");
  const showVisible = useSelector((state) => state.cartUiDash.cartIsVisiable);
  const cartProducts = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  useEffect(() => {
    if (singnal) {
      toast.error(`remove : ${nameProduct} `, {
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setSignal(false);
    }
  }, [singnal]);

  const dispatch = useDispatch();

  function toggleCart() {
    dispatch(cartUiDashbordActions.toggle());
  }
  console.log(cartProducts);
  return (
    <div
      className={`fixed flex  inset-0 w-full h-full  bg-black bg-opacity-30 duration-700 backdrop-blur-sm z-50 ${
        showVisible ? "" : "hidden"
      }  
      `}
    >
      <div
        className={`flex fixed  right-0 w-[400px] duration-700  bg-white  h-[100%] z-50 ${
          showVisible ? "right-0" : "right-[-100%]"
        } `}
      >
        <div
          className={`absolute top-0 right-0 w-[400px]     flex flex-col  
           `}
        >
          <div>
            <div
              onClick={() => toggleCart()}
              className="cursor-pointer w-10 p-2"
            >
              <FaDeleteLeft className="w-full h-full" />
            </div>
          </div>
          <div className="w-full flex flex-col gap-8  h-[85vh] p-4 overflow-scroll overflow-x-hidden ">
            {cartProducts.length === 0 ? (
              <h6 className="text-red-600 font-bold text-2xl text-center">
                there is no order
              </h6>
            ) : (
              cartProducts.map((item, index) => (
                <CartItem
                  key={index}
                  data={item}
                  setSignal={setSignal}
                  setNameProduct={setNameProduct}
                />
              ))
            )}
          </div>
          <div className="bg-red-600 w-full h-[10vh] mt-1 flex gap-3 items-center justify-between p-3">
            <h2 className="text-white text-2xl font-bold ml-4 flex gap-2 items-center">
              subtotal:<span>{totalAmount.toFixed(2)}</span>
              <span className="text-white">
                <FiDollarSign />{" "}
              </span>
            </h2>
            <button className="bg-white rounded-lg px-4 py-2 duration-300 hover:shadow-lg shadow-black">
              <Link onClick={() => toggleCart()} to="/checkout">
                {" "}
                checkout
              </Link>
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
