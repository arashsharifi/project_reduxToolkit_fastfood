import React, { useState } from "react";
import { categoryData } from "../../../assets/fake-data/products";

export default function Category() {
  const [data, setData] = useState(categoryData);
  return (
    <div className="w-full">
      <div className="w-[90%] mx-auto flex flex-col md:flex-row justify-between gap-4">
        {data.map((da) => (
          <div
            key={da.id}
            className="bg-red-200 w-[70%] md:w-[40%] p-3 h-[100px] flex items-center justify-start gap-2 my-8 rounded-md duration-200 hover:shadow-lg hover:shadow-gray-500 cursor-pointer"
          >
            <div className="w-34">
              <img className="w-full h-full" src={da.imgUrl} alt="" />
            </div>
            <h1 className="tex-sm">{da.dispaly}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}
