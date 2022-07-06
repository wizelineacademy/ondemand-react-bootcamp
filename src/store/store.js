import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import { cartReducer } from '../reducers/cartReducer';
import { categoriesReducer } from '../reducers/categoriesReducer';
import { pagesReducer } from '../reducers/pagesReducer';
import { productsReducer } from '../reducers/productsReducer';
import { uiReducer } from '../reducers/uiReducer';

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  ui: uiReducer,
  cart: cartReducer,
  pages: pagesReducer,
});

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
