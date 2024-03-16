/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { World } from "../World/WorldContext";

export const DataContext = createContext(null);

const DataProvider = ({children}) => {
  const [countCity, setCountCity] = useState([]);
  const [addNewCity, setAddNewCity] = useState([]);

  const allCity = [...countCity, ...addNewCity];
  console.log("All City: ", allCity);

  const createCity = noOfCity => {
    const newCities = new World(noOfCity);
    console.log("new World: ", newCities.cities);
    setCountCity(newCities?.cities);
    return newCities;
  }

  const addCity = cityName => {
    const newCity = new World();
    newCity.add_city(cityName);
    // setAddNewCity(newCity.cities);
    setAddNewCity(oldCity => [...oldCity, ...newCity.cities])
    return newCity;
  }

  const dataInfo = {
    createCity,
    countCity,
    addCity,
    addNewCity,
    allCity
  }
  return (
    <DataContext.Provider value={dataInfo}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;