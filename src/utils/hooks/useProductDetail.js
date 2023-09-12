import { useEffect, useState } from "react";
import { useLatestAPI } from "./useLatestAPI";
import { API_BASE_URL } from "../constants";

export function useProductDetail( productId ) {
    const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
    const [product, setproduct] = useState(() => ({
        data: {},
        isLoading: true,
    }));

    useEffect(() => {
        if (!apiRef || isApiMetadataLoading) {
            return () => {};
        }
        
        const controller = new AbortController();

        async function getproduct() {
            try {
                setproduct({ data: {}, isLoading: true});

                const response = await fetch(
                    `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURI(
                        '[[:d+=+at(document.id,+"' + productId + '")+]]'
                    )}`,
                    {
                        signal: controller.signal,
                    }
                );
                const data = await response.json();

                setproduct({ data, isLoading: false});
            } catch (err) {
                setproduct({ data: [], isLoading: false});
                console.error(err);
            }
        }

        getproduct();

        return () => {
            controller.abort();
        };
    }, [apiRef, isApiMetadataLoading, productId]);

    return product;
}