import { memo, useState } from "react";
import "../../../components/Meno/Meno.css";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
function Menocreate() {
  const { t, i18n } = useTranslation();
  const [myClick, setMyClick] = useState(true);
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
              className="btn group "
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
            <li className="btn group font-bold">
              <NavLink to="/bazrafkan-portfolio/" className="nav-link">
              <i className=" fa fa-home"></i>
                <span className="group-hover:block hidden">
                  Go To Home
                </span>
              </NavLink>
            </li>
            <li className="btn group " onClick={()=>window.print()}>
              p<span className="group-hover:block hidden">{t("print")}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default memo(Menocreate);
