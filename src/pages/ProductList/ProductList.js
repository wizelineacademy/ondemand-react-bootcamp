import React, {useState} from 'react'
import Layout from '../../components/layout/Layout';
import {useProducts} from '../../utils/hooks/useProducts';
import Products from '../../components/Products/Products';

const ProductList = () =>{
  const [productQuery, setProductQuery] = useState({categories:[], pageSize:12});
  const { data, isLoading } = useProducts(productQuery);

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
      }
    }
    setProductQuery(prevProductQuery => ({...prevProductQuery, categories: cats}));
  }
  return <Layout type="withNav" navHandlerEvent={handlerEvent}>
    <Products data={data} isLoading={isLoading}/>
  </Layout>
}

export default ProductList;