import { memo } from "react";

function Myproject({ img, title, text, mylink,skils }) {
  const btnhandler = () => {
    if (!mylink) {
      alert(
        "This section of the portfolio is currently being designed and developed."
      );
    }
  };
  return (
    <div className="Myproject">
      <div className="mcontainer bg-gray-300 flex flex-col justify-start items-center shadow-md p-2">
        <img src={img} className="w-100% h-38" alt="hi friends" />
        <div className="px-4 my-3 grid  grid-row-3 justify-items-start h-71">
          <h2 className="text-start text-[1.4rem] font-800 ">{title}</h2>
          <p className="text-start tracking-tight" >{text}</p>
          <span className={`${!skils?"hidden":"tracking-tight text-center p-[.1rem] px-[.3rem] my-[.3rem] rounded-[.3rem] bg-[#76757583]" }`}>{skils}</span>
          <button
            onClick={btnhandler}
            type="button"
            className={`bg-blue-700 text-white font-700 px-5 py-1 rounded self-end ${
                !mylink?" cursor-not-allowed bg-gray-500":''
            }`}
          >
            <a href={mylink} target="-blank">
              visit website
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
export default memo(Myproject);
