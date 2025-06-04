'use client';
import { products } from '@/main/data/common/product';
import Image from 'next/image';
import React, { useState } from 'react';

const FilterWithCheckBox = () => {
	const categories = Array.from(
		new Set(products.map((value) => value.category))
	);

	const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

	const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { value, checked } = event.target;
		setSelectedCategories((prevSelected) =>
			checked
				? [...prevSelected, value]
				: prevSelected.filter((category) => category !== value)
		);
	};

	const filteredProducts =
		selectedCategories.length > 0
			? products.filter((product) =>
					selectedCategories.includes(product.category)
			  )
			: products;

	return (
		<div className='flex flex-row px-4 py-6 gap-6'>
			{/* Sidebar for checkboxes */}
			<div className='w-1/4 rounded-lg p-4 shadow-md border border-indigo-600'>
				<h3 className='text-lg font-semibold text-gray-300 mb-4'>Categories</h3>
				<div className='space-y-3'>
					{categories.map((category) => (
						<div key={category}>
							<label
								htmlFor={`checkbox-${category}`}
								className='flex items-center gap-3 text-gray-300'
							>
								<input
									type='checkbox'
									//   id={`checkbox-${category}`}
									id={'checkbox-' + category}
									value={category}
									onChange={handleCheckboxChange}
									className='w-4 h-4 text-gray-300 border-indigo-600 rounded focus:ring-indigo-500'
								/>
								{category}
							</label>
						</div>
					))}
				</div>
			</div>

			{/* Main content for filtered products */}
			<div className='w-3/4 overflow-y-scroll h-[500px] rounded-lg p-4 shadow-md border border-indigo-600 custom-scrollbar'>
				{filteredProducts.length > 0 ? (
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
						{filteredProducts.map((product) => (
							<div
								key={product.id}
								className='border border-indigo-600 rounded-lg p-4 hover:shadow-lg transition-shadow '
							>
								<div className='relative overflow-hidden w-full h-20'>
									<Image
										src={product.imageUrl}
										alt={product.name}
										className='object-cover w-full h-full rounded-sm'
										fill
									/>
								</div>

								<h5 className='text-sm font-medium text-gray-300 mb-2 mt-1'>
									{product.name}
								</h5>

								<span className='block text-xs font-semibold text-gray-300 mb-1'>
									Price: ${product.price}
								</span>
								<p className='text-xs text-gray-300 mb-1'>
									Category: {product.category}
								</p>
								<p
									className={
										'text-xs font-medium ' +
										(product.inStock ? 'text-green-600' : 'text-red-600')
									}
								>
									{product.inStock ? 'In Stock' : 'Out of Stock'}
								</p>
							</div>
						))}
					</div>
				) : (
					<p className='text-gray-300 text-center'>No products found.</p>
				)}
			</div>
		</div>
	);
};

export default FilterWithCheckBox;

// !Filter with checkbox data source

export const filterWithCheckDataSource = `
"use client";
import { products } from "@/main/data/product";
import Image from "next/image";
import React, { useState } from "react";

const FilterWithCheckBox = () => {
  const categories = Array.from(
    new Set(products.map((value) => value.category))
  );

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    setSelectedCategories((prevSelected) =>
      checked
        ? [...prevSelected, value]
        : prevSelected.filter((category) => category !== value)
    );
  };

  const filteredProducts =
    selectedCategories.length > 0
      ? products.filter((product) =>
          selectedCategories.includes(product.category)
        )
      : products;

  return (
    <div className="flex flex-row px-4 py-6 gap-6">
      {/* Sidebar for checkboxes */}
      <div className="w-1/4 rounded-lg p-4 shadow-md border border-indigo-600">
        <h3 className="text-lg font-semibold text-gray-300 mb-4">Categories</h3>
        <div className="space-y-3">
          {categories.map((category) => (
            <div key={category}>
              <label
                htmlFor={"checkbox-" + category}
                className="flex items-center gap-3 text-gray-300"
              >
                <input
                  type="checkbox"
                  id={"checkbox-" + category}
                  value={category}
                  onChange={handleCheckboxChange}
                  className="w-4 h-4 text-gray-300 border-indigo-600 rounded focus:ring-indigo-500"
                />
                {category}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Main content for filtered products */}
      <div className="w-3/4 overflow-y-scroll h-[500px] rounded-lg p-4 shadow-md border border-indigo-600 custom-scrollbar">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="border border-indigo-600 rounded-lg p-4 hover:shadow-lg transition-shadow "
              >
                <div className="relative overflow-hidden w-full h-20">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    className="object-cover w-full h-full rounded-sm"
                    fill
                  />
                </div>

                <h5 className="text-sm font-medium text-gray-300 mb-2 mt-1">
                  {product.name}
                </h5>

                <span className="block text-xs font-semibold text-gray-300 mb-1">
                  Price: {product.price}
                </span>
                <p className="text-xs text-gray-300 mb-1">
                  Category: {product.category}
                </p>
                <p
                  className={
                    "text-xs font-medium " +
                    (product.inStock ? "text-green-600" : "text-red-600")
                  }
                >
                  {product.inStock ? "In Stock" : "Out of Stock"}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-300 text-center">No products found.</p>
        )}
      </div>
    </div>
  );
};
`;
