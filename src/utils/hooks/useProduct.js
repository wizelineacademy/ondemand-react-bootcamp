import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setImagesProduct, setProduct } from '../../actions/cart';
import { finishLoadingProduct, startLoadingProduct } from '../../actions/ui';
import { API_BASE_URL } from '../constants';
import { filterImages } from '../selectors/filterImages';
import { filterProduct } from '../selectors/filterProduct';
import { useLatestAPI } from './useLatestAPI';

export function useProduct(productId) {
  const dispatch = useDispatch();
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }
    dispatch(startLoadingProduct());
    const controller = new AbortController();
    async function getProduct() {
      try {
        const filter = `[[at(document.id, "${productId}")]]`;
        const response = await fetch(
          `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
            filter
          )}`,
          {
            signal: controller.signal,
          }
        );
        const data = await response.json();
        const { results } = data;
        const product = filterProduct(results[0]);
        const images = filterImages(product.images);
        product.images = images;
        dispatch(finishLoadingProduct());
        dispatch(setImagesProduct(images));
        dispatch(setProduct(product));
      } catch (err) {
        console.log(err);
      }
    }

    getProduct();

    return () => {
      controller.abort();
    };
  }, [apiRef, isApiMetadataLoading, productId]);
}
