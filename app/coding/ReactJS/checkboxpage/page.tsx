"use client";
import { products } from "@/utils/data/product";
import React, { useState } from "react";

const CheckBox = () => {
  const arr = [1, 2, 3, 4, 5];
  arr.length = 0;
  // console.log("🚀 ~ file: CheckBox.tsx:7 ~ arr:", arr);

  // Get unique categories from the product list
  const categories = Array.from(
    new Set(products.map((value) => value.category))
  );

  // State to hold selected categories
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  // Handle checkbox toggle
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    // Update the selected categories based on the checkbox state
    setSelectedCategories((prevSelected) =>
      checked
        ? [...prevSelected, value]
        : prevSelected.filter((category) => category !== value)
    );
  };

  // Filter products based on selected categories
  const filteredProducts =
    selectedCategories.length > 0
      ? products.filter((product) =>
          selectedCategories.includes(product.category)
        )
      : products;
  // Show all products if no categories are selected

  return (
    <div className="flex flex-row">
      {/* Sidebar for checkboxes */}
      <div className="w-1/4">
        <div>
          {categories.map((category) => (
            <div className="flex flex-col gap-5" key={category}>
              <label
                htmlFor={`checkbox-${category}`}
                className="flex items-center gap-2"
              >
                <input
                  type="checkbox"
                  id={`checkbox-${category}`}
                  value={category}
                  onChange={handleCheckboxChange}
                />
                {category}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Main content for filtered products */}
      <div className="w-3/4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProducts.map((product) => (
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
  );
};

export default CheckBox;
