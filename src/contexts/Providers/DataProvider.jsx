/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { World } from "../World/WorldContext";

export const DataContext = createContext(null);

const DataProvider = ({children}) => {
  const [countCity, setCountCity] = useState(null);
  const [addNewCity, setAddNewCity] = useState(null);

  const createCity = noOfCity => {
    const newCities = new World(noOfCity);
    console.log(newCities);
    setCountCity(newCities?.cities);
    return newCities;
  }

  const addCity = cityName => {
    const newCity = new World();
    newCity.add_city(cityName);
    setAddNewCity(newCity.cities)
    return newCity;
  }

  const dataInfo = {
    createCity,
    countCity,
    addCity,
    addNewCity
  }
  return (
    <DataContext.Provider value={dataInfo}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;