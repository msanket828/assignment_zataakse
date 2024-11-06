import React from "react";
import { useFilter } from "../../context/FilterContext.js";
import classes from "./Controls.module.css";

const CategoryCheckbox = ({ category }) => {
  const { toggleCategories, selectedCategories } = useFilter();
  return (
    <div className={classes.formcontrol}>
      <input
        type="checkbox"
        id={category}
        checked={selectedCategories.includes(category)}
        onChange={() => toggleCategories(category)}
        defaultValue={category}
      />
      <label htmlFor={category}>{category}</label>
    </div>
  );
};

export default CategoryCheckbox;
