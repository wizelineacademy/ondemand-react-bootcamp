import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header/Header.component';
import Home from '../pages/Home/Home.page';
import ProductDetails from '../pages/ProductDetails/ProductDetails.page';
import ProductList from '../pages/ProductList/ProductList.page';
import SearchResults from '../pages/SearchResults/SearchResults.page';
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/productDetails/:productId" element={<ProductDetails />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/search/products/:category" element={<SearchResults />} />
        <Route
          path="/search/productDetails/:productId"
          element={<ProductDetails />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
