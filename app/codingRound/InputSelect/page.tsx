"use client";
import { products } from "@/utils/data/product";
import React, { useEffect, useState } from "react";
import { ProductProps } from "@/utils/data/product";

const InputSelect = () => {
  const [selectCategoryValue, setSelectCategoryValue] = useState("");
  // const [search, setSearch] = useState("");
  const [updateProduct, setUpdateProduct] = useState<ProductProps[]>([]);
  const [priceRange, setPriceRange] = useState<number[]>([0, 0]);

  const Price = products.map((value) => value.price);
  const maxPrice = Math.max(...Price);
  const minPrice = Math.min(...Price);

  useEffect(() => {
    setPriceRange([minPrice, maxPrice]); // Initialize the range with min and max price
  }, [minPrice, maxPrice]);

  const uniqueCategory = Array.from(
    new Set(products.map((value) => value.category))
  );
  const uniqueCategoryAll = ["All", ...uniqueCategory];

  const ChangeSelectHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectCategoryValue(event.target.value);
  };

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPriceRange([minPrice, Number(event.target.value)]);
  };

  useEffect(() => {
    let FilterProductData = products;

    if (selectCategoryValue !== "" && selectCategoryValue !== "All") {
      FilterProductData = FilterProductData.filter(
        (value) => value.category === selectCategoryValue
      );
    }

    // Filter by price range
    FilterProductData = FilterProductData.filter(
      (value) => value.price >= priceRange[0] && value.price <= priceRange[1]
    );

    setUpdateProduct(FilterProductData);
  }, [selectCategoryValue, priceRange]);

  return (
    <div>
      <div className="flex flex-row">
        {/* Sidebar for checkboxes */}
        <div className="w-1/4 mx-auto">
          {/* Category Filter */}
          <label htmlFor="selectCategory" className="sr-only">
            Category
          </label>
          <select
            name="selectCategory"
            id="selectCategory"
            value={selectCategoryValue}
            onChange={ChangeSelectHandler}
            className="px-5 py-3 w-52 border border-black"
          >
            {uniqueCategoryAll.map((value) => {
              return <option key={value}>{value}</option>;
            })}
          </select>

          {/* Price Range Filter */}
          <div className="mt-5">
            <label htmlFor="priceRange" className="block mb-2">
              Price: ${priceRange[0]} - ${priceRange[1]}
            </label>
            <input
              type="range"
              id="priceRange"
              name="priceRange"
              min={minPrice}
              max={maxPrice}
              value={priceRange[1]}
              onChange={handlePriceChange}
              className="w-full"
            />
          </div>
        </div>

        {/* Main content for filtered products */}
        <div className="w-3/4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {updateProduct.map((product) => (
              <div
                key={product.id}
                className="border border-red-500 bg-black text-white p-5"
              >
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <span>Price: ${product.price}</span>
                <p>Category: {product.category}</p>
                <p>{product.inStock ? "In Stock" : "Out of Stock"}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputSelect;
