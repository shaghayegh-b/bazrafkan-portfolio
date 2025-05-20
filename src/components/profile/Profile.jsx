import { memo } from "react";
import imgporofile from "../../assets/imag/17.jpg";
import "./Profile.css";
function Profile() {
  return (
    <div className="Profile">
      <section className="section1">
       <div className="part1">
       <div>
       <img src={imgporofile} alt="photo" />
       </div>
        <h2>shaghayegh bazrafkan</h2>

       </div>
        <hr />
        <div className="part2">
        <ul>
          <li>
              <i className="fa fa-briefcase icon"></i>programes
          </li>
          <li>
            <a href="https://www.google.com/maps?q=Khuzestan,+Iran" target="-blank">
              <i className="fa fa-home icon"></i>iran khozestan
            </a>
          </li>
          <li>
            <a href={`mail:${"bazrafkannjad.sh@gmail.com"}`}   target="-blank">
              <i className="fa fa-at icon"></i>bazrafkannjad.sh@gmail.com
            </a>
          </li>
          <li>
            <a href={`tel:${+989399619640}`}  target="-blank">
              <i className="fa fa-phone icon"></i>09399619640
            </a>
          </li>
        </ul>
          <span>
            <i className="fas fa-stamp icon"></i>
            skills
          </span>
         <div>
         <p>html ,css  <span>| Basic</span></p>
          <p>javascript <span>| Basic</span></p>
          <p>react <span>| Basic</span></p>
          <p>tailwind css <span>| Basic</span></p>
          <p>jQuery <span>| Basic</span></p>
          <p>bootstrap <span>| Basic</span></p>
          <p>sass <span>| Basic</span></p>
         </div>
        </div>
      </section>
    </div>
  );
}
export default memo(Profile);
