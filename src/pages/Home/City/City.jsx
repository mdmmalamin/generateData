import { useContext } from "react";
import Citizen from "../Citizen/Citizen";
import { DataContext } from "../../../contexts/Providers/DataProvider";

const City = () => {
  const { countCity } = useContext(DataContext);
  console.log(countCity?.cities?.map((city) => city.city));
  return (
    <>
    { countCity ? 
      countCity?.cities?.map((city, idx) => 
        <div className="collapse collapse-arrow bg-base-200" key={idx}>
          <input type="radio" name="my-accordion-2" defaultChecked /> 
          <div className="collapse-title text-xl font-medium text-center">
            {idx+1} {city.city}
          </div>
          <div className="collapse-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-5"> 
            <Citizen city={city} />
          </div>
        </div>
      )
      :
      <></>
    }
    </>
  );
};

export default City;
