import { useTranslation } from "react-i18next";
import MainLocation from "./Location/MainLocation";
import { useState } from "react";
import { NavLink } from "react-router-dom";
export default function CreatePortfolio() {
  const { t } = useTranslation();
  const [Selectaddress, setSelectaddress] = useState(false);
  console.log(location);
  return (
    <>
      <section className="my-2 m-auto w-[85%] p-9 ">
        <form>
          {/*  Last Name */}
          <div className="p-2">
            <label
              htmlFor="lnameuser"
              className="block mb-1 font-[600]"
            >
              Last Name
              <span className="text-red-500">*</span>
            </label>
            <input
              required
              placeholder={t("placeholdername")}
              className="w-full rounded-lg px-4 py-2  border border-gray-600 text-gray-700 placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-800"
              id="lnameuser"
              name="lnameuser"
              type="text"
            />
          </div>
          {/* first name */}
          <div className="p-2">
            <label
              htmlFor="fnameuser"
              className="block mb-1 font-[600]"
            >
              First Name
              <span className="text-red-500">*</span>
            </label>
            <input
              required
              placeholder="First Name"
              className="w-full rounded-lg px-4 py-2  border border-gray-600 text-gray-700 placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-800"
              id="fnameuser"
              name="fnameuser"
              type="text"
            />
          </div>
          {/*  Job */}
          <div className="p-2">
            <label
              htmlFor="job"
              className="block mb-1 font-[600]"
            >
              Job
              <span className="text-red-500">*</span>
            </label>
            <input
              required
              placeholder="programes"
              className="w-full rounded-lg px-4 py-2  border border-gray-600 text-gray-700 placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-800"
              id="job"
              name="job"
              type="text"
            />
          </div>
          {/*  Level Job */}
          <div className="p-2">
            <label
              htmlFor="Leveljob"
              className="block mb-1 font-[600]"
            >
              Level Job
              <span className="text-red-500">*</span>
            </label>
            <input
              required
              placeholder="Junior Front-End Developer"
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
              className="block mb-1 font-[600]"
            >
              Email
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
              className="block mb-1 font-[600]"
            >
              Link Github
              <span className="text-red-500">*</span>
            </label>
            <input
              required
              placeholder="Link Github"
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
              className="block mb-1 font-[600]"
            >
              Phone Number
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
            <h2 className="block mb-1 font-[600]">
              Location <span className="text-red-500">*</span>
            </h2>
            <div className="flex flex-col gap-2 mt-1">
              <div className="">
              <NavLink
                to="/bazrafkan-portfolio/SelectLocation"
                onClick={() => setSelectaddress(true)}
                type="button"
                 className="h-[fit-content] tracking-tight text-center p-2 inline-block hover:bg-gray-500 bg-gray-400 rounded-lg  "
              >
                Select address from map
              </NavLink>
              </div>
              <div className=" flex flex-col ">
                <label
                  htmlFor="Country"
                  className="block text-sm mb-1"
                >
                  Country
                </label>
                <input
                  required
                  placeholder="Country"
                  className="w-full rounded-lg px-4 py-2  border border-gray-600 text-gray-700 placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-800"
                  id="Country"
                  name="Country"
                  type="text"
                />
              </div>
              <div className=" flex flex-col">
                <label
                  htmlFor="Province"
                  className="block text-sm mb-1 "
                >
                  Province (or State)
                </label>
                <input
                  required
                  placeholder="Province"
                  className="w-full rounded-lg px-4 py-2  border border-gray-600 text-gray-700 placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-800"
                  id="Province"
                  name="Province"
                  type="text"
                />
              </div>
              <div className=" flex flex-col">
                <label
                  htmlFor="City"
                  className="block   text-sm mb-1"
                >
                  City
                </label>
                <input
                  required
                  placeholder="City"
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
              className="block mb-1 font-[600]"
            >
              About Me
              <span className="text-red-500">*</span>
            </label>
            <textarea
              required
              placeholder="write asummary about yourself"
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
              className="block mb-1 font-[600]"
            >
              Work Experince
            </label>
            <input
              placeholder="write about your experiences"
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
              className="bg-gray-400 text-right hover:bg-gray-500 pr-5 pl-4 py-2 rounded-lg m-2 cursor-pointer"
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
