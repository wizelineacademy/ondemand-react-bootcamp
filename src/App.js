import "./components/Header/Header.component";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./views/Home/Home.page";
import InfoPage from "./views/Info/Info.page";
import AboutPage from "./views/About/About.page";
import ProductList from "./views/ProductList/ProductList.page";
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
        <Route path="/info" element={<InfoPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/product" element={<ProductList />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
