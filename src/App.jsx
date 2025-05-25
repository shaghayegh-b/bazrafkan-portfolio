import Profile from "./components/profile/Profile";
import Right from "./components/right/Right";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Myproject from "./components/Myproject/Myproject";
import { projects } from "../data";
export default function App() {

  return (
    <div className="mycontainer">
      <div className="head">
        <Profile></Profile>
        <Right></Right>
      </div>
      <section className=" section4 p-3 pb-7">
        <h2 className="text-start font-700 text-2xl p-3 pb-5">projects</h2>
       <div className="shadow-2xl">
       <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper "
          spaceBetween={9}
          breakpoints={{
            1230: { slidesPerView: 4 },
            961: { slidesPerView: 3 },
            768: { slidesPerView: 2 },
            500: { slidesPerView: 2 },
            0: { slidesPerView: 1 },
          }}
        >
          {projects.map((project) => (
            <SwiperSlide>
              <Myproject {...project}></Myproject>
            </SwiperSlide>
          ))}
        </Swiper>
       </div>
      </section>
    </div>
  );
}
