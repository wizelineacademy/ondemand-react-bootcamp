import React from "react";
import "./product.css";
import PropTypes from 'prop-types';

const Product = ({ data }) => {
  const { url, name, alt, category, price } = data;
  return (
    <div className="product">
      <div>
        <img src={url} alt={alt} className="product-img"/>
      </div>
      <div className="product-label">
        <ul>
        <li><b>Name:</b> {name}</li>
        <li><b>Category:</b> {category}</li>
        <li><b>Price:</b> ${price}</li>
        </ul>
      </div>
    </div>
  );
};

Product.propTypes = {
  data: PropTypes.object.isRequired,
};
export default Product;
