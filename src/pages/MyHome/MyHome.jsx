import Profile from "../../components/profile/Profile";
import Right from "../../components/right/Right";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../i18next.jsx";
import "swiper/css";
import "swiper/css/navigation";
import Myproject from "../../components/Myproject/Myproject";
import { projects } from "../../../data.jsx";
import Buttonswiper from "../../components/buttonswiper/buttonswiper";
import Meno from "../../components/Meno/Meno";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import Comment from "../../components/Comment/Comment";
export default function MyHome() {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    const dir = i18n.language === "fa" ? "rtl" : "ltr";
    document.documentElement.dir = dir;
    document.body.classList.toggle("rtl", dir === "rtl");
  }, [i18n.language]);
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
              1335: { slidesPerView: 4 },
              1010: { slidesPerView: 3 },
              768: { slidesPerView: 2 },
              673: { slidesPerView: 2 },
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
      <section className="section5 p-3 pb-11 ">
        <Comment></Comment>
      </section>
      <footer className=" mt-3 bg-gray-400 px-4 py-10">
        <div className="flex flex-col gap-[.5rem] items-center justify-between">
          <p className="p-1 text-center ">{t("footerp1")}</p>
         <div className="p-1  text-.9rem text-center">
         <p className=" text-[.8rem]">
            {t("footerp2")}
            <a
              className="text-blue-900"
              target="-blank"
              href="https://github.com/shaghayegh-b/bazrafkan-portfolio"
            >
              GitHub Pages
            </a>
            .
          </p>
          <p className=" text-[.8rem] ">{t("footerp3")}</p>
         </div>
          <p className="p-1 text-center">{t("footerp4")}</p>
          <div className="p-2 flex justify-center items-center   text-gray-600 text-xl">
            <a
              href="https://www.google.com/maps?q=Khuzestan,+Iran"
              target="-blank"
            >
              <i className="fa-solid  fa-map-location-dot  p-2"></i>
            </a>
            <a href={`mailto:${"bazrafkannjad.sh@gmail.com"}`}>
              <i className="fa fa-at  p-2"></i>
            </a>
            <a href={`tel:${+989399619640}`}>
              <i className="fa fa-phone p-2"></i>
            </a>
            <a href="https://github.com/shaghayegh-b" target="-blank">
              <i className="fa-brands fa-github text-[1.5rem] p-2"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
