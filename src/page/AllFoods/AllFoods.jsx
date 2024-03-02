import React, { useState } from "react";

import { IoSearchOutline } from "react-icons/io5";

import CommonSection from "../../components/UI/CommonSection/CommonSection";
import ProductsCart from "../../components/UI/Products-Cart/ProductsCart";

import { products } from "../../assets/fake-data/products";

import ReactPaginate from "react-paginate";

import "../AllFoods/AllFoods.css";

export default function AllFoods() {
  const [serachTrem, setSearchTrem] = useState("");
  // const [productData, setProductData] = useState(products);
  const [pageNumber, setPageNumber] = useState(0);

  const searchdeProduct = products.filter((item) => {
    if (serachTrem.value === "") return item;
    if (item.title.toLowerCase().includes(serachTrem.toLowerCase()))
      return item;
  });

  const productPerPage = 8;
  const visitedPage = pageNumber * productPerPage;
  const displayPage = searchdeProduct.slice(
    visitedPage,
    visitedPage + productPerPage
  );
  const pageCount = Math.ceil(searchdeProduct.length / productPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="flex  flex-col  w-full ">
      <div className="mt-28 flex flex-col gap-2">
        <CommonSection title="allFoods" />
        <div className="flex flex-col md:flex-row gap-5 md:gap-0  justify-between  items-center  w-[100%] md:w-[80%] mx-auto p-3">
          <div className="flex items-center p-2 gap-1 border border-black rounded-md w-[95%] md:w-[50%]">
            <IoSearchOutline />
            <input
              className="outline-none border-none"
              type="text"
              placeholder="search food.."
              value={serachTrem}
              onChange={(event) => setSearchTrem(event.target.value)}
            />
          </div>
          <div className="w-[95%] md:w-[40%]">
            <select
              id="countries"
              className="bg-gray-50 border border-gray-800 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5   "
            >
              <option defaultValue="">Default</option>
              <option value="ascending">Alphabetically, A-Z</option>
              <option value="descending">Alphabetically, Z-A</option>
              <option value="high-price">High Price</option>
              <option value="low-price">Low Price</option>
            </select>
          </div>
        </div>
        <div className="w-[90%] mx-auto p-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-8">
          {displayPage.map((item) => (
            <ProductsCart key={item.id} data={item} />
          ))}
        </div>
        <div className="w-[50%] mx-auto  p-3 flex justify-center ">
          <ReactPaginate
            pageCount={pageCount}
            onPageChange={changePage}
            previousLabel="Prev"
            nextLabel="Next"
            className="flex gap-3 p-3  rounded-xl text-white paginatinBttns"
          />
        </div>
      </div>
    </div>
  );
}
