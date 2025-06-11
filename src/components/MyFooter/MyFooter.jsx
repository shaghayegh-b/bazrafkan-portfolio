import { useTranslation } from "react-i18next";
// dark style
import "./MyFooter.css";
function MyFooter() {
  const { t } = useTranslation();
  return (
    <>
        <div className="footer flex flex-col gap-[.5rem] items-center justify-between">
          <p className="p-1 text-center ">{t("footerp1")}</p>
          <div className="p-1  text-.9rem text-center">
            <p className="footer2 text-[.8rem]">
              {t("footerp2")}
              <a
                className="text-blue-900"
                target="-blank"
                href="https://github.com/shaghayegh-b/bazrafkan-portfolio"
              >
                GitHub Pages
              </a>
              .
            </p>
            <p className=" text-[.8rem] ">{t("footerp3")}</p>
          </div>
          <p className="p-1 text-center">{t("footerp4")}</p>
          <div className="footer5 p-2 flex justify-center items-center text-gray-600 text-xl">
            <a
              href="https://www.google.com/maps?q=Khuzestan,+Iran"
              target="-blank"
            >
              <i className="fa-solid  fa-map-location-dot  p-2"></i>
            </a>
            <a href={`mailto:${"bazrafkannjad.sh@gmail.com"}`}>
              <i className="fa fa-at  p-2"></i>
            </a>
            <a href={`tel:${+989399619640}`}>
              <i className="fa fa-phone p-2"></i>
            </a>
            <a href="https://github.com/shaghayegh-b" target="-blank">
              <i className="fa-brands fa-github text-[1.5rem] p-2"></i>
            </a>
          </div>
        </div>
    </>
  );
}
export default MyFooter;
