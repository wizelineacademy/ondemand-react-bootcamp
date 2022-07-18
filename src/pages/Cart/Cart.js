import React from "react";
import Layout from "../../components/layout/Layout";
import Store from "../../contexts/Store";


const Cart = () => {
  return (
    <Store.Consumer>
      {({ cart,updateCart }) => {
        return (
          <Layout type="withoutNav">
            {cart && <div>Cart</div>}
          </Layout>
        );
      }}
    </Store.Consumer>
  );
};

export default Cart;
