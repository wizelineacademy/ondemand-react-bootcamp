import { useEffect, useState } from 'react';
import { useSearchParams } from "react-router-dom";


export default function ProductDetails()
{
    const [searchParams] = useSearchParams();
    const [productId, setproductId]= useState('');
    useEffect(() => {

        const productSelected = searchParams.get("productId");
        if (productSelected === undefined || productSelected === null|| productSelected === '') return;
        console.log("reas",productSelected)
        setproductId(productSelected)
    }, [searchParams]);
    
    return(
<div>
    {productId}
    details
</div>

    )



}