import './Home.css';
import Header from '../components/Header.js'
import Content from '../components/Content.js'
import Footer from '../components/Footer.js'
import { useFeaturedBanners } from '../utils/hooks/useFeaturedBanners';
import useFeaturedProducts from '../mocks/en-us/featured-products.json';
import useProductcategories from '../mocks/en-us/product-categories.json';


function Home() {
  const { data: bannerData, isLoading } = useFeaturedBanners();

  let bannerDataItems = [];
  if (bannerData.results !== undefined) {
    let i = 1;
    // console.log(bannerData.results)
    bannerDataItems = bannerData.results.map((row, index) => {
      return {
        id: index + 1,
        src: row.data.main_image.url,
        alt: 'banner products!',
        text: 'banner products!'
      };
    });
  }

  //  console.log(useFeaturedData.results);
  let featuredProducts = [];
  if (useFeaturedProducts.results !== undefined) {
    let i = 1;
    // console.log(useFeaturedData.results)
    featuredProducts = useFeaturedProducts.results.map((row, index) => {
      // console.log("data",row.data);
      return {
        id: index + 1,
        srcs: row.data.images,
        alt: 'Featured products!',
        text: 'Featured products!'
      };
    });
  }


  //  console.log(useFeaturedData.results);
  let productCategories = [];
  if (useProductcategories.results !== undefined) {
    // console.log(useFeaturedData.results)
    productCategories = useProductcategories.results.map((row, index) => {
      // console.log("data",row.data);
      return {
        id: index + 1,
        src: row.data.main_image.url,
        alt: row.data.main_image.alt,
        text: row.data.name,
      };
    });
  }


  // console.log("featuredItems", featuredDataItems);
  return (


    <div className="App">
      <Header />
      {isLoading && <div>Loading...</div>}
      {/* {console.log("home bannerDataItems", bannerDataItems)} */}
      {/* {console.log("home featuredProducts", featuredProducts)} */}
      {/* {console.log("home productCategories", productCategories)} */}
      {!isLoading && <Content bannerData={bannerDataItems} productCategories={productCategories} featuredProducts={featuredProducts} />}

      <Footer />
    </div>
  );
}

export default Home;
