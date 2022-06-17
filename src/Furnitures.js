import { Footer } from './components/Footer/Footer.component';
import { Header } from './components/Header/Header.component';
import { FurnituresMain, GlobalStyle } from './GlobalStyle.style';
import { Home } from './pages/Home/Home.page';
import { CentralImage } from './components/CentralImage/CentralImage.component';

export const Furnitures = () => {
  return (
    <>
      <GlobalStyle />
      <FurnituresMain>
        <Header />
        <CentralImage />
        <Home />
        <Footer />
      </FurnituresMain>
    </>
  );
};
