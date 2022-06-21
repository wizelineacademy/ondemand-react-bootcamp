import { useState } from 'react';
import { Footer } from './components/Footer/Footer.component';
import { Header } from './components/Header/Header.component';
import { FurnituresMain, GlobalStyle } from './GlobalStyle.style';
import { Home } from './pages/Home/Home.page';
import { CentralImage } from './components/CentralImage/CentralImage.component';
import { ProductList } from './pages/ProductList/ProductList.page';

export const Furnitures = () => {
  const [products, setProducts] = useState(false);
  return (
    <>
      <GlobalStyle />
      <FurnituresMain data-testid="furnitures">
        <Header setProducts={setProducts} />
        {products ? (
          <ProductList />
        ) : (
          <>
            <CentralImage />
            <Home setProducts={setProducts} />
            <Footer />
          </>
        )}
      </FurnituresMain>
    </>
  );
};
