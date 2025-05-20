import Profile from "./components/profile/Profile";
import Right from "./components/right/Right";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Myproject from "./components/Myproject/Myproject";
import img1 from "./assets/imag/24.jpg";
import img2 from "./assets/imag/1.jpg";
import portfolio from "./assets/imag/18.png";
export default function App() {
  let projects = [
    {
        img:portfolio,
      title: "project1",
      text: "In a portfolio page, the goal is to showcase your skills, projects, experiences, and contact information in a way that allows visitors—such as potential employers or clients—to quickly gain a clear understanding of your abilities.",
      mylink:"https://bazrafkan-portfolio.liara.run/"
    },
    {
      img:img1,
      title: "project2",
      text:"This section of the portfolio is currently being designed and developed. Full details and project information will be available here soon. Thank you for your patience and support — please stay tuned.",
    },
    {
      img:img2,
      title: "project3",
      text:"This section of the portfolio is currently being designed and developed. Full details and project information will be available here soon. Thank you for your patience and support — please stay tuned.",
    },
    {
        img:img2,
      title: "project4",
      text:"This section of the portfolio is currently being designed and developed. Full details and project information will be available here soon. Thank you for your patience and support — please stay tuned.",
    },
    {
        img:img1,
      title: "project5",
      text:"This section of the portfolio is currently being designed and developed. Full details and project information will be available here soon. Thank you for your patience and support — please stay tuned.",
    },
    {
        img:img2,
      title: "project6",
      text:"This section of the portfolio is currently being designed and developed. Full details and project information will be available here soon. Thank you for your patience and support — please stay tuned.",
    },
  ];
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
