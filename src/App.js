import './App.css';
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home';
import Layout from './components/Layout/Layout';
import ProductList from './pages/ProductList/ProductList';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import UserDetailsContextProvider from './components/UserDetailsContextProvider/UserDetailsContextProvider';
function App() {

  return (


    <BrowserRouter>
      <UserDetailsContextProvider>
        <Routes>

          <Route exact path="/" element={<Layout ><Home /></Layout>} />
          <Route exact path="/home" element={<Layout ><Home /></Layout>} />
          <Route exact path="/products" element={<Layout > <ProductList /></Layout>} />
          <Route exact path="/detail" element={<Layout > <ProductDetails /></Layout>} />
          <Route path="*" element={<NotFound />} />

        </Routes>
      </UserDetailsContextProvider>
    </BrowserRouter>


  );
}
function NotFound() {
  return (
    <div>Not Found</div>);


}



export default App;
