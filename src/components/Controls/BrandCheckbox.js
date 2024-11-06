import React from "react";
import { useFilter } from "../../context/FilterContext.js";
import classes from "./Controls.module.css";

const BrandCheckbox = ({ brand }) => {
  const { selectedBrands, toggleBrands } = useFilter();
  return (
    <div className={classes.formcontrol}>
      <input
        type="checkbox"
        id={brand}
        checked={selectedBrands.includes(brand)}
        onChange={() => toggleBrands(brand)}
        defaultValue={brand}
      />
      <label htmlFor={brand}>{brand}</label>
    </div>
  );
};

export default BrandCheckbox;
