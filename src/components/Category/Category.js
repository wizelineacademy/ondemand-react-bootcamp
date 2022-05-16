import React from "react";
import "./category.css";
import PropTypes from 'prop-types';

const Category = ({ data, handlerEvent }) => {
  const { url, name, alt } = data;
  const handlerOnClick = ()=>{
    handlerEvent();
  }
  return (
    <div className="category" onClick={handlerOnClick}>
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
