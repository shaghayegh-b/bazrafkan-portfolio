import { memo, useState, useEffect } from "react";
import "./Meno.css";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
function Meno() {
  const { t, i18n } = useTranslation();
  const [myClick, setMyClick] = useState(true);
  const [dd, setdd] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    return (
      localStorage.getItem("theme") === "dark" ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches &&
        !localStorage.getItem("theme"))
    );
  });
  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

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
             title={t("Change Languagr")}
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
            <li className="btn group font-bold" title={t("createporto")}>
              <NavLink
                to="/bazrafkan-portfolio/CreatePortfolio"
                className="nav-link"
              >
                +
              </NavLink>
            </li>
            <li
              className="btn group "
              onClick={() => window.print()}
              title={t("print")}
            >
              p
            </li>
            <li
              title={t("Change Theme Mode")}
              className="btn group font-bold"
              onClick={() => setIsDark(!isDark)}
            >
              <button
                className="w-[100%] h-[21px] md:h-[17px] m-auto transition-all duration-300
                 hover:rotate-180 ease-in-out"
              >
                <i
                  className={`fas ${
                    isDark ? "fa-sun" : "fa-moon"
                  } text-[100%] transition-transform duration-500`}
                ></i>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default memo(Meno);
