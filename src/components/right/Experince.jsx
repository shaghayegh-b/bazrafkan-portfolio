import { memo } from "react";
import { useTranslation } from "react-i18next";
function Experince() {
    const {t}=useTranslation()
  return (
    <div className="Experince" style={{ margin: "1.5rem 0" }}>
      <div className="part3">
        <i className="fas fa-calendar-alt style"></i>
        <h5 className="style">march2024-</h5>
        <h5 className="style h52">curent</h5>
      </div>
      <p className="part2">{t('companyname')}</p>

      <p className="part4">{t("fromdate")}</p>
    </div>
  );
}
export default memo(Experince);
