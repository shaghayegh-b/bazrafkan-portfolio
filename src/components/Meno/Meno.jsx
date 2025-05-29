import { memo, useState } from "react";
import "./Meno.css";
import { useTranslation } from 'react-i18next';

function Meno() {
    const {  i18n } = useTranslation();
  const [myClick, setMyClick] = useState(false);
const[dd,setdd]=useState(false)
  return (
    <div className="w-40" dir="rtl">
      <div className="w-23">
        <div className="meno flex flex-col items-center">
          <button
            onClick={() => setMyClick((prev) => !prev)}
            type="button"
            className="btn"
          >
            <i className=" fas fa-bars"></i>
          </button>
          <ul
            className={` flex flex-col items-center transition-all duration-900 transform origin-top  ${
              myClick ? "opasity-100" : "  opacity-0  pointer-event-none"
            } `}
          >
            <li className="btn w-[6rem]  group " onClick={()=>{setdd((prev)=>!prev)}}>lang
                <div className={`${dd?"":"hidden"}`} >
                <button  onClick={() => i18n.changeLanguage('fa')}>فارسی </button><b>|</b>
                <button  onClick={() => i18n.changeLanguage('en')}>English</button>
                </div>

            </li>
            <li className="btn w-[6rem]  group font-bold">+<span className="group-hover:block hidden"> create a portfolio</span>
            </li>
            <li className="btn w-[6rem] group ">p<span className="group-hover:block hidden">print</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default memo(Meno);
