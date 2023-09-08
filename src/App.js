import React, { useState } from 'react';
import './App.css';
import { useFeaturedBanners } from './utils/hooks/useFeaturedBanners';
import Layout from './components/layout/Layout';
import ProductList from './components/product/ProductList';
import ProductDetail from './components/product/ProductDetail';
import AppContext from './AppContext';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductSearchResult from './components/product/ProductSearchResult';

function App() {
  const { data, isLoading } = useFeaturedBanners();
  console.log(data, isLoading);
  const [showPage, setShowPage] = useState('Home');
  const value = { showPage, setShowPage };

  return (
    <AppContext.Provider value={value}>
      <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Layout />} />
          <Route path='/home' element={<Layout />} />
          <Route path='products' element={<ProductList />} />
          <Route path='product/:productId' element={<ProductDetail />} />
          <Route path='search' element={<ProductSearchResult />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
      </div>
    </AppContext.Provider>
  );
}

export default App;
