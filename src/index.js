import React from 'react';
import ReactDOM from 'react-dom';
import { Furnitures } from './Furnitures';
import { ProductsProvider } from './providers/Products.provider';

ReactDOM.render(
  <React.StrictMode>
    <ProductsProvider>
      <Furnitures />
    </ProductsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
