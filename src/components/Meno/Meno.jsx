import { memo, useState } from "react";
import "./Meno.css";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
function Meno() {
  const { t, i18n } = useTranslation();
  const [myClick, setMyClick] = useState(false);
  const [dd, setdd] = useState(false);
  return (
    <div className="">
      <div className="">
        <div className={`meno flex  items-center`}>
          <button
            onClick={() => setMyClick((prev) => !prev)}
            type="button"
            className="btn"
          >
            <i className=" fas fa-bars"></i>
          </button>
          <ul
            className={` flex  items-center transition-all duration-900 transform origin-top  ${
              myClick ? "opacity-100" : "  opacity-0  pointer-events-none "
            } `}
          >
            <li
              className="btn w-[6rem]  group "
              onClick={() => {
                setdd((prev) => !prev);
              }}
            >
              {t("lang")}
              <div className={`${dd ? "" : "hidden"}`}>
                <button onClick={() => i18n.changeLanguage("fa")}>
                  فارسی{" "}
                </button>
                <b>|</b>
                <button onClick={() => i18n.changeLanguage("en")}>
                  English
                </button>
              </div>
            </li>
            <li className="btn w-[6rem]  group font-bold">
              <NavLink to="/bazrafkan-portfolio/CreatePortfolio" className="nav-link">+
                <span className="group-hover:block hidden">
                  {t("createporto")}
                </span>
              </NavLink>
            </li>
            <li className="btn w-[6rem] group " onClick={()=>window.print()}>
              p<span className="group-hover:block hidden">{t("print")}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default memo(Meno);
