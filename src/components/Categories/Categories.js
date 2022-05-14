import React from "react";
import "./categories.css";
import Category from "../Category/Category";
import {useProductCategories} from '../../utils/hooks/useProductCategories';

const Categories = () => {
  const { data, isLoading } = useProductCategories();
  return (
    <div className="categories">
      <h3>Categories</h3>
      {isLoading && <div>Loading...</div>}
      <div className="categories-items">
        {data.results && data.results.map((row) => {
          return (
            <Category
              key={row.id}
              data={{
                name: row.data.name,
                alt: row.data.main_image.alt,
                url: row.data.main_image.url,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
