import Profile from "./components/profile/Profile";
import Right from "./components/right/Right";
import { Swiper, SwiperSlide } from "swiper/react";
import './i18next.jsx'
import "swiper/css";
import "swiper/css/navigation";
import Myproject from "./components/Myproject/Myproject";
import { projects } from "../data";
import Buttonswiper from "./components/buttonswiper/buttonswiper";
import Meno from "./components/Meno/Meno.jsx";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
export default function App() {
    const{ i18n}=useTranslation()
    useEffect(()=>{
        const dir=i18n.language === 'fa'? 'rtl':'ltr'
        document.documentElement.dir=dir
        document.body.classList.toggle('rtl',dir==='rtl')
    },[i18n.language])
  return (
    <div className="mycontainer relative">
        <div className={`absolute top-6  ${i18n.language === 'fa'?"left-16":"right-16"}`}>
        <Meno ></Meno>
        </div>
      <div className="head">
        <Profile></Profile>
        <Right></Right>
      </div>
      <section
        data-aos="fade-up"
        data-aos-offset="70"
        data-aos-delay="0"
        data-aos-duration="1900"
        data-aos-once="true"
        className=" section4 p-3 pb-11"
      >
        <div className="shadow-2xl">
          <Swiper
            className="mySwiper flex flex-col-reverse"
            spaceBetween={9}
            breakpoints={{
              1230: { slidesPerView: 4 },
              961: { slidesPerView: 3 },
              768: { slidesPerView: 2 },
              500: { slidesPerView: 2 },
              0: { slidesPerView: 1 },
            }}
          >
          <Buttonswiper></Buttonswiper>

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
