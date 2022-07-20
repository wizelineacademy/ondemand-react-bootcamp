import React from "react";
import Layout from "../../components/layout/Layout";
import Store from "../../contexts/Store";
import "./cart.css";
import CartItem from "../../components/CartItem/CartItem";

const Cart = () => {
  return (
    <Store.Consumer>
      {({ cart }) => {
        return (
          <Layout type="withoutNav">
            <div className="cart-container">
              <div className="cart-title">
                <div className="cart-title-items">Image</div>
                <div className="cart-title-items">Name</div>
                <div className="cart-title-items">Price</div>
                <div className="cart-title-items">Number of items</div>
                <div className="cart-title-items">Subtotal</div>
                <div className="cart-title-items">Remove</div>
              </div>
              {cart &&
                cart.map((carItem, key) => {
                  return (
                    <CartItem key={key} carItem={carItem}/>
                  );
                })}
            </div>
          </Layout>
        );
      }}
    </Store.Consumer>
  );
};

export default Cart;
