import React, { useState } from "react";

const CategoryFilter = ({ categories }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleCategoryChange(category)}
          className={selectedCategory === category ? "selected" : ""}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
