import { useContext } from "react";
import { DataContext } from "../../contexts/Providers/DataProvider";

const AddCityForm = () => {
  const {addCity} = useContext(DataContext);

  const handleSubmit = e =>{
    e.preventDefault();
    const name = e.target.name.value;
    // console.log(name)
    addCity(name);
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="flex gap-0">
        <input
          name="name"
          type="text"
          placeholder="Enter City Name"
          className="p-1.5 font-medium"
        />
        <input
          type="submit"
          value="Add City"
          className="rounded-full rounded-l-none font-bold text-md px-5 text-white bg-[#797DFC]"
        />
      </form>
    </>
  );
};

export default AddCityForm;