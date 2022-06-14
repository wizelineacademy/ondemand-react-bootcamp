import React from "react";
import "./product.css";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";

const Product = ({ data }) => {
  const { url, name, alt, category, price, id } = data;
  const navigate = useNavigate();
  const addToCart = () =>
    navigate({
      pathname: "/cart",
      search: "?productId=" + id + "&numItems=1",
    });
  const goToProductDetail = () =>
  navigate({
    pathname: "/product",
    search: "?productId=" + id,
  });
  return (
    <div className="product">
      <div>
        <img src={url} alt={alt} className="product-img" />
      </div>
      <div className="product-label" onClick={goToProductDetail}>
        <ul>
          <li>
            <b>Name:</b> {name}
          </li>
          <li>
            <b>Category:</b> {category}
          </li>
          <li>
            <b>Price:</b> ${price}
          </li>
        </ul>
      </div>
      <div className="product-button-container">
        <Button classname="product-button" onclick={addToCart}>
          Add to cart
        </Button>
      </div>
    </div>
  );
};

Product.propTypes = {
  data: PropTypes.object.isRequired,
};
export default Product;
