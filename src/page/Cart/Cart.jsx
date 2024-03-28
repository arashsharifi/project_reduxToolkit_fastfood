import React, { useEffect, useState } from "react";
import CommonSection from "../../components/UI/CommonSection/CommonSection";
import TbodyMobailBoodyStore from "../../components/TbodyMobailBoodyStore/TbodyMobailBoodyStore";
import { CgDollar } from "react-icons/cg";
import { useSelector } from "react-redux";

import notepic1 from "../../../src/assets/images/note1.jpg";
import notepic2 from "../../../src/assets/images/note2.png";
import { Link } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Cart() {
  const store = useSelector((state) => state.cart.cartItems);
  const totalAll = useSelector((state) => state.cart.totalAmount);
  const [singnal, setSignal] = useState(false);
  const [nameProduct, setNameProduct] = useState("");
  useEffect(() => {
    if (singnal) {
      toast.error(`remove : ${nameProduct} `, {
        position: "top-center",
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

  console.log(singnal);
  return (
    <div className="w-full flex flex-col">
      <div className="w-full mt-28 flex flex-col">
        <CommonSection title="your cart" />
        <div className="flex flex-col gap-3">
          <h2 className="text-center my-4 text-2xl text-red-600 ">
            your table
          </h2>
          {/* table for lg divises */}
          {/* mobail table */}
          {store.length === 0 ? (
            <div className="w-[80%] mx-auto flex flex-col md:flex-row justify-between p-4 items-center my-7 text-2xl text-center">
              <div className="w-64">
                <img className="w-full h-full" src={notepic1} alt="nooot" />
              </div>
              <div className="w-64">
                <img className="w-full h-full" src={notepic2} alt="nooot" />
              </div>
            </div>
          ) : (
            <TbodyMobailBoodyStore
              setSignal={setSignal}
              setNameProduct={setNameProduct}
            />
          )}

          <div className="w-[90%] mx-auto flex my-2 justify-center  md:justify-start   text-black  p-3">
            <div className=" p-3 flex items-center gap-2 text-2xl   rounded-lg">
              <p> totalAmount:</p>
              <div className="flex items-center gap-1 ">
                <span>
                  <CgDollar />
                </span>
                {store.length === 0 ? (
                  <p className="text-4xl text-black">0</p>
                ) : (
                  <p className="text-4xl text-red-600">{totalAll.toFixed(2)}</p>
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-xl text-black p-1 ml-4">
              please go to shiping will calculate at checkout
            </h4>
            <div className="flex gap-2 m-5 ">
              <button className="bg-red-600 text-white px-4 py-2 rounded-lg shadow-md duration-200 hover:shadow-gray-700">
                <Link to="/foods">Continue Shopping</Link>
              </button>
              <button className="bg-red-600 text-white px-4 py-2 rounded-lg shadow-md duration-200 hover:shadow-gray-700">
                <Link to="/checkout">Proceed to checkout </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
