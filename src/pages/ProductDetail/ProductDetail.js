import { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import { useSearchParams } from "react-router-dom";
import {useProducts} from '../../utils/hooks/useProducts';
import ProductView from "../../components/ProductView";
const ProductDetail = () => {
  const [productQuery, setProductQuery] = useState({productId:null});
  const { data, isLoading } = useProducts(productQuery);
  const [searchParams] = useSearchParams();
  useEffect(() => {
    setProductQuery(prevProductQuery => ({...prevProductQuery, productId:searchParams.get("productId")}));
  }, []);
  return (
    <Layout type="withoutNav">
       {isLoading && <div>Loading...</div>}
      {data.results && <ProductView data={data.results}/>}
    </Layout>
  );
};

export default ProductDetail;
