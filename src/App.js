import React, { useState, useEffect } from 'react';
import './App.css';
import { useFeaturedBanners } from './utils/hooks/useFeaturedBanners';
import Layout from './components/layout/Layout';
import ProductList from './components/product/ProductList';
import AppContext from './AppContext';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';

function App() {
  const { data, isLoading } = useFeaturedBanners();
  console.log(data, isLoading);
  const [showPage, setShowPage] = useState('Home');
  const value = { showPage, setShowPage };
  const [ mainPage, setMainPage ] = useState();

  useEffect (() => {
      switch(showPage) {
      case "ProductList":
        setMainPage(<ProductList></ProductList>);
        break;
      default:
        setMainPage(<Layout></Layout>);
    }
  }, [showPage]);

  return (
    <AppContext.Provider value={value}>
    <div className="App">
      <Header></Header>
        {mainPage}
      <Footer></Footer>
    </div>
    </AppContext.Provider>
  );
}

export default App;
