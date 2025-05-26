import { memo, useEffect } from "react";
import "./Right.css";
import AOS from "aos";
import 'aos/dist/aos.css'
import Experince from "./Experince";
function Right() {
    useEffect(()=>{
        AOS.init()
    },[])
  return (
    <div data-aos="fade-left"
    data-aos-delay="100"
    data-aos-duration="2100"
    className="Right">
      <section className="section2">
        <h2 className="part1">
          <i className=" fas fa-link icon"></i>
          ABOUT ME
        </h2>
        <p className="part3">
          I'm Shaghayegh Bazrafkan, a motivated front-end developer with a
          strong passion for creating modern and responsive user interfaces.
          Over the past year, I’ve been deeply focused on learning and
          practicing web development, gaining solid experience with technologies
          such as HTML, CSS, JavaScript, React.js, Tailwind CSS, Sass, jQuery,
          Git, and GitHub. I'm also familiar with API integration concepts using
          Fetch, Axios, Context API, and React Query, and have completed various
          practice projects in these areas. Currently, I'm working on personal
          projects to further enhance my practical skills, with the goal of
          becoming a freelance web designer and gaining real-world experience.
          I’m always eager to learn and grow, and I’m committed to developing
          into a skilled and professional front-end developer.
        </p>
      </section>
      <section className="section3">
        <h2 className="part1">
          <i className="fas fa-archive icon"></i>
          Work Experince
        </h2>
        <Experince></Experince>
        <hr />
        <Experince></Experince>
      </section>
    </div>
  );
}
export default memo(Right);
