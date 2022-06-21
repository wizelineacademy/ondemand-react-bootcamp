import { useContext, useReducer } from 'react';
import { ProductsContext } from '../context/ProductsContext';
import { productsReducer } from '../reducers/productsReducer';
import { uiReducer } from '../reducers/uiReducer';
import { filterProducts } from '../utils/selectors/filterProducts';

function useProductsContext() {
  const context = useContext(ProductsContext);
  if (!context) {
    return new Error(
      'You can not use useRouterContext without an RouterProvider'
    );
  }
  return context;
}
function ProductsProvider({ children }) {
  const products = filterProducts();

  const uiInitialState = {
    loading: false,
    msgError: null,
  };

  const [state, dispatch] = useReducer(productsReducer, {});
  const [uiState, uiDispatch] = useReducer(uiReducer, uiInitialState);
  return (
    <ProductsContext.Provider
      value={{ products, state, dispatch, uiState, uiDispatch }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export { ProductsProvider, useProductsContext };
