/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { World } from "../World/WorldContext";

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  const [countCity, setCountCity] = useState([]);
  const [addNewCity, setAddNewCity] = useState([]);

  const allCity = [...countCity, ...addNewCity];
  console.log("All City: ", allCity);

  const createCity = (noOfCity) => {
    const newCities = new World(noOfCity);
    console.log("new World: ", newCities.cities);
    setCountCity(newCities?.cities);

    // const randomCity = newCities.random_city();
    return newCities;
  };

  const addCity = (cityName = '') => {
    const isExist = allCity.find(city => city.city === cityName);
    if(!isExist){
      const newCity = new World();
      newCity.add_city(cityName);
      setAddNewCity((oldCity) => [...oldCity, ...newCity.cities]);
      return newCity;
    }
    else{
      alert(`${cityName} City Already Exist!`);
    }
  };

  // const selectRandomCity = () => {
  //   const callCity = createCity();

  //   return callCity.randomCity;
  // }

  const dataInfo = {
    createCity,
    countCity,
    addCity,
    addNewCity,
    allCity,
    // selectRandomCity,
  };
  return (
    <DataContext.Provider value={dataInfo}>{children}</DataContext.Provider>
  );
};

export default DataProvider;
