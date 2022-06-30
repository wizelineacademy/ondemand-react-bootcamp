import './Home.css';
import Content from '../components/Content.js'
import { useFeaturedBanners } from '../utils/hooks/useFeaturedBanners';
import useFeaturedProducts from '../mocks/en-us/featured-products.json';
import useProductcategories from '../mocks/en-us/product-categories.json';


export default function Home() {
  const { data: bannerData, isLoading } = useFeaturedBanners();

  let bannerDataItems = [];
  if (bannerData.results !== undefined) {

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

    // console.log(useFeaturedData.results)
    featuredProducts = useFeaturedProducts.results.map((row, index) => {
      // console.log("data",row.data);
      return {
        id: index + 1,
        srcs: row.data.images,
        alt:   row.data.mainimage.alt,
        text:  [row.data.name ,  row.data.price ,row.data.category.slug]
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
        text: [row.data.name],
      };
    });
  }
  // ${row.data.category.slug}



  // console.log("featuredItems", featuredDataItems);
  return (


    <div className="App">

      {isLoading && <div>Loading...</div>}

      {!isLoading && <Content bannerData={bannerDataItems} productCategories={productCategories} featuredProducts={featuredProducts} />}


    </div>
  );
}

