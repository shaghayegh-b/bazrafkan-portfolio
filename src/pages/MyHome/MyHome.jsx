import Profile from "../../components/profile/Profile";
import Right from "../../components/right/Right";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../i18next.jsx";
import "swiper/css";
import "swiper/css/navigation";
import AOS from "aos";
import Myproject from "../../components/Myproject/Myproject";
import { projects } from "../../../data.jsx";
import Buttonswiper from "../../components/buttonswiper/buttonswiper";
import Meno from "../../components/Meno/Meno";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import Comment from "../../components/Comment/Comment";
import MyFooter from "../../components/MyFooter/MyFooter.jsx";
export default function MyHome() {
  const { i18n } = useTranslation();
  useEffect(() => {
    const dir = i18n.language === "fa" ? "rtl" : "ltr";
    document.documentElement.dir = dir;
    document.body.classList.toggle("rtl", dir === "rtl");
  }, [i18n.language]);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);
  useEffect(() => {
    // تابع برای بررسی اندازه صفحه و آپدیت استیت
    const handleResize = () => {
      const isNowDesktop = window.innerWidth > 768;
      setIsDesktop(isNowDesktop);

      if (isNowDesktop) {
        AOS.init(); // می‌تونی duration یا config بدی
        AOS.refresh(); // برای اطمینان که انیمیشن‌ها دوباره لود بشن
      }
    };
    // اجرا هنگام mount شدن
    handleResize();
    // گوش دادن به resize
    window.addEventListener("resize", handleResize);
    // پاک کردن event هنگام unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="mycontainer relative">
      <div
        className={`parentmeno fixed top-[0]
            ${
          i18n.language === "fa" ? "left-[2rem]" : "right-[2rem]"
        }
        `}
      >
        <Meno></Meno>
      </div>
      <div className="head ">
        <Profile></Profile>
        <Right></Right>
      </div>
      <section
      {...(isDesktop && {
        "data-aos": "fade-up",
        "data-aos-offset": "70",
        "data-aos-delay": "0",
        "data-aos-duration": "1900",
        "data-aos-once": "true",
      })}
        className=" section4 p-3 pb-11"
      >
        <div className="">
          <Swiper
            className="mySwiper flex flex-col-reverse"
            loop="true"
            spaceBetween={9}
            breakpoints={{
              1335: { slidesPerView: 4 },
              985: { slidesPerView: 3 },
              655: { slidesPerView: 2 },
              0: { slidesPerView: 1 },
            }}
          >
            <Buttonswiper></Buttonswiper>

            <div className="p-5">
            {projects.map((project) => (
              <SwiperSlide>
                <Myproject {...project}></Myproject>
              </SwiperSlide>
            ))}
            </div>
          </Swiper>
        </div>
      </section>
      <section className="section5 p-3 pb-11 ">
        <Comment></Comment>
      </section>
      <footer className=" mt-3 bg-gray-400 px-4 py-10">
        <MyFooter></MyFooter>
      </footer>
    </div>
  );
}
