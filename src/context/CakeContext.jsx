// src/context/CakeContext.jsx

import React, { createContext, useState, useEffect } from 'react';
import { getCakes, addCake, updateCake, deleteCake } from '../services/cakeService';

export const CakeContext = createContext();

export const CakeProvider = ({ children }) => {
  const [cakes, setCakes] = useState([]);

  useEffect(() => {
    const fetchCakes = async () => {
      const cakesData = await getCakes();
      setCakes(cakesData);
    };

    fetchCakes();
  }, []);

  const addNewCake = async (cake) => {
    await addCake(cake);
    setCakes([...cakes, cake]);
  };

  const updateExistingCake = async (id, updatedCake) => {
    await updateCake(id, updatedCake);
    setCakes(cakes.map(cake => (cake.id === id ? updatedCake : cake)));
  };

  const deleteExistingCake = async (id) => {
    await deleteCake(id);
    setCakes(cakes.filter(cake => cake.id !== id));
  };

  return (
    <CakeContext.Provider value={{ cakes, addNewCake, updateExistingCake, deleteExistingCake }}>
      {children}
    </CakeContext.Provider>
  );
};

