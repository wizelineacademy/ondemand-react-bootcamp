import React, {useState, useEffect} from 'react'
import Layout from '../../components/layout/Layout';
import {useProducts} from '../../utils/hooks/useProducts';
import Products from '../../components/Products/Products';
import { useSearchParams } from 'react-router-dom';

const ProductList = () =>{
  const [productQuery, setProductQuery] = useState({categories:[], pageSize:12});
  const { data, isLoading } = useProducts(productQuery);
  const [searchParams] = useSearchParams();

  useEffect(() => {
  const queryCategory = searchParams.get("category");
  if(queryCategory !== null){
    setProductQuery(prevProductQuery => ({...prevProductQuery, categories: [queryCategory]}));
  }
  },[]);

  const handlerEvent = (e) => {
    let checked = e.target.checked;
    let category = e.target.value;
    let cats = [];
    const categories=productQuery.categories;
    if (!categories.includes(category)) {
      if (checked)  {
        cats = categories;
        cats.push(category);
      }
    } else {
      if (!checked)  {
        cats = categories.filter(cat => cat !== category);
      } else {
        cats = categories;
      }
    }
    setProductQuery(prevProductQuery => ({...prevProductQuery, categories: cats}));
  }
  return <Layout type="withNav" navHandlerEvent={handlerEvent}>
    <Products data={data} isLoading={isLoading}/>
  </Layout>
}

export default ProductList;