import { useState } from "react";
import "./product.css";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import Store from "../../contexts/Store";

const Product = ({ data, extendedCard, disabledItem }) => {
  const [disabled, setDisabled]  = useState(disabledItem);
  const {
    url,
    name,
    alt,
    category,
    price,
    id,
    short_description,
    image,
    stock,
  } = data;
  const navigate = useNavigate();
  const goToProductDetail = () =>
    navigate({
      pathname: "/product",
      search: "?productId=" + id,
    });
  return (
    <Store.Consumer>
      {({ cart, updateCart, getCartItem }) => {
        const getDisabled = (cart, productId, numItems=0) => {
          const cartItem = getCartItem(cart, productId);
          if (cartItem.length > 0) {
            setDisabled((prevDisabled) => cartItem[0].balance === numItems ? true : false);
          }
        }
        const addToCart = () => {
          const product = data
            ? { name, id, balance: 0, price, image, stock }
            : {};
          updateCart(cart, product, 1);
          getDisabled(cart, product.id, 1);
        };
        return (
          <div className={`product ${extendedCard && "extended"}`}>
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
                {extendedCard && (
                  <li>
                    <b>Description:</b> {short_description.substring(0, 150)}{" "}
                    ...
                  </li>
                )}
              </ul>
            </div>
            <div className="product-button-container">
              <Button
                classname="product-button"
                disabled={disabled}
                onclick={addToCart}
              >
                Add to cart
              </Button>
            </div>
          </div>
        );
      }}
    </Store.Consumer>
  );
};

Product.propTypes = {
  data: PropTypes.object.isRequired,
};
export default Product;
