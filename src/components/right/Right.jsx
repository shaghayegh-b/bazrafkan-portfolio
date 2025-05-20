import { memo } from "react";
import './Right.css'
import Experince from "./Experince";
function Right() {
    return (
        <div className="Right">
            <section className="section2">
                <h2 className="part1">
                    <i className=" fas fa-link icon"></i>
                    Key Summary</h2>
                <h4 className="part2">Junior Front-End Developer</h4>
                <p className="part3">
                    I am a hardworking, responsible, and eager-to-learn individual with a strong interest in programming, especially in front-end development.
                    I have experience working with HTML, CSS, JavaScript, and the React.js library. I'm also familiar with UI design using Tailwind CSS and concepts related to API communication such as Fetching, Axios, Context API, and React Query.
                    Through various training courses, I have completed multiple practice projects and am now seeking an opportunity to grow professionally and become a more experienced front-end developer.
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
    )
}
export default memo(Right)
