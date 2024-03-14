/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { World } from "../World/WorldContext";

export const DataContext = createContext(null);

const DataProvider = ({children}) => {
  const [countCity, setCountCity] = useState(null);
  
  const createCity = countCity => {
    const newCities = new World(countCity);
    setCountCity(newCities);
    return newCities;
  }

  const dataInfo = {
    createCity,
    countCity
  }
  return (
    <DataContext.Provider value={dataInfo}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;