import React, { useState } from "react";

export default function Menu({ categories, filterMenusHandler }) {
  const [mainCategory, setMainCategory] = useState("a");

  // Create a new Set to store unique category names
  const uniqueCategories = [...new Set(categories.map((cat) => cat[0]))];

  return (
    <div className="flex  items-center justify-center gap-2 bg-red-600 my-3 h-[350px] md:h-[100px] w-[95%] mx-auto rounded-md shadow-lg ">
      <div className="flex flex-col  md:flex-row items-center justify-between w-[85%]  gap-2 font-mono   mx-auto  ">
        {uniqueCategories.map((catName, index) => {
          // Find the first image for the category
          const categoryImage = categories.find((cat) => cat[0] === catName)[1];

          return (
            <button
              key={index}
              type="button"
              onClick={() => {
                setMainCategory(catName);
                filterMenusHandler(catName);
              }}
              className={
                catName === mainCategory
                  ? "text-red-600 bg-white  rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 p-3 flex gap-2 items-center w-full md:w-[20%] self-start md:self-center"
                  : "text-white    focus:ring-2 focus:outline-none   rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2 flex gap-2 items-center duration-150 self-start md:self-center w-full md:w-[20%]"
              }
            >
              <div className="w-6 md:w-10">
                {categoryImage.length ? (
                  <img className="w-full" src={categoryImage} alt="nooote" />
                ) : null}
              </div>
              {catName}
            </button>
          );
        })}
      </div>
    </div>
  );
}
