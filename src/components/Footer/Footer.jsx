import React from "react";
import pic from "../../assets/images/res-logo.png";
import { FaTelegramPlane } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { MdOnlinePrediction } from "react-icons/md";
export default function Footer() {
  return (
    <div className="bg-red-200 p-4 riot ">
      <div className="flex flex-col md:flex-row gap-2 justify-between w-[95%] mx-auto">
        <div className="flex gap-10">
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              <div className="w-16 md:w-20">
                <img className="w-full h-full" src={pic} alt="nooot" />
              </div>
              <h1 className="text-sm md:text-lg">Foody food</h1>
              <p className="text-[13px] md:text-sm">Lorem ipsum dolor sit.</p>
              <p className="text-[13px] md:text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-[50%] md:w-[30%]  text-center ">
            <h2 className="font-bold text-xl">Delivery Time</h2>
            <div className="flex flex-col gap-1">
              <p className="font-bold">sundy-Thusday</p>
              <p>10:00am - 11:00px</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-bold">Friday</p>
              <p>off day</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h3 className="font-bold">Contact</h3>
          <div className="flex flex-col gap-2">
            <p>Lorem ipsum dolor sit.</p>
            <p>Lorem, ipsum dolor.</p>
          </div>
          <p className="font-bold">phone : 0912334423</p>
          <p>Email:arashamirsarifi1970@gmail.com</p>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="font-bold">Newsletter</h4>
          <p className="">Lorem ipsum dolor sit.</p>

          <div className="bg-transparent flex gap-1 border border-gray-950 rounded-lg p-2 justify-between">
            <input
              className="outline-none border-none p-1 bg-transparent w-[70%]"
              type="text"
              placeholder="Enter your emagle"
            />
            <button className="bg-gray-950 text-white rounded-lg px-4 py-3">
              <FaTelegramPlane className="text-white" />
            </button>
          </div>
          <div className=" flex gap-3 justify-center md:justify-end mt-3">
            <IoLogoWhatsapp className="text-gray-400 text-4xl md:text-2xl" />
            <FaTwitter className="text-gray-400 text-4xl md:text-2xl" />
            <MdOnlinePrediction className="text-gray-400 text-4xl md:text-2xl" />
          </div>
        </div>
      </div>
      <p className="text-red-700">Lorem ipsum dolor sit amet.</p>
    </div>
  );
}
