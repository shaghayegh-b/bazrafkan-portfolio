import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Menocreate from "../../components/Menocreate/Menocreate";
export default function CreatePortfolio() {
  const { t, i18n } = useTranslation();
  const [Selectaddress, setSelectaddress] = useState(false);
  useEffect(() => {
    const dir = i18n.language === "fa" ? "rtl" : "ltr";
    document.documentElement.dir = dir;
    document.body.classList.toggle("rtl", dir === "rtl");
  }, [i18n.language]);
  console.log(location);
  return (
    <>
      <section className="my-2 m-auto w-[85%] p-9 relative">
        <div
          className={`parentmeno fixed top-[0]
            ${i18n.language === "fa" ? "left-[2rem]" : "right-[2rem]"}
        `}
        >
          <Menocreate></Menocreate>
        </div>
        <form>
          {/* first name */}
          <div className="p-2">
            <label
              htmlFor="fnameuser"
              className="block mb-1 font-[600] text-gray-900"
            >
              {t("First Name")}
              <span className="text-red-500">*</span>
            </label>
            <input
              required
              placeholder={t("shaghayegh")}
              className="w-full rounded-lg px-4 py-2  border border-gray-600 text-gray-700 placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-800"
              id="fnameuser"
              name="fnameuser"
              type="text"
            />
          </div>
          {/*  Last Name */}
          <div className="p-2">
            <label
              htmlFor="lnameuser"
              className="block mb-1 font-[600] text-gray-900"
            >
              {t("Last Name")}
              <span className="text-red-500">*</span>
            </label>
            <input
              required
              placeholder={t("bazrafkan")}
              className="w-full rounded-lg px-4 py-2  border border-gray-600 text-gray-700 placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-800"
              id="lnameuser"
              name="lnameuser"
              type="text"
            />
          </div>
          {/*  Job Title */}
          <div className="p-2">
            <label
              htmlFor="Leveljob"
              className="block mb-1 font-[600] text-gray-900"
            >
              {t("Job Title")}
              <span className="text-red-500">*</span>
            </label>
            <input
              required
              placeholder={t("job")}
              className="w-full rounded-lg px-4 py-2  border border-gray-600 text-gray-700 placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-800"
              id="Leveljob"
              name="Leveljob"
              type="text"
            />
          </div>
          {/* email */}
          <div className="p-2">
            <label
              htmlFor="emailuser"
              className="block mb-1 font-[600] text-gray-900"
            >
              {t("Email")}
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
          {/* git hub */}
          <div className="p-2">
            <label
              htmlFor="githubuser"
              className="block mb-1 font-[600] text-gray-900"
            >
              {t("Link Github")}
              <span className="text-red-500">*</span>
            </label>
            <input
              required
              placeholder="http://github.com/shaghayegh-b/bazrafkan-portfolio"
              className="w-full rounded-lg px-4 py-2  border border-gray-600 text-gray-700 placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-800"
              id="githubuser"
              name="githubuser"
              type="text"
            />
          </div>
          {/* Phone Number */}
          <div className="p-2">
            <label
              htmlFor="phoneNumberuser"
              className="block mb-1 font-[600] text-gray-900"
            >
              {t("Phone Number")}
              <span className="text-red-500">*</span>
            </label>
            <input
              required
              placeholder="+989399619640"
              className="w-full rounded-lg px-4 py-2  border border-gray-600 text-gray-700 placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-800"
              id="phoneNumberuser"
              name="phoneNumberuser"
              type="text"
            />
          </div>
          {/* location */}
          <div className="p-2 ">
            <h2 className="block mb-1 font-[600] text-gray-900">
              {t("Address")} <span className="text-red-500">*</span>
            </h2>
            <div className="flex flex-col gap-2 mt-1">
              <div className="">
                <NavLink
                  to="/bazrafkan-portfolio/SelectLocation"
                  onClick={() => setSelectaddress(true)}
                  type="button"
                  className="text-white bg-gray-500 hover:bg-gray-600 font-medium rounded-lg text-sm p-[.5rem] text-center inline-flex items-center me-2"
                >
                  {t("SelectLocation")}
                </NavLink>
              </div>
              <div className=" flex flex-col ">
                <label htmlFor="Country" className="block text-sm mb-1">
                  {t("Country")}
                </label>
                <input
                  required
                  placeholder={t("iran")}
                  className="w-full rounded-lg px-4 py-2  border border-gray-600 text-gray-700 placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-800"
                  id="Country"
                  name="Country"
                  type="text"
                />
              </div>

              <div className=" flex flex-col">
                <label htmlFor="City" className="block   text-sm mb-1">
                  {t("City")}
                </label>
                <input
                  required
                  placeholder={t("ahvaz")}
                  className="w-full rounded-lg px-4 py-2  border border-gray-600 text-gray-700 placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-800"
                  id="City"
                  name="City"
                  type="text"
                />
              </div>
            </div>
          </div>
          {/* About Me */}
          <div className="p-2">
            <label
              htmlFor="phoneNumberuser"
              className="block mb-1 font-[600] text-gray-900"
            >
              {t("Describe Yourself")}
              <span className="text-red-500">*</span>
            </label>
            <textarea
              required
              className="w-full rounded-lg px-4 py-2  border border-gray-600 text-gray-700 placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-800"
              id="phoneNumberuser"
              name="phoneNumberuser"
              type="text"
            />
          </div>
          {/* Work Experince */}
          <div className="p-2">
            <label
              htmlFor="phoneNumberuser"
              className="block mb-1 font-[600] text-gray-900"
            >
              {t("Work Experince")}
            </label>
            <input
              className="w-full rounded-lg px-4 py-2  border border-gray-600 text-gray-700 placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-800"
              id="phoneNumberuser"
              name="phoneNumberuser"
              type="text"
            />
          </div>
          {/* button */}
          <div>
            <button
              type="submit"
              className="text-white bg-gray-500 hover:bg-gray-600 font-medium text-right  rounded-lg text-sm px-4 py-2 cursor-pointer  inline-flex items-center me-2"
            >
              {t("send")}
              <i className="fa-regular fa-paper-plane px-1"></i>
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
