// import axios from "axios";
// import { projects } from "../../../data.jsx";
// import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function CreatePortfolio() {
      const { t } = useTranslation();

//   const [formData, setFormData] = useState({});
//   const btnhandler = () => {
//     // axios.post("http://localhost/react/api/articles/", formData);
//     setFormData({
//       title: "",
//       description: "",
//       imag: "",
//       readingTime: "",
//       category: "",
//       writter: "",
//     });
//   };
//   const formhandler = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };
  return (
    <>
      <form>
          <div className="p-2">
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
          <div className="p-2">
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
          <div className="p-2">
            <label htmlFor="" className="block  font-medium text-sm mb-1">
              {t("massageuser")}
              <span className="text-red-500">*</span>
            </label>
            <textarea
              required
              placeholder={t("placeholder massage")}
              name="massageuser"
              className="w-full rounded-lg px-4 py-2  border border-gray-600 text-gray-700 placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-800"
              rows={5}
              type="text"
            />
                      </div>
          {/* button */}
          <div>
            <button type="submit"  className="bg-gray-400 text-right hover:bg-gray-500 pr-5 pl-4 py-2 rounded-lg m-2">{t("send")}
                <i className="fa-regular fa-paper-plane px-1"></i>
            </button>
          </div>
        </form>
      {/* <div className="formcontainer">
        <form>
          <div className="mb-3">
            <label>عنولن مقاله</label>
            <input
              name="title"
              value={formData.title}
              type="text"
              placeholder="عنولن مقاله را وارد کنید"
              onChange={formhandler}
            />
          </div>

          <div className="mb-3">
            <label>توضیح کوتاه</label>
            <input
              name="description"
              value={formData.description}
              type="text"
              placeholder="یه توضیح کوتاه در مورد مقاله بنویس"
              onChange={formhandler}
            />
          </div>

          <div className="mb-3">
            <label>نویسنده مقاله</label>
            <input
              name="writter"
              value={formData.writter}
              type="text"
              placeholder="نام نویسنده مقاله را وارد کنید"
              onChange={formhandler}
            />
          </div>

          <div className="mb-3">
            <label>موضوع مقاله</label>
            <input
              name="category"
              value={formData.category}
              type="text"
              placeholder="موضوع مقاله را وارد کنید"
              onChange={formhandler}
            />
          </div>

          <div className="mb-3">
            <label>عکس مقاله</label>
            <input
              name="imag"
              value={formData.imag}
              type="text"
              placeholder="ادرس عکس مقاله را وارد کنید"
              onChange={formhandler}
            />
          </div>

          <div className="mb-3">
            <label>مدت زمان خواندن</label>
            <input
              name="readingTime"
              value={formData.readingTime}
              type="text"
              placeholder=""
              onChange={formhandler}
            />
          </div>
          <button onClick={btnhandler} variant="primary" type="button">
            ساخت مقاله
          </button>
        </form>
      </div> */}
    </>
  );
}
