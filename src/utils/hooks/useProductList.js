import { useState, useEffect } from "react";
import { API_BASE_URL } from "../constants";
import { useLatestAPI } from "./useLatestAPI";

export function useProductList(page = 0) {
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
  const [productList, setProductList] = useState(() => ({
    data: {},
    isLoading: true,
  }));

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }

    const controller = new AbortController();

    async function getProductList() {
      try {
        setProductList({ data: {}, isLoading: true });

        const response = await fetch(
          `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
            '[[at(document.type, "product")]]'
          )}&lang=en-us&pageSize=30&page=${page}`,
          {
            signal: controller.signal,
          }
        );
        const data = await response.json();

        setProductList({ data, isLoading: false });
      } catch (err) {
        setProductList({ data: {}, isLoading: false });
        console.error(err);
      }
    }

    getProductList();

    return () => {
      controller.abort();
    };
  }, [apiRef, isApiMetadataLoading, page]);

  return productList;
}
