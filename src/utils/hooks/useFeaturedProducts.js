import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setFeaturedProducts } from '../../actions/products';
import { finishLoadingProducts, startLoadingProducts } from '../../actions/ui';
import { API_BASE_URL } from '../constants';
import { filterProducts } from '../selectors/filterProducts';
import { useLatestAPI } from './useLatestAPI';

export function useFeaturedProducts() {
  const dispatch = useDispatch();
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }

    dispatch(startLoadingProducts());
    const controller = new AbortController();

    async function getFeaturedProducts() {
      try {
        const response = await fetch(
          `${API_BASE_URL}/documents/search?ref=${apiRef}&q=%5B%5Bat(document.type%2C%20%22product%22)%5D%5D&q=%5B%5Bat(document.tags%2C%20%5B%22Featured%22%5D)%5D%5D&lang=en-us&pageSize=16
          `,
          {
            signal: controller.signal,
          }
        );
        const { results } = await response.json();
        const data = filterProducts(results);
        dispatch(setFeaturedProducts(data));
        dispatch(finishLoadingProducts());
      } catch (err) {
        console.error(err);
      }
    }

    getFeaturedProducts();

    return () => {
      controller.abort();
    };
  }, [apiRef, isApiMetadataLoading]);
}
