import { memo, useState } from "react";
import { useTranslation } from "react-i18next";
function Comment() {
  const { t } = useTranslation();
  const [message,setMessage]=useState("")
  const maxLength=500
  const ratio=message.length/maxLength
  return (
    <div className=" px-4 py-10  ">
      <div>
        <h3 className="font-medium text-[1.7rem] mb-4">
          {t("touchtitle")}
          <span className="text-blue-600">!</span>
        </h3>
        <p className="text-[87%] mb-8 text-gray-800 leading-relaxed">
          {t("touch")}
        </p>
      </div>
      <div className=" border-2 border-solid border-[#464646c9] rounded-2xl p-6 shadow-xl">
        {/* Name */}
        <form>
          <div>
            <label
              htmlFor="nameuser"
              className="block  font-medium text-sm mb-1"
            >
              {t("nameuser")}
              <span className="text-red-500">*</span>
            </label>
            <input
              required
              placeholder={t("placeholdername")}
              className="w-full rounded-lg px-4 py-2  border border-gray-600 text-gray-700 placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-800"
              id="nameuser"
              name="nameuser"
              type="text"
            />
          </div>
          {/* email */}
          <div>
            <label
              htmlFor="emailuser"
              className="block  font-medium text-sm mb-1"
            >
              {t("emailuser")}
              <span className="text-red-500">*</span>
            </label>
            <input
              required
              placeholder="bazrafkannjad.sh@gmail.com"
              className="w-full rounded-lg px-4 py-2  border border-gray-600 text-gray-700 placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-800"
              id="emailuser"
              name="emailuser"
              type="email"
            />
          </div>
          {/* massage */}
          <div>
            <label htmlFor="" className="block  font-medium text-sm mb-1">
              {t("massageuser")}
              <span className="text-red-500">*</span>
            </label>
            <textarea
            onChange={(e)=>{setMessage(e.target.value)}}
              required
              placeholder={t("placeholder massage")}
              name="massageuser"
              className="w-full rounded-lg px-4 py-2  border border-gray-600 text-gray-700 placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-800"
              maxLength={maxLength}
              rows={5}
              type="text"
            />
            <div className="text-sm text-gray-400 text-right mt-1" > <span className={` ${ratio>.9?"text-red-700":""}` } >{message.length}/{maxLength} </span> characters</div>
          </div>
          {/* button */}
          <div>
            <button type="submit"  className="bg-gray-400 text-right hover:bg-gray-500 pr-5 pl-4 py-2 rounded-lg m-2">{t("send")}
                <i className="fa-regular fa-paper-plane px-1"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default memo(Comment);
