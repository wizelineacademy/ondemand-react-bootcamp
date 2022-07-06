import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { finishLoadingSlider, startLoadingSlider } from '../../actions/ui';
import { API_BASE_URL } from '../constants';
import { filterBanners } from '../selectors/filterBanners';
import { useLatestAPI } from './useLatestAPI';

export function useFeaturedBanners() {
  const dispatch = useDispatch();
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
  const [featuredBanners, setFeaturedBanners] = useState(() => ({
    data: [],
    isLoading: true,
  }));

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }

    dispatch(startLoadingSlider());
    const controller = new AbortController();

    async function getFeaturedBanners() {
      try {
        setFeaturedBanners({ data: [], isLoading: true });
        const response = await fetch(
          `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
            '[[at(document.type, "banner")]]'
          )}&lang=en-us&pageSize=5`,
          {
            signal: controller.signal,
          }
        );
        const { results } = await response.json();
        const data = filterBanners(results);
        dispatch(finishLoadingSlider());
        setFeaturedBanners({ data, isLoading: false });
      } catch (err) {
        setFeaturedBanners({ data: {}, isLoading: false });
        console.error(err);
      }
    }

    getFeaturedBanners();

    return () => {
      controller.abort();
    };
  }, [apiRef, isApiMetadataLoading]);

  return featuredBanners;
}
