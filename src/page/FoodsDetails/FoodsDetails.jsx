import React, { useEffect, useState } from "react";

import { LuDollarSign } from "react-icons/lu";

import { products } from "../../assets/fake-data/products";

import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/shopping-cart/cartSlice";

import pic from "../../../src/assets/images/product_01.1.jpg";

import CommonSection from "../../components/UI/CommonSection/CommonSection";
import ProductsCart from "../../components/UI/Products-Cart/ProductsCart";

export default function FoodsDetails() {
  const [tap, setTap] = useState("desc");
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [reviewMsg, setreviewMsg] = useState("");

  const { id } = useParams();

  const product = products.find((product) => product.id === Number(id));

  const [previewImg, setPreviewImg] = useState(product.image01);

  const { title, price, category, desc, taste, image01 } = product;

  const relatedProduct = products.filter((item) => category === item.category);

  const dispatch = useDispatch();

  function addItemHandler() {
    dispatch(
      cartActions.addItem({
        id,
        title,
        price,
        category,
        desc,
        taste,
        image01,
      })
    );
  }

  // const addItemHandler = () => {
  //   dispatch(
  //     cartActions.addItem({
  //       title,
  //       price,
  //       category,
  //       desc,
  //       taste,
  //       image01,
  //     })
  //   );
  // };

  function submitHandler(e) {
    e.preventDefault();
    console.log("yesss");
  }

  //why???
  useEffect(() => {
    setPreviewImg(product.image01);
  }, [product]);

  //زمانی که صفحه بیاد از اول اسکرول میاد
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  return (
    <div className=" w-full flex flex-col">
      <div className="flex flex-col  mt-28 ">
        <CommonSection title={title} />
        <div className="flex flex-col md:flex-row gap-10 w-[80%] md:w-[90%] lg:w-[80%] mx-auto p-4  ">
          <div className="flex md:flex-col gap-6">
            <div
              onClick={() => setPreviewImg(product.image01)}
              className="w-24"
            >
              <img
                className="w-full h-full hover:scale-125 duration-300 cursor-pointer"
                src={product.image01}
                alt="nooot"
              />
            </div>
            <div
              onClick={() => setPreviewImg(product.image02)}
              className="w-24"
            >
              <img
                className="w-full h-full hover:scale-125 duration-300 cursor-pointer"
                src={product.image02}
                alt="nooot"
              />
            </div>
            <div
              onClick={() => setPreviewImg(product.image03)}
              className="w-24"
            >
              <img
                className="w-full h-full hover:scale-125 duration-300 cursor-pointer"
                src={product.image03}
                alt="nooot"
              />
            </div>
          </div>
          <div>
            <div className="w-[300px] md:w-[250px] lg:w-[300px] flex p-5 items-center justify-between">
              <img className="h-full w-full" src={previewImg} alt="nooot" />
            </div>
          </div>
          <div className="flex flex-col justify-center gap-4 w-[60%]  p-3 ">
            <h1 className="text-xl font-bold  italic  ">{title}</h1>
            <div className="flex gap-3 p-1 items-center">
              <p className="text-red-600">price:</p>
              <div className="font-bold text-2xl flex items-center font-mono italic">
                <span>
                  <LuDollarSign className="text-red-600" />
                </span>
                <span className="text-red-600">{price}</span>
              </div>
            </div>
            <div className="flex gap-4">
              <p>{category}</p>
              <p className="bg-red-200 px-2 py-1 rounded-lg">Burger</p>
            </div>
            <button
              onClick={addItemHandler}
              className="bg-red-600 px-2 py-2 rounded-lg text-white w-[60%] md:w-[60%] lg:w-[40%] font-bold duration-300 hover:shadow-xl"
            >
              add to cart
            </button>
          </div>
        </div>
        <div className="flex flex-col w-[80%] mx-auto  ">
          <div className="border-b border-gray-400   w-full mb-1">
            <div className="flex gap-2">
              <button
                onClick={() => setTap("desc")}
                className={`bg-transparent px-3 py-2 ${
                  tap === "desc" ? "text-red-600" : "text-black"
                }  duration-300 hover:shadow-md`}
              >
                Decription
              </button>
              <button
                onClick={() => setTap("rev")}
                className={`bg-transparent ${
                  tap === "rev" ? "text-red-600" : "text-black"
                } px-3 py-2 duration-300 hover:shadow-md`}
              >
                Review
              </button>
            </div>
          </div>
          <div className="w-full justify-start ">
            {tap === "desc" ? (
              <p className="text-gray-600">{desc}</p>
            ) : (
              <div className="w-full md:w-[90%]  flex flex-col md:flex-row gap-5 md:gap-2">
                <div className=" p-5 grid grid-cols-2 md:grid-cols-3 gap-4  w-full   overflow-scroll overflow-x-auto    ">
                  <div className="flex flex-col gap-2 border-b-2 border-gray-800 w-full">
                    <h1 className="text-xl">jone doa</h1>
                    <p className=" text-gray-500 text-sm">joneDoa@gmail.com</p>
                    <p className=" text-gray-800 text-sm  mb-3">
                      great product
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 border-b-2 border-gray-800 w-full">
                    <h1 className="text-xl">jone doa</h1>
                    <p className=" text-gray-500 text-sm">joneDoa@gmail.com</p>
                    <p className=" text-gray-800 text-sm  mb-3">
                      great product
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 border-b-2 border-gray-800 w-full">
                    <h1 className="text-xl">jone doa</h1>
                    <p className=" text-gray-500 text-sm">joneDoa@gmail.com</p>
                    <p className=" text-gray-800 text-sm  mb-3">
                      great product
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 border-b-2 border-gray-800 w-full">
                    <h1 className="text-xl">jone doa</h1>
                    <p className=" text-gray-500 text-sm">joneDoa@gmail.com</p>
                    <p className=" text-gray-800 text-sm  mb-3">
                      great product
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 border-b-2 border-gray-800 w-full">
                    <h1 className="text-xl">jone doa</h1>
                    <p className=" text-gray-500 text-sm">joneDoa@gmail.com</p>
                    <p className=" text-gray-800 text-sm  mb-3">
                      great product
                    </p>
                  </div>
                </div>
                <div className="bg-red-200  gap-2 w-full md:w-[70%] p-3 rounded-lg shadow-xl">
                  <form
                    className="w-full flex flex-col gap-4"
                    action="#"
                    onSubmit={submitHandler}
                  >
                    <input
                      className=" outline-0  border-b-2 b border-gray-400 text-gray-800 font-lg placeholder:text-gray-800  bg-transparent p-2"
                      type="text"
                      placeholder="Enter your name"
                      onChange={(e) => setEnteredName(e.target.value)}
                      required
                    />
                    <input
                      className="outline-0 border-b-2 b border-gray-400 text-gray-800 font-lg placeholder:text-gray-800 font-lg  bg-transparent p-2 "
                      type="text"
                      placeholder="Enter your name"
                      onChange={(e) => setEnteredEmail(e.target.value)}
                      required
                    />
                    <textarea
                      name="text"
                      className="w-full outline-0 bg-transparent h-[200px] p-4"
                      placeholder="enter somthing.."
                      required
                    ></textarea>
                    <button
                      className="bg-red-600 px-1 py-3 rounded-lg text-white w-[20%] m-3"
                      type="submit"
                    >
                      submit
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
          <div className="flex flex-col w-[90%] mx-auto">
            <h4 className="text-2xl my-3 ml-5 text-red-600 ">
              Maybe for you like this category
            </h4>
            <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-4 ">
              {relatedProduct.map((item) => (
                <ProductsCart data={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
