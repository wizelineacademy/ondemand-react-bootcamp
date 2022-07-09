import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setPage, setTotalPages } from '../../actions/page';
import { setFeaturedProducts } from '../../actions/products';
import { finishLoadingProducts, startLoadingProducts } from '../../actions/ui';
import { API_BASE_URL } from '../constants';
import { filterProducts } from '../selectors/filterProducts';
import { useLatestAPI } from './useLatestAPI';

export function useProducts(page) {
  const dispatch = useDispatch();
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }

    dispatch(startLoadingProducts());
    const controller = new AbortController();

    async function getproducts() {
      try {
        const response = await fetch(
          `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
            '[[at(document.type, "product")]]'
          )}&lang=en-us&page=${page}&pageSize=12`,
          {
            signal: controller.signal,
          }
        );
        const data = await response.json();
        console.log(data);
        const products = filterProducts(data.results);
        dispatch(setPage(data.page));
        dispatch(setTotalPages(data.total_pages));
        dispatch(finishLoadingProducts());
        dispatch(setFeaturedProducts(products));
      } catch (err) {
        console.error(err);
      }
    }

    getproducts();

    return () => {
      controller.abort();
    };
  }, [apiRef, isApiMetadataLoading, page]);
}
