import { memo } from "react";
import { useSwiper } from "swiper/react";
import { useTranslation } from "react-i18next";
function Buttonswiper() {
  const swiper = useSwiper();
  const { t } = useTranslation();
  return (
    <div className="flex w-full justify-between items-center ">
      <h2 className="text-start text-[1.7rem] font-medium p-3 pb-5">
        {t("titleprojects")}
      </h2>

      <div className="Buttonswiper">
        {/*  */}
        <button
          className="text-white bg-gray-500 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-full text-sm p-[.5rem] text-center inline-flex items-center me-2 dark:focus:ring-gray-800"
          onClick={() => {
            swiper.slidePrev();
          }}
        >
          {" "}
          <svg
            class="w-[1rem] h-[1rem]"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 5H1m0 0l4 4m-4-4l4-4"
            />
          </svg>
        </button>
        <button
          className="text-white bg-gray-500 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-full text-sm p-[.5rem] text-center inline-flex items-center me-2 dark:focus:ring-gray-800"
          onClick={() => {
            swiper.slideNext();
          }}
        >
          <svg
            class="w-[1rem] h-[1rem]"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
export default memo(Buttonswiper);
