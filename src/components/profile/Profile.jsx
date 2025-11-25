import { memo, useEffect } from "react";
import imgporofile from "../../assets/imag/17.webp";
import "./Profile.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
function Profile() {
  const { t } = useTranslation();
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="Profile">
      <section className="section1">
        <div className="part1">
          <div
            data-aos="zoom-in"
            data-aos-offset="150"
            data-aos-delay="0"
            className="w-full"
          >
            <img
              src={imgporofile}
              alt="porofile"
              lazy="loading"
              className=" w-full h-auto"
            />
          </div>
          <h2 className="tracking-tight">{t("name")}</h2>
        </div>
        <div className="information">
          <div
          // data-aos="fade-up"
          // data-aos-delay="40"
          // data-aos-duration="2100"
          // data-aos-once="true"
          >
            <hr className=" text-[#6d50505c] mx-9 " />
            <h3 className="p-3 px-8 ">
              <i className="fa fa-briefcase icon"></i>
              {t("job")}
            </h3>
            <hr className=" text-[#6d50505c] mx-9 " />
            <div className="part2">
              <ul className="break-words">
                <li>
                  <h3 className="text-xl font-medium">{t("Contact")}</h3>
                </li>
                <li>
                  <a
                    href="https://www.google.com/maps?q=Khuzestan,+Iran"
                    target="-blank"
                  >
                    <i className="fa-solid  fa-map-location-dot icon"></i>{t("loc")}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${"bazrafkannjad.sh@gmail.com"}`}>
                    <i className="fa fa-at icon"></i>bazrafkannjad.sh@gmail.com
                  </a>
                </li>
                <li>
                  <a href={`tel:${+989399619640}`}>
                    <i className="fa fa-phone icon"></i>09399619640
                  </a>
                </li>
                <li>
                  <a href="https://github.com/shaghayegh-b" target="-blank">
                    <i className="fa-brands fa-github icon"></i>shaghayegh-b
                  </a>
                </li>
              </ul>
              <hr className=" text-[#6d50505c] mx-9 " />
              <div className="px-3">
              <h2 className="py-2 text-[114%] font-medium">
                <i className="fas fa-stamp icon"></i>
                {t("skills")}
              </h2>
              <div>
                <p>
                  html ,css
                </p>
                <p>
                  javascript
                </p>
                <p>
                  react
                </p>
                <p>
                  tailwind css
                </p>
                <p>
                  jQuery
                </p>
                <p>
                  bootstrap
                </p>
                <p>
                  sass
                </p>
                <p>
                  git
                </p>
                <p>
                  github
                </p>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default memo(Profile);
