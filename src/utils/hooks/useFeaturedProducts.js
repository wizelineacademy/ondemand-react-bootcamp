import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../constants';
import { useLatestAPI } from './useLatestAPI';

export default function useFeaturedProducts() {
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
  const [featuredProducts, setFeaturedProducts] = useState(() => ({
    data: {},
    isLoading: true,
  }));

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }

    const controller = new AbortController();

    async function getFeaturedProducts() {
      try {
        setFeaturedProducts({ data: {}, isLoading: true });
        const url =`${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent('[[at(document.type, "product")]]')}&lang=en-us&pageSize=30`;
         console.log("test:", apiRef);

        const response = await fetch(
          url,
          {
            signal: controller.signal,
          }
        );
        const data = await response.json();

        setFeaturedProducts({ data, isLoading: false });
      } catch (err) {
        setFeaturedProducts({ data: {}, isLoading: false });
        console.error(err);
      }
    }

    getFeaturedProducts();

    return () => {
      controller.abort();
    };
  }, [apiRef, isApiMetadataLoading]);

  return featuredProducts;
}
