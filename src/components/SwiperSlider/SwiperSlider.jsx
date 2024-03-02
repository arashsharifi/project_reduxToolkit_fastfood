import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { EffectFlip, Pagination, Navigation } from "swiper/modules";

export default function SwiperSlider({ dataSwiper }) {
  const [datas, setDatas] = useState(dataSwiper);
  return (
    <>
      <Swiper
        loop={true}
        effect={"flip"}
        grabCursor={true}
        pagination={true}
        navigation={true}
        modules={[EffectFlip, Pagination, Navigation]}
        className="mySwiper"
      >
        {datas.map((data) => (
          <SwiperSlide>
            <div className="flex flex-col">
              <p className="text-sm md:text-lg my-2 p-3 text-gray-400 italic ">
                {data.desc}
              </p>
              <div className="flex gap-2  items-center p-3 ml-8">
                <div className="w-32 ">
                  <img
                    className="w-full h-full rounded-md"
                    src={data.avatarImg}
                    alt="nooot"
                  />
                </div>
                <h2 className="font-bold uppercase">{data.name}</h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
