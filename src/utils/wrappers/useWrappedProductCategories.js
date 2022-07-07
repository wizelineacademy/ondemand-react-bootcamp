import { useState, useEffect } from 'react';
// import useProductCategories from '../hooks/useProductCategories'
import useProductCategories from '../hooks-mooks/useProductCategories'

export default function useWrappedProductCategories() {



  const [wrappedData, setWrappedData] = useState(() => ({
    productCategories: {},
    isProductCategoriesLoading: false
  }));
  const { data: ProductCategoriesData, isLoading } = useProductCategories();

  useEffect(() => {


    let productCategories = [];
    if (ProductCategoriesData.results !== undefined) {

      productCategories = ProductCategoriesData.results.map((row, index) => {

        return {
          id: index + 1,
          src: row.data.main_image.url,
          alt: row.data.main_image.alt,
          text: [row.data.name],
        };
      });


      setWrappedData({
        productCategories: productCategories,
        isProductCategoriesLoading: isLoading

      });

    }

  }, [ProductCategoriesData, isLoading]);

  return wrappedData;

}