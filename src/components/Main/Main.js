import Carousel from "../Carousel/Carousel";
import Slider from "../Slider/Slider";
import productCategoriesMock from "../../mocks/en-us/product-categories.json";
import featuredBannersMock from "../../mocks/en-us/featured-banners.json";
import featuredProductsMock from "../../mocks/en-us/featured-products.json";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";

const Main = () => {

  return (
    <main>
        <Slider items={featuredBannersMock.results} />
        <Carousel items={productCategoriesMock.results} />
        <FeaturedProducts items={featuredProductsMock.results} />
    </main>
  );
};

export default Main;
