import { memo } from "react";
import { useTranslation } from "react-i18next";
import './Myproject.css'
function Myproject({ img,id, mylink,skils }) {
    const {t}=useTranslation()
  const btnhandler = () => {
    if (!mylink) {
      alert(
        "This section of the portfolio is currently being designed and developed."
      );
    }
  };
  return (
    <div className="Myproject">
      <div className="mcontainer bg-[#e7e8e9] flex flex-col justify-start items-center hover:shadow-lg rounded-[18px] p-2">
        <img src={img} width="346px" height="184px" className="rounded-[10px] w-100% h-38" alt="hi friends" />
        <div className="caption px-4 my-3 grid gap-[.2rem]  grid-row-3 justify-items-start h-71">
          <h2 className="text-start text-[1.4rem] font-800 ">{t(`projects.${id}.title`)}</h2>
          <p className="text-start tracking-tight" >{t(`projects.${id}.des`)}
            <br></br>
          <span className={`h-[fit-content] ${!skils?"invisible":"tracking-tight text-center p-[.1rem]  my-[.3rem] rounded-[.3rem] bg-[#76757583]" }`}>{skils}</span>
          </p>
          <button
            onClick={btnhandler}
            type="button"
            className={`bg-[#945555] text-white font-700 px-5 py-1 rounded self-end ${
                !mylink?" cursor-not-allowed bg-gray-500":''
            }`}
          >
            <a href={mylink} target="-blank">
                {t("visit website")}
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
export default memo(Myproject);
