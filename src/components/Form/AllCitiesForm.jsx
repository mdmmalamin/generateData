import { useContext } from "react";
import { DataContext } from "../../contexts/Providers/DataProvider";

const AllCitiesForm = () => {
  const {allCities} = useContext(DataContext);
  // console.log(allCities);

  const handleSubmit = e =>{ // TODO fix this!
    e.preventDefault();

    allCities;
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="flex gap-0">
        <input
          type="submit"
          value="All City"
          className="rounded-full rounded-l-none font-bold text-md px-5 text-white bg-[#797DFC]"
        />
      </form>
    </>
  );
};

export default AllCitiesForm;