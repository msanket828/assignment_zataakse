import { createContext, useContext, useState } from "react";
import { MAXPRICE } from "../constant";

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [priceRange, setPriceRange] = useState([0, MAXPRICE]);
  const [selectedStockValue, setSelectedStockValue] = useState([]);

  const toggleCategories = (category) => {
    setSelectedCategories((prev) => {
      return prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category];
    });
  };

  const toggleBrands = (brand) => {
    setSelectedBrands((prev) => {
      return prev.includes(brand)
        ? prev.filter((b) => b !== brand)
        : [...prev, brand];
    });
  };

  const toggleStocks = (avialibility) => {
    setSelectedStockValue((prev) => {
      return prev.includes(avialibility)
        ? prev.filter((a) => a !== avialibility)
        : [...prev, avialibility];
    });
  };

  const updatedPriceRange = (range) => {
    setPriceRange(range);
  };

  return (
    <FilterContext.Provider
      value={{
        selectedCategories,
        toggleCategories,
        selectedBrands,
        toggleBrands,
        priceRange,
        updatedPriceRange,
        toggleStocks,
        selectedStockValue,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => {
  return useContext(FilterContext);
};
