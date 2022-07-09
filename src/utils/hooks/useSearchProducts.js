import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setPage, setTotalPages } from '../../actions/page';
import { setFeaturedProducts } from '../../actions/products';
import { API_BASE_URL } from '../constants';
import { filterProducts } from '../selectors/filterProducts';
import { useLatestAPI } from './useLatestAPI';

export function useSearchProducts(searchTerm, page) {
  const dispatch = useDispatch();
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }

    const controller = new AbortController();

    async function getSearchProducts() {
      try {
        const response = await fetch(
          `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
            '[[at(document.type, "product")]]'
          )}&q=%5B%5Bfulltext(document%2C%20%22${searchTerm}%22)%5D%5D&lang=en-us&page=${page}&pageSize=20`,
          {
            signal: controller.signal,
          }
        );
        const data = await response.json();
        const products = filterProducts(data.results);
        dispatch(setPage(data.page));
        dispatch(setTotalPages(data.total_pages));
        dispatch(setFeaturedProducts(products));
      } catch (err) {
        console.error(err);
      }
    }

    getSearchProducts();

    return () => {
      controller.abort();
    };
  }, [apiRef, isApiMetadataLoading, searchTerm, page]);
}
