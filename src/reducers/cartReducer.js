import { types } from '../types/types';
import { calculateTotal } from '../utils/selectors/calculateTotalPrice';
import { calculateTotalProducts } from '../utils/selectors/calculateTotalProducts';

const initialState = {
  product: {},
  productImages: [],
  cart: {},
  total: 0,
  numberProducts: 0,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.setProduct:
      return {
        ...state,
        product: action.payload,
      };

    case types.setImagesProduct:
      return {
        ...state,
        productImages: action.payload,
      };

    case types.addToCart:
      return {
        ...state,
        cart: {
          ...state.cart,
          [action.payload.id]: {
            product: action.payload.product,
            quantity: action.payload.quantity,
          },
        },
      };

    case types.calculateTotalCart:
      return {
        ...state,
        total:
          Object.keys(state.cart).length > 0
            ? calculateTotal(Object.values(state.cart))
            : 0,
      };

    case types.calculateTotalProducts:
      return {
        ...state,
        numberProducts:
          Object.keys(state.cart).length > 0
            ? calculateTotalProducts(Object.values(state.cart))
            : 0,
      };

    case types.changeNumberProductsCart:
      return {
        ...state,
        cart: {
          ...state.cart,
          [action.payload.id]: {
            product: state.cart[action.payload.id].product,
            quantity: action.payload.quantity,
          },
        },
      };

    case types.deleteProduct:
      delete state.cart[action.payload];
      return {
        ...state,
      };

    default:
      return state;
  }
};
