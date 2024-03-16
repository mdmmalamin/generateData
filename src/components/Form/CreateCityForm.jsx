import { useContext } from "react";
import { DataContext } from "../../contexts/Providers/DataProvider";

const CreateCityForm = () => {
  const {createCity} = useContext(DataContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const city = event.target.city.value;
    createCity(city);
    // console.log(createCity(city))
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex gap-0">
        <input
          name="city"
          type="number"
          placeholder="Create City or Cities"
          className="p-1.5 font-medium spin-button-none"
        />
        <input
          type="submit"
          value="Random City"
          className="rounded-full rounded-l-none font-bold text-md px-5 text-white bg-[#797DFC]"
        />
      </form>
    </>
  );
};

export default CreateCityForm;