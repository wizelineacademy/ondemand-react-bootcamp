import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCategories } from '../../actions/categories';
import {
  finishLoadingCategories,
  startLoadingCategories,
} from '../../actions/ui';
import { API_BASE_URL } from '../constants';
import { filterCategories } from '../selectors/filterCategories';
import { useLatestAPI } from './useLatestAPI';

export function useCategories() {
  const dispatch = useDispatch();
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }

    dispatch(startLoadingCategories());
    const controller = new AbortController();

    async function getFeaturedCategories() {
      try {
        const response = await fetch(
          `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
            '[[at(document.type, "category")]]'
          )}&lang=en-us&pageSize=30`,
          {
            signal: controller.signal,
          }
        );
        const { results } = await response.json();
        const data = filterCategories(results);
        dispatch(setCategories(data));
        dispatch(finishLoadingCategories());
      } catch (err) {
        console.error(err);
      }
    }

    getFeaturedCategories();

    return () => {
      controller.abort();
    };
  }, [apiRef, isApiMetadataLoading]);
}
