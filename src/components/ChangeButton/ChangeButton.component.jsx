import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {
  calculateTotalCart,
  calculateTotalProducts,
  changeNumberProducts,
} from '../../actions/cart';
import { useForm } from '../../utils/hooks/useForm/useForm';
import {
  Change,
  ChangeButtonContainer,
  NumberProducts,
} from './ChangeButton.style';
const ChangeButton = ({ id }) => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);
  const { quantity } = cart[id];
  const [{ numberProducts }, handleInputChange] = useForm({
    numberProducts: quantity,
  });
  const stock = 5;
  const handleButton = () => {
    dispatch(changeNumberProducts(id, numberProducts));
    dispatch(calculateTotalCart());
    dispatch(calculateTotalProducts());
  };
  return (
    <>
      {cart > stock && <b>Select another number of items, please</b>}
      <ChangeButtonContainer>
        <NumberProducts
          type="number"
          name="numberProducts"
          value={numberProducts}
          onChange={handleInputChange}
        />
        <Change
          disabled={numberProducts <= stock ? false : true}
          onClick={handleButton}
        >
          Change
        </Change>
      </ChangeButtonContainer>
    </>
  );
};

export default ChangeButton;
