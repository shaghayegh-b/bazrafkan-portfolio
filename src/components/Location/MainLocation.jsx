import { NavLink } from "react-router-dom";
import LocationMap from "./LocationMap";
import { useState } from "react";
// dark style
import './MainLocation.css'
export default function MainLocation() {
  const [location, setLocation] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!location) {
      alert("موقعیت مکانی انتخاب کنید");
      return;
    }
  };
  return (
    <div className="MainLocation p-3 pb-[50vh] bg-[#f3f4f6] w-[100%] ">
      <form onSubmit={handleSubmit}
      className="">
        {/* LocationMap */}
        <div className="p-2">
          <LocationMap onLocationChange={setLocation}></LocationMap>
          {location && (
            <>
              <p>
                {location.lat} /{location.lng}
              </p>
              <input type="hidden" name="latitude" value={location.lat} />
              <input type="hidden" name="latitude" value={location.lat} />
            </>
          )}

          <div className="">
          <NavLink
          to="/bazrafkan-portfolio/CreatePortfolio"
            type="submit"
            disabled={!location}
            className="m-2 text-white bg-gray-500 hover:bg-gray-600 font-medium text-right  rounded-lg text-sm px-4 py-2 cursor-pointer  inline-flex items-center me-2"
            >
            تایید و ادامه
            <i className="fa-regular fa-paper-plane px-1"></i>
          </NavLink>
          </div>
        </div>
      </form>
    </div>
  );
}
