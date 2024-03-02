import React from "react";

export default function CommonSection(props) {
  // className="bg-[url('./img/background.png')]"
  return (
    <div className="flex w-full">
      <div className=" flex items-center justify-center text-3xl h-[200px] w-full  font-bold bg-banner bg-center bg-cover    text-white ">
        {props.title}
      </div>
    </div>
  );
}
