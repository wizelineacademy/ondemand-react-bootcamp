import { useEffect, useState } from "react";
import { useLatestAPI } from "./useLatestAPI";
import { API_BASE_URL } from "../constants";

export function useFeaturedProducts(pageSize) {
    const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
    const [products, setproducts] = useState(() => ({
        data: {},
        isLoading: true,
    }));

    useEffect(() => {
        if (!apiRef || isApiMetadataLoading) {
            return () => {};
        }
        
        const controller = new AbortController();

        async function getproducts() {
            try {
                setproducts({ data: {}, isLoading: true});

                const response = await fetch(
                    `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
                        '[[at(document.type, "product")]]'
                    )}&q=${encodeURIComponent(
                        '[[at(document.tags, ["Featured"])]]'
                    )}&lang=en-us&pageSize=${pageSize}`,
                    {
                        signal: controller.signal,
                    }
                );
                const data = await response.json();

                setproducts({ data, isLoading: false});
            } catch (err) {
                setproducts({ data: [], isLoading: false});
                console.error(err);
            }
        }

        getproducts();

        return () => {
            controller.abort();
        };
    }, [apiRef, isApiMetadataLoading, pageSize]);

    return products;
}