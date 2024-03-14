import { useContext } from "react";
// import { World } from "../../contexts/World/WorldContext";
import { DataContext } from "../../contexts/Providers/DataProvider";

const CreateCityForm = () => {
  const {createCity} = useContext(DataContext);

  // const [value, setValue] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const city = e.target.city.value;
    console.log(city);
    createCity(city);
    console.log(createCity(city))
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          name="city"
          type="number"
          placeholder="Create City or Cities"
        />
        <br />
        <br />
        <input
          type="submit"
          value="City"
          className="rounded-full font-bold text-xl px-8 text-white bg-[#797DFC]"
        />
      </form>
    </>
  );
};

export default CreateCityForm;