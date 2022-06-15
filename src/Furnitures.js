import { Footer } from './components/Footer/Footer.component';
import { Header } from './components/Header/Header.component';
import { FurnituresMain, GlobalStyle } from './GlobalStyle.style';
import { Home } from './pages/Home/Home.page';
import { useFeaturedBanners } from './utils/hooks/useFeaturedBanners';
import { useProducts } from './utils/hooks/useProducts';

export const Furnitures = () => {
  const { data, isLoading } = useFeaturedBanners();
  useProducts();
  console.log(data, isLoading);

  return (
    <>
      <GlobalStyle />
      <FurnituresMain>
        <Header />
        <Home />
        <Footer />
      </FurnituresMain>
    </>
  );
};
