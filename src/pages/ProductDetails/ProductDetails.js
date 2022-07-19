import { useEffect, useState } from 'react';
import { useSearchParams } from "react-router-dom";
import Galery from '../../components/Galery/Galery'
import useWrappedProduct from '../../utils/wrappers/useWrappedProduct';

export default function ProductDetails() {
    const [searchParams] = useSearchParams();
    const [productId, setproductId] = useState('');
    const { products, isProductsLoading } =  useWrappedProduct({ productId });
    
    useEffect(() => {

        const productSelected = searchParams.get("productId");
        if (productSelected === undefined || productSelected === null || productSelected === '') return;
       // console.log("reas", productSelected)
        setproductId(productSelected)
    }, [searchParams]);

//console.log('productsDataFiltered',products)
 
    return (
        <div>
            {!isProductsLoading && <Galery data={products} />}
        </div>

    )



}