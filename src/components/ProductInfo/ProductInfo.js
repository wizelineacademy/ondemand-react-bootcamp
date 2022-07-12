import { useEffect, useState } from "react";
import CarouselGrid from "../CarouselGrid/CarouselGrid";
import './ProductInfo.css'

export default function ProductInfo({ products }) {

    const [ gridData, setGridData ] = useState([]);
    useEffect( () => {
            if (products=== undefined || products?.length===0) 
            {
                setGridData({});
                return;

            }
            setGridData(products.map
                ((data) => {
                    return data.srcs.map((image, index) => {
                        return {
                            id: index + 1,
                            src: image,
                            alt: data.alt,
                            text: data.text,
                            categoryId: data.categoryId
                        };
                    })
                }))

        }, [products,setGridData]);

    return (
        <div style={{ display: 'inline-block' }}>
         { (gridData?.length>0) ? <CarouselGrid gridData={gridData} gridName={'Products'} /> : <div>No items Found</div>}

        </div>

    );



}