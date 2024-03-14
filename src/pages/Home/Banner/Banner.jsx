import bgBanner from "../../../assets/bgbanner.png";
import { World } from "../../../contexts/World/WorldContext";
const Banner = () => {
  const newCities = new World(2);
  console.log(newCities.cities);

  const handleCity = e =>{
    console.log(e)
    e.preventDefaults();
  }

  return (
    <div className="mt-10 bg-[#12132D] h-[550px] rounded-3xl bg-cover bg-bottom" style={{backgroundImage: `url(${bgBanner})`}}>
        <div className="flex gap-10 lg:gap-44 justify-center items-center flex-col lg:flex-row">
          <div className="max-w-md">
            <h1 className="mb-5 text-[40px] lg:text-[64px] lg:w-[633px] text-white font-extrabold">Welcome to the <span className="text-[#797DFC] uppercase">World</span></h1>
            <label className="flex items-center gap-2 rounded-full px-4 py-8">
              <input id="search-field" type="text" placeholder="Create City or Cities" />
              <button onClick={handleCity} className="rounded-full font-bold text-xl px-8 text-white bg-[#797DFC]">City</button>
            </label>
          </div>

          <div className="bg-gray-100 lg:bg-white p-10 flex gap-20 font-medium text-2xl rounded-3xl">
            <div className="space-y-6">
              <p>Country</p>
              <p>City</p>
              <p>Citizen</p>
            </div>
            <div className="space-y-6">
              <p>01</p>
              <p>{newCities.cities.length}</p>
              <p>{newCities.cities.length * 50}</p>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Banner;