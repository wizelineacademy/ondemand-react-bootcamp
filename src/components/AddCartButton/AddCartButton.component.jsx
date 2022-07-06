import React from 'react';
import { useSelector } from 'react-redux';
import { useForm } from '../../utils/hooks/useForm/useForm';
import {
  AddButton,
  AddCartContainer,
  NumberProducts,
} from './AddCartButton.style';
const AddCartButton = () => {
  const {
    product: { stock },
  } = useSelector((state) => state.cart);
  const [{ cart }, handleInputChange] = useForm({
    cart: 0,
  });
  const handleButton = () => {};
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
        <AddButton
          disabled={cart <= stock ? false : true}
          onClick={handleButton}
        >
          Add to cart
        </AddButton>
      </AddCartContainer>
    </>
  );
};

export default AddCartButton;
