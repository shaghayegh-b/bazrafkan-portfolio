import { memo } from "react";

function Myproject({img,title,text,mylink}) {
  return (
    <div className="Myproject">
        <div className="mcontainer bg-gray-300 flex flex-col justify-start items-center shadow-md p-2">
      <img src={img} className="w-100% h-38" alt="" />
      <div className="px-4 py-3 grid  grid-row-3 justify-items-start h-71">
        <h2 className="text-start text-3xl font-800 ">{title}</h2>
        <p className="text-start p-1">{text}</p>
        <button type="button" className="bg-blue-700 text-white font-700 px-5 py-1 rounded self-end">
          <a href={mylink} target="-blank">click</a>
        </button>
      </div>
    </div>
    </div>
  );
}
export default memo(Myproject);
