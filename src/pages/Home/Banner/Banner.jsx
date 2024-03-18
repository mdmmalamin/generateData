import { useContext } from "react";
import bgBanner from "../../../assets/bgBanner.png";
import CreateCityForm from "../../../components/Form/CreateCityForm";
import { DataContext } from "../../../contexts/Providers/DataProvider";
import AddCityForm from "../../../components/Form/AddCityForm";
// import AllCitiesForm from "../../../components/Form/AllCitiesForm";
const Banner = () => {
  const {allCity} = useContext(DataContext);
  const RandomCityIdx = Math.floor(Math.random() * allCity.length);
  // console.log(allCity[selectRandomCity].city);
  return (
    <div
      className="m-10 bg-[#12132D] rounded-3xl bg-cover bg-bottom p-4"
      style={{ backgroundImage: `url(${bgBanner})` }}
    >
      <div className="flex gap-10 lg:gap-44 justify-center items-center flex-col lg:flex-row">
        <div className="max-w-md">
          <h1 className="text-center text-2xl lg:text-[64px] lg:w-[633px] text-white font-extrabold">
            Welcome to the <span className="text-[#797DFC] uppercase">World</span>
          </h1>
          <label className="flex flex-col items-center gap-5 rounded-full px-4 py-8">
            <CreateCityForm />
            <AddCityForm />
            {/* <AllCitiesForm /> */}
          </label>
        </div>

        <div className="bg-gray-100 lg:bg-white p-5 md:p-10 flex gap-5 md:gap-20 font-medium text-sm md:text-2xl rounded-3xl">
          <div className="space-y-6">
            <p>Country</p>
            <p>Total City</p>
            <p>Random City</p>
            <p>Total Citizen</p>
          </div>
          <div className="space-y-6">
            <p>Bangladesh</p>
            <p>{allCity ? allCity.length : 0}</p>
            {/* <p>{!allCity ? 'No cities available.' : allCity[RandomCityIdx]?.city}</p> */}  {/* TODO fix this! */}
            <p>{`${allCity}` ? `${allCity[RandomCityIdx]?.city}` : 'No cities available.'}</p>
            <p>{allCity ? allCity.length * 50 : 0}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
