import { memo } from "react";
import { useTranslation } from "react-i18next";
import "./Myproject.css";
function Myproject({ img, id, mylink, skils,repository }) {
  const { t } = useTranslation();
  const btnhandler = () => {
    if (!mylink) {
      alert(
        "This section of the portfolio is currently being designed and developed."
      );
    }
  };
  return (
    <div className="Myproject">
      <div className="mcontainer bg-[#e7e8e9] flex flex-col justify-start items-center hover:shadow-lg rounded-[18px] p-2 overflow-hidden">
        <div className="w-[346px] h-[184px] rounded-[10px] flex flex-col justify-center items-center">
          <img
            src={img}
            className="rounded-[10px] "
            alt="hi friends"
          />
        </div>
        <div className="caption px-4 my-3 grid gap-[.2rem]  grid-row-3 justify-items-start h-71">
          <h2 className="text-start text-[1.4rem] font-800 ">
            {t(`projects.${id}.title`)}
          </h2>
          <p className="text-start tracking-tight">
            {t(`projects.${id}.des`)}
            <br></br>
            <span
              className={` h-[fit-content] ${
                !skils
                  ? "invisible"
                  : "tracking-tight text-center p-[.1rem]  my-[.3rem] rounded-[.3rem] bg-[#76757583]"
              }`}
            >
              {skils}
            </span>
          </p>
          <div className=" text-white font-700  self-end flex gap-[8px] items-center">

            <button
            onClick={btnhandler}
            type="button"
            className={`px-[8px] py-[3px] rounded bg-[#c03f3f]
                ${
                  !mylink
                    ? " cursor-not-allowed bg-gray-500 dark:bg-gray-500"
                    : ""
                }`}
          >
            <a href={mylink} target="-blank">
              {t("visit website")}
            </a>
          </button>
          {repository&&( <button
            onClick={btnhandler}
            type="button"
            className={`px-[8px] py-[3px] rounded bg-gray-500 dark:bg-gray-500`}
          >
            <a href={repository} target="-blank">
              {t("view repository")}
            </a>
          </button>)}</div>
        </div>
      </div>
    </div>
  );
}
export default memo(Myproject);
