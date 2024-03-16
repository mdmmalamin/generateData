import { useContext } from "react";
import Citizen from "../Citizen/Citizen";
import { DataContext } from "../../../contexts/Providers/DataProvider";

const City = () => {
  const { countCity, addNewCity } = useContext(DataContext);
  // console.log(countCity?.cities?.map((city) => city.city));
  // console.log(city?.map(singleCity => singleCity[0]));
  console.log(countCity, addNewCity)
  return (
    <>
    { countCity ? 
      countCity?.map((city, idx) => 
        <div className="collapse collapse-arrow bg-base-200" key={idx}>
          <input type="radio" name="my-accordion-2" defaultChecked /> 
          <div className="collapse-title text-xl font-medium text-center">
            {idx+1}. {city.city}
          </div>
          <div className="collapse-content grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-items-center gap-5"> 
            <Citizen city={city} />
          </div>
        </div>
      )
      :
      <></>
    }
    { addNewCity ? 
      addNewCity?.map((city, idx) => 
        <div className="collapse collapse-arrow bg-base-200" key={idx}>
          <input type="radio" name="my-accordion-2" defaultChecked /> 
          <div className="collapse-title text-xl font-medium text-center">
            {idx+1}. {city.city}
          </div>
          <div className="collapse-content grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-items-center gap-5"> 
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
