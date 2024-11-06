import React, { useEffect, useState } from "react";
import classes from "./ProductListing.module.css";
import Sidebar from "../Sidebar/Sidebar";
import { FETCHURL } from "../../constant";
import Product from "../Product/Product";
import { useFilter } from "../../context/FilterContext";
const ProductListing = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { selectedCategories, selectedBrands, priceRange, selectedStockValue } =
    useFilter();

  const loadProducts = async () => {
    try {
      let products = await fetch(FETCHURL);
      products = await products.json();
      if (products) {
        setLoading(false);
      }
      setProducts(products);
    } catch (error) {
      setLoading(false);
      console.log(error.message);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const filterProducts = products.filter((product) => {
    const matchCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category);
    const matchBrand =
      selectedBrands.length === 0 || selectedBrands.includes(product.brand);
    const matchPrice =
      product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchStockValue =
      selectedStockValue.length === 0 ||
      selectedStockValue.includes(product.availability);
    return matchCategory && matchBrand && matchPrice && matchStockValue;
  });

  return (
    <div className={classes.productListing}>
      <div className="container">
        {loading ? (
          <h2>Loading...</h2>
        ) : (
          <div className={classes.container}>
            {/* sidebar */}
            <Sidebar />

            {/* productList */}
            <div className={classes.productlistcontainer}>
              {filterProducts.length === 0 && <h2>No products found...</h2>}
              {filterProducts.length > 0 && (
                <h2>
                  Showing {filterProducts.length} of {products.length} Products
                </h2>
              )}
              <div className={classes.productlistsubcontainer}>
                {filterProducts.length > 0 &&
                  filterProducts.map((product) => {
                    return <Product key={product.id} {...product} />;
                  })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductListing;
