import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToCart,
  calculateTotalCart,
  calculateTotalProducts,
} from '../../actions/cart';
import { useForm } from '../../utils/hooks/useForm/useForm';
import {
  AddButton,
  AddCartContainer,
  NumberProducts,
} from './AddCartButton.style';
const AddCartButton = () => {
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.cart);
  const {
    product: { stock },
  } = useSelector((state) => state.cart);
  const [{ cart }, handleInputChange] = useForm({
    cart: 0,
  });
  const handleButton = () => {
    dispatch(addToCart(product.id, product, cart));
    dispatch(calculateTotalCart());
    dispatch(calculateTotalProducts());
  };
  return (
    <>
      {cart > stock && <b>Select another number of items, please</b>}
      <AddCartContainer>
        <NumberProducts
          type="number"
          name="cart"
          value={cart}
          onChange={handleInputChange}
        />
        {cart <= 4 && cart >= 0 ? (
          <AddButton
            disabled={cart <= stock ? false : true}
            onClick={handleButton}
          >
            Add to cart
          </AddButton>
        ) : (
          ''
        )}
      </AddCartContainer>
    </>
  );
};

export default AddCartButton;
