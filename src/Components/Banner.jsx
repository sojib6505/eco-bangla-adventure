import { useContext } from "react";
import { Context } from "../Context/Context";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";

export default function Banner() {
  const { adventure,loading } = useContext(Context);
    if (loading) {
    return (
      <div className="w-full py-20 flex justify-center items-center">
        <h2 className="text-xl font-semibold">Loading adventures...</h2>
      </div>
    );
  }
  if (!adventure?.length) return null;
  return (
    <Swiper
      modules={[Autoplay, EffectCoverflow]}
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        0: {
          slidesPerView: 1,
          coverflowEffect: {
            rotate: 0,
            depth: 0,
          },
        },
        640: {
          slidesPerView: 2,
          coverflowEffect: {
            rotate: 15,
            depth: 120,
          },
        },
        1024: {
          slidesPerView: 3,
          coverflowEffect: {
            rotate: 25,
            depth: 150,
          },
        },
      }}
      coverflowEffect={{
        stretch: 0,
        modifier: 1,
        slideShadows: false,
      }}
      className="w-full py-6 md:py-10"
    >
      {
        adventure.map(item => (
        <SwiperSlide key={item.id} className="flex justify-center md:mt-10 md:mb-10">
          <div className="relative w-full sm:w-[85%] lg:w-[80%] h-65 sm:h-80 md:h-95 lg:h-105 md:rounded-2xl overflow-hidden shadow-xl">
            <img
              src={item.Image}
              alt={item.Adventure_Title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
            {/* Title */}
            <h2 className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 text-white text-lg sm:text-xl md:text-2xl font-bold text-center px-4">
              {item.Adventure_Title}
            </h2>
          </div>
        </SwiperSlide>
      ))
      }
    </Swiper>
  );
}
