import { NavLink } from "react-router-dom";
import LocationMap from "./LocationMap";
import { useState } from "react";

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
    <div className=" m-3 p-3 pb-2">
      <form onSubmit={handleSubmit}>
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

          <div className=" p-2 inline-block hover:bg-gray-500 m-2 bg-gray-400 rounded-lg  ">
          <NavLink
          to="/bazrafkan-portfolio/CreatePortfolio"
            type="submit"
            disabled={!location}
            className= "cursor-pointer"
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
