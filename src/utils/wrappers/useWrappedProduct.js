
import { useState, useEffect } from 'react';


//import useProducts from '../hooks-mooks/useProducts.js';
import useProducts from '../hooks/useProducts.js';


export default function useWrappedProduct({ productId }) {

  const [productsData, setProducts] = useState(() => ({
    products: {},
    isProductsLoading: true,
  }));

  const { data: productsDataFiltered, isLoading } = useProducts({ productId });


  useEffect(() => {


    let products = [];
    if (productsDataFiltered.results !== undefined) {


      products = productsDataFiltered.results.map((item, index) => {
        return item.data.images.map((image, indexImage) => {
          return ({
            id: index + 1,
            src: image.image.url,
            alt: item.data.mainimage.alt,
            text: [item.data.name, item.data.price, item.data.category.slug],
            categoryId: item.data.category.id,
            navigationLink: `/detail?productId=${item.data.category.id}`,
            uniqueId: item.id
          })
        })
      })[0];

    //  console.log('useWrappedProduct', 'products', products);

      setProducts({ products, isProductsLoading: isLoading });
    }
    // console.log(products)

  }, [productsDataFiltered, isLoading]);

  return productsData;
}
