import { memo } from 'react';
import { useSwiper } from 'swiper/react';
function Buttonswiper() {
    const swiper = useSwiper();
    return(
        <div className="flex w-full justify-between items-center ">
        <h2 className="text-start text-[1.7rem] font-medium p-3 pb-5">
          projects
        </h2>

        <div>
        <button className="px-3 py-[3px] rounded-2xl bg-[#6d6d6d86] m-2" onClick={() => {swiper.slidePrev()}}>previous</button>
        <button className="px-3 py-[3px] rounded-2xl bg-[#6d6d6d86] m-2" onClick={() =>{ swiper.slideNext()}}>next</button>
        </div>
      </div>
    )
}
export default memo(Buttonswiper)
