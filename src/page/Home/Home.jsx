import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FaRegCheckCircle } from "react-icons/fa";

import hero from "../../assets/images/hero.png";
import infoPic from "../../assets/images/network.png";

import Category from "../../components/UI/category/Category";
import {
  DataSwiper,
  featurData,
  products,
} from "../../assets/fake-data/products";

import Menu from "../../components/UI/Menu/Menu";
import ProductsCart from "../../components/UI/Products-Cart/ProductsCart";
import whyPic from "../../assets/images/delivery-guy.png";
import SwiperSlider from "../../components/SwiperSlider/SwiperSlider";
export default function Home() {
  const [featurs, setFeaturs] = useState(featurData);
  const [productsData, setProductsData] = useState(products);
  const [hotPizza, setHotPizza] = useState([]);

  const AllCategorys = [
    "all",
    ...new Set(products.map((pro) => [pro.category, pro.categoryImg])),
  ];

  const [categories, setCategories] = useState(AllCategorys);

  function filterMenusHandler(category) {
    console.log(category);
    if (category === "a") {
      setProductsData(products);
      return;
    }
    let filtredMenus = products.filter((pro) => pro.category === category);

    setProductsData(filtredMenus);
  }

  useState(() => {
    const filteredData = products.filter(
      (product) => product.category === "Pizza" && product.taste === "hot"
    );
    setHotPizza(filteredData);
  }, []);
  return (
    <div className="w-full flex flex-col ">
      <div className="flex flex-col mt-28  ">
        <div className="flex flex-col-reverse md:flex-row w-[90%] mx-auto gap-8 my-9 justify-between  ">
          <div className="flex flex-col justify-between gap-8  p-2">
            <p className="text-2xl font-bold">Easy way to make an order</p>
            <h1 className="text-3xl md:text-5xl max-w-[70%]">
              <span className="text-3xl md:text-5xl text-red-800 font-bold italic">
                HUNGRY?
              </span>
              just wait food at{" "}
              <span className="text-3xl md:text-5xl text-red-800">
                your door
              </span>
            </h1>
            <p className="text-gray-500 max-w-[90%] md:w-[70%]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem
              velit ea tempora necese ratione vel?
            </p>
            <div className=" flex w-[90%] md:w-[70%] justify-between items-center p-3">
              <button className=" bg-red-600 text-white rounded-lg px-2 py-3 flex items-center gap-2 font-bold duration-300 hover:shadow-2xl hover:shadow-black">
                order now <IoIosArrowForward />
              </button>
              <button className=" bg-transparent border border-red-600 text-red-600   rounded-lg px-3 py-3  items-center  font-bold duration-300 hover:bg-red-600 hover:text-white">
                see all foods
              </button>
            </div>
          </div>
          <div className="w-[70%] mt-14">
            <img className="w-full h-full" src={hero} alt="noot" />
          </div>
        </div>
        <Category />
        <div className="flex flex-col gap-4 justify-center  items-center">
          <h4 className="text-red-800 text-lg">what we serve?</h4>
          <h5 className="max-w-[70%] text-2xl md:text-4xl ">
            just sit back at home we will{" "}
            <span className="text-2xl md:text-4xl  text-red-800">
              take care
            </span>
          </h5>
          <div className="flex flex-col">
            <p className="text-gray-400">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p className="text-gray-400">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div className="my-4 flex flex-col justify-between md:flex-row p-3">
          {featurs.map((featur) => (
            <div key={featur.id} className="flex flex-col  gap-2 items-center">
              <div className="w-24">
                <img className="w-full h-full" src={featur.imgUrl} alt="noot" />
              </div>
              <h3 className="font-bold text-2xl">{featur.title}</h3>
              <p className="text-gray-500 max-w-[70%] text-center">
                {featur.dect}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="text-4xl font-bold text-red-900 text-center my-4">
            popular foods
          </h4>
          <div className="flex flex-col gap-3 ">
            <Menu
              categories={categories}
              filterMenusHandler={filterMenusHandler}
            />
            <div className=" p-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-8">
              {productsData.map((product) => (
                <ProductsCart data={product} />
              ))}
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-2 m-5">
            <div className="w-[70%] md:w-[40%]">
              <img className="w-full h-full" src={whyPic} alt="" />
            </div>
            <div className="flex flex-col justify-center items-center gap-2 p-4  ">
              <h4 className="font-bold text-4xl ml-10 md:ml-24 self-start">
                why <span className="text-red-600">tasty treat?</span>
              </h4>
              <p className="text-sm ml-4 max-w-[100%] md:max-w-[70%]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                exercitationem repellat illo tenetur sed ipsa?
              </p>
              <div className="flex flex-col p-3">
                <div className=" flex flex-col gap-2  p-2">
                  <p className="flex gap-2 items-center font-bold italic">
                    <FaRegCheckCircle className="text-red-500" />
                    Lorem, ipsum dolor.
                  </p>
                  <p className="ml-6 text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
                <div className=" flex flex-col gap-2  p-2">
                  <p className="flex gap-2 items-center font-bold italic">
                    <FaRegCheckCircle className="text-red-500" />
                    Lorem, ipsum dolor.
                  </p>
                  <p className="ml-6 text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
                <div className=" flex flex-col gap-2  p-2">
                  <p className="flex gap-2 items-center font-bold italic">
                    <FaRegCheckCircle className="text-red-500" />
                    Lorem, ipsum dolor.
                  </p>
                  <p className="ml-6 text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl text-red-600 text-center uppercase font-bold">
            hot pizza
          </h1>
          <div className="p-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 w-full">
            {hotPizza.map((hotp) => (
              <ProductsCart data={hotp} />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2 my-5">
          <div className="flex p-3 justify-start py-2">
            <h4 className="text-red-600 text-3xl ml-8">Testimonal</h4>
          </div>
          <div className="flex flex-col md:flex-row gap-5 p-9">
            <div className="flex flex-col  gap-4">
              <h5 className="text-4xl font-bold">
                what our <span className="text-red-600">customers </span> are
                saying
              </h5>
              <p className="max-w-[80%] ml-4 text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste
                facere vero velit tempore perferendis soluta.
              </p>
              <div className="w-[400px] md:w-[600px]  mx-auto">
                <SwiperSlider dataSwiper={DataSwiper} />
              </div>
            </div>
            <div className="w-[70%] md:w-[50%] mx-auto ">
              <img className="w-full h-full" src={infoPic} alt="noot" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
