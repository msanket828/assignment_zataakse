import React from "react";
import { useFilter } from "../../context/FilterContext";
import classes from "./Controls.module.css";

const AvailibilityCheckbox = ({ stockValue }) => {
  const { toggleStocks, selectedStockValue } = useFilter();
  return (
    <div className={classes.formcontrol}>
      <input
        type="checkbox"
        id={stockValue}
        checked={selectedStockValue.includes(stockValue)}
        onChange={() => toggleStocks(stockValue)}
        defaultValue={stockValue}
      />
      <label htmlFor={stockValue}>{stockValue}</label>
    </div>
  );
};

export default AvailibilityCheckbox;
