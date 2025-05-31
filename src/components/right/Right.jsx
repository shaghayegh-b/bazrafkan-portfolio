import { memo, useEffect } from "react";
import "./Right.css";
import AOS from "aos";
import 'aos/dist/aos.css'
import { useTranslation } from "react-i18next";
import Experince from "./Experince";
function Right() {
    const {t}=useTranslation()
    useEffect(()=>{
        AOS.init()
    },[])
  return (
    <div data-aos="fade-up"
    data-aos-delay="100"
    data-aos-duration="2100"
    className="Right">
      <section className="section2">
        <h2 className="part1 text-xl font-medium">
          <i className=" fas fa-link icon"></i>
          {t('ABOUT')}
        </h2>
        <p className="part3">{t('about')}</p>
      </section>
      <section className="section3">
        <h2 className="part1 text-xl font-medium">
          <i className="fas fa-archive icon"></i>
          {t("Work Experince")}
        </h2>
        <Experince></Experince>
        <hr className=" text-[#6d50505c] mx-9 "/>
        <Experince></Experince>
      </section>
    </div>
  );
}
export default memo(Right);
