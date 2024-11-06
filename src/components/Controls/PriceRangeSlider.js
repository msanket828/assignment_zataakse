import React, { useEffect, useState } from "react";
import { useFilter } from "../../context/FilterContext";
import { MAXPRICE } from "../../constant";

const PriceRangeSlider = () => {
  const { priceRange, updatedPriceRange } = useFilter();
  const [isPriceChanged, setIsPriceChanged] = useState(false);
  const handleRangeChange = (e) => {
    const value = parseFloat(e.target.value);
    if (value <= MAXPRICE) {
      setIsPriceChanged(false);
    } else {
      setIsPriceChanged(true);
    }
    updatedPriceRange([0, value]);
  };
  return (
    <>
      <h2>
        Price range $0 - ${isPriceChanged ? priceRange[0] : priceRange[1]}
      </h2>
      <input
        type="range"
        min="0"
        max={MAXPRICE}
        step={5}
        onChange={handleRangeChange}
        defaultValue={MAXPRICE}
      />
    </>
  );
};

export default PriceRangeSlider;
