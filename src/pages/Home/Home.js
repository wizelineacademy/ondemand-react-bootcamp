import React from 'react';
import styles from './Home.module.scss'

//import useFeaturedBanners  from '../utils/hooks/useFeaturedBanners';
//import useFeaturedProducts from '../utils/hooks/useFeaturedProducts';
//import useProductCategories from  '../utils/hooks/useProductCategories';


//import useFeaturedBanners from '../../utils/hooks-mooks/useFeaturedBanners';
import useWrappedFeaturedProducts from '../../utils/wrappers/useWrappedFeaturedProducts';
import useProductCategories from '../../utils/hooks-mooks/useProductCategories';
import useWrappedFeaturedBanners from '../../utils/wrappers/useWrappedFeaturedBanners.js'

import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
import Slider from '../../components/Slider/Slider'
import ProductCategories from '../../components/ProductCategories/ProductCategories'

export default function Home() {


  const { bannerDataItems, isBannerLoading } = useWrappedFeaturedBanners();
  const { featuredProducts, isProductsLoading } = useWrappedFeaturedProducts();
  console.log(featuredProducts, isBannerLoading);


  const { data: ProductCategoriesData, isLoading: isProductCategoriesLoading } = useProductCategories();
  //  console.log(useFeaturedData.results);
  let productCategories = [];
  if (ProductCategoriesData.results !== undefined) {
    // console.log(useFeaturedData.results)
    productCategories = ProductCategoriesData.results.map((row, index) => {
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


    <div className={styles.textcontent}>
      {isBannerLoading && <div>Loading...</div>}
      {(!isBannerLoading && bannerDataItems !== null && bannerDataItems.length > 0) && <Slider index={1} elements={bannerDataItems} />}
      <br />
      {isProductCategoriesLoading && <div>Loading...</div>}
      {(!isProductCategoriesLoading && productCategories !== null && productCategories.length > 0) && <ProductCategories productCategories={productCategories} />}
      <br />
      {isProductsLoading && <div>Loading...</div>}
      {(!isProductsLoading && featuredProducts !== null && featuredProducts.length > 0) && <FeaturedProducts featuredProducts={featuredProducts} />}
    </div>
  );
}

