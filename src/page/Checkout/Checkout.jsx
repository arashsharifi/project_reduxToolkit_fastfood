import React, { useState } from "react";

import { CgDollar } from "react-icons/cg";

import CommonSection from "../../components/UI/CommonSection/CommonSection";
import { useSelector } from "react-redux";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Checkout() {
  const [enterName, setEnterName] = useState("");
  const [enteremail, setEnterEmail] = useState("");
  const [enterNumber, setEnterNumber] = useState("");
  const [enterCountry, setEnterCountry] = useState("");
  const [enterCity, setEnterCity] = useState("");
  const [enterPostalCode, setEnterPostalCode] = useState("");

  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const shipingcust = 30;

  const totalAmountShiping = totalAmount + Number(shipingcust);
  const dataPerson = [];
  function paymentSubmitHandler(e) {
    e.preventDefault();
    const person = {
      name: enterName,
      email: enteremail,
      number: enterNumber,
      country: enterCountry,
      city: enterCity,
      postalCode: enterPostalCode,
    };

    dataPerson.push(person);
    toast.success(`nice hellow ${enterName} wellcome`, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    setEnterName("");
    setEnterEmail("");
    setEnterNumber("");
    setEnterCountry("");
    setEnterCity("");
    setEnterPostalCode("");
  }

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col mt-28">
        <CommonSection title="checkout" />
        <div className="flex gap-3 w-[80%] mx-auto">
          <div className="w-[70%]  ">
            <div className="w-full text-lg flex flex-col gap-2">
              <h1 className="self-start text-2xl font-bold m-2 italic">
                Shipping Cart
              </h1>
              <div className="w-full bg-transparent">
                <form
                  className="w-full flex flex-col gap-3 p-3 mb-4"
                  action="#"
                  onSubmit={paymentSubmitHandler}
                >
                  <div className="p-2 border-b-2 border-gray-700">
                    <input
                      className="outline-0 border-none text-gray-500 placeholder:text-gray-500 w-full p-2"
                      placeholder="Enter Your Name"
                      type="text"
                      onChange={(e) => setEnterName(e.target.value)}
                      value={enterName}
                      required
                    />
                  </div>
                  <div className="p-2 border-b-2 border-gray-700">
                    <input
                      className="outline-0 border-none text-gray-500 placeholder:text-gray-500 w-full p-2"
                      placeholder="Enter Your email"
                      type="text"
                      onChange={(e) => setEnterEmail(e.target.value)}
                      value={enteremail}
                      required
                    />
                  </div>
                  <div className="p-2 border-b-2 border-gray-700">
                    <input
                      className="outline-0 border-none text-gray-500 placeholder:text-gray-500 w-full p-2"
                      placeholder="Enter Your Number"
                      type="text"
                      onChange={(e) => setEnterNumber(e.target.value)}
                      value={enterNumber}
                      required
                    />
                  </div>
                  <div className="p-2 border-b-2 border-gray-700">
                    <input
                      className="outline-0 border-none text-gray-500 placeholder:text-gray-500 w-full p-2"
                      placeholder=" Country"
                      type="text"
                      onChange={(e) => setEnterCountry(e.target.value)}
                      value={enterCountry}
                      required
                    />
                  </div>
                  <div className="p-2 border-b-2 border-gray-700">
                    <input
                      className="outline-0 border-none text-gray-500 placeholder:text-gray-500 w-full p-2"
                      placeholder=" City"
                      type="text"
                      onChange={(e) => setEnterCity(e.target.value)}
                      value={enterCity}
                      required
                    />
                  </div>
                  <div className="p-2 border-b-2 border-gray-700">
                    <input
                      className="outline-0 border-none text-gray-500 placeholder:text-gray-500 w-full p-2"
                      placeholder=" Postal code"
                      type="text"
                      onChange={(e) => setEnterPostalCode(e.target.value)}
                      value={enterPostalCode}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-red-600 text-white px-3 py-2 rounded-lg duration-200 shadow-xl hover:shadow-gray-600 w-32"
                  >
                    payment
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="w-[30%] ">
            <div className="w-full bg-red-200 rounded-lg  flex flex-col gap-7 p-2 mt-12">
              <div className="flex flex-col">
                <div className="flex flex-col gap-1">
                  <div className="flex justify-between items-center ">
                    <p>subtotal:</p>
                    <div className="flex items-center gap-1 ">
                      <span className="text-black">
                        <CgDollar />
                      </span>
                      <p>{totalAmount.toFixed(2)}</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center ">
                    <p>shipping:</p>
                    <div className="flex items-center gap-1 ">
                      <span className="text-black">
                        <CgDollar />
                      </span>
                      <p>{shipingcust.toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between">
                <h2 className="font-bold text-black text-xl">total</h2>
                <p className="font-bold text-black text-xl flex items-center gap-2 ">
                  <span>
                    <CgDollar />
                  </span>
                  <span>{totalAmountShiping.toFixed(2)}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
