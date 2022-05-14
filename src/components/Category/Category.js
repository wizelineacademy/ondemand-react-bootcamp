import React from "react";
import "./category.css";
import PropTypes from 'prop-types';

const Category = ({ data }) => {
  const { url, name, alt } = data;
  return (
    <div className="category">
      <div>
        <img src={url} alt={alt} className="category-img"/>
      </div>
      <div className="category-label">
        <label>{name}</label>
      </div>
    </div>
  );
};

Category.propTypes = {
  data: PropTypes.object.isRequired,
};
export default Category;
