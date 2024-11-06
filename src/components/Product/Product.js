import React from "react";
import classes from "./Product.module.css";
const Product = ({
  id,
  name,
  category,
  brand,
  availability,
  price,
  mostPopular,
  image,
}) => {
  return (
    <div className={classes.productcard}>
      <div className={classes.productcardcontainer}>
        <img src={image} alt={name} />
        <h2>{category}</h2>
        <h3>{name}</h3>
        <p>${price}</p>
      </div>
    </div>
  );
};

export default Product;
