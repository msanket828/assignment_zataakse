import React from "react";
import AvailibilityCheckbox from "../Controls/AvailibilityCheckbox";
import BrandCheckbox from "../Controls/BrandCheckbox";
import CategoryCheckbox from "../Controls/CategoryCheckbox";
import PriceRangeSlider from "../Controls/PriceRangeSlider";
import classes from "./Sidebar.module.css";

const Sidebar = () => {
  const categories = [
    "Electronics",
    "Furniture",
    "Accessories",
    "Footwear",
    "Kitchen Appliances",
    "Computers",
    "Fitness",
    "Sports Equipment",
  ];
  const brands = [
    "AudioTech",
    "VisionX",
    "ComfortPlus",
    "EcoHydrate",
    "PhotoMaster",
    "FlexiFit",
    "TrailBlazer",
    "GameZone",
    "RunPro",
    "BrewKing",
  ];
  const avialibility = ["Out of Stock", "In Stock", "Limited Stock"];

  return (
    <aside>
      {/* categories */}
      <div className={classes.formcontrolgroup}>
        <h2 className={classes.filtertitle}>Categories</h2>
        {categories.map((category) => (
          <CategoryCheckbox key={category} category={category} />
        ))}
      </div>

      <div className={classes.formcontrolgroup}>
        <h2 className={classes.filtertitle}>Price</h2>
        <PriceRangeSlider />
      </div>

      <div className={classes.formcontrolgroup}>
        <h2 className={classes.filtertitle}>Brands</h2>
        {brands.map((brand) => (
          <BrandCheckbox key={brand} brand={brand} />
        ))}
      </div>

      <div className={classes.formcontrolgroup}>
        <h2 className={classes.filtertitle}>Availability</h2>
        {avialibility.map((stockValue) => (
          <AvailibilityCheckbox key={stockValue} stockValue={stockValue} />
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
