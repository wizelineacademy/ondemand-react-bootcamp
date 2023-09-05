import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./views/Home/Home.page";
import InfoPage from "./views/Info/Info.page";
import AboutPage from "./views/About/About.page";
import Product from "./views/Product/Product.page";
import ProductList from "./views/ProductList/ProductList.page";
import Search from "./views/Search/Search.page";
import Header from "./components/Header";
import Footer from "./components/Footer/Footer.component";

import GlobalStyle from "./Global.styles";
function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/info" element={<InfoPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product/:id?/:title?/" element={<Product />} />
        <Route path="/search/:query?/" element={<Search />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
