import { memo, useEffect } from "react";
import imgporofile from "../../assets/imag/17.webp";
import "./Profile.css";
import AOS from "aos";
import "aos/dist/aos.css";
function Profile() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div  className="Profile">
      <section className="section1">
        <div className="part1">
          <div data-aos="zoom-in" data-aos-offset="100" data-aos-delay="0" className="w-full">
            <img src={imgporofile} alt="porofile" lazy='loading' className=" w-full h-auto"/>
          </div>
          <h2  className="tracking-tight">Shaghayegh Bazrafkan</h2>
        </div>
        <hr className=" text-[#6d50505c] mx-9 " />
        <div
         data-aos="fade-up"
    data-aos-delay="40"
    data-aos-duration="2100"
    data-aos-once="true"
    className="part2">
          <ul className="break-words">
            <li className="tracking-tight ">
              <i className="fa fa-briefcase icon"></i>programes <b>|</b> Junior Front-End Developer
            </li>
            <li>
              <a
                href="https://www.google.com/maps?q=Khuzestan,+Iran"
                target="-blank"
              >
                <i className="fa fa-home icon"></i>iran khozestan
              </a>
            </li>
            <li>
              <a href={`mail:${"bazrafkannjad.sh@gmail.com"}`} target="-blank">
                <i className="fa fa-at icon"></i>bazrafkannjad.sh@gmail.com
              </a>
            </li>
            <li>
              <a href={`tel:${+989399619640}`} target="-blank">
                <i className="fa fa-phone icon"></i>09399619640
              </a>
            </li>
          </ul>
          <span>
            <i className="fas fa-stamp icon"></i>
            skills
          </span>
          <div>
            <p>
              html ,css <span>| Basic</span>
            </p>
            <p>
              javascript <span>| Basic</span>
            </p>
            <p>
              react <span>| Basic</span>
            </p>
            <p>
              tailwind css <span>| Basic</span>
            </p>
            <p>
              jQuery <span>| Basic</span>
            </p>
            <p>
              bootstrap <span>| Basic</span>
            </p>
            <p>
              sass <span>| Basic</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
export default memo(Profile);
