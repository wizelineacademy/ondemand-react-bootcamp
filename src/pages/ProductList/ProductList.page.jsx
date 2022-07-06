import React from 'react';
import { useSelector } from 'react-redux';
import CategorySidebar from '../../components/CategorySidebar/CategorySidebar.component';
import GridProducts from '../../components/GridProducts/GridProducts.component';
import Pagination from '../../components/Pagination/Pagination.component';
import { Loading } from '../../GlobalStyle.style';
import { useCategories } from '../../utils/hooks/useCategories';
import { useProducts } from '../../utils/hooks/useProducts';
import { ProductListContainer } from './ProductList.style';

const ProductList = () => {
  useCategories();
  const { page } = useSelector((state) => state.pages);
  useProducts(page);
  const { loadingProducts } = useSelector((state) => state.ui);
  const { loadingCategories } = useSelector((state) => state.ui);
  return (
    <>
      {loadingProducts && <Loading>Loading</Loading>}
      {loadingCategories && <Loading>Loading</Loading>}
      <ProductListContainer>
        <CategorySidebar />
        <GridProducts />
      </ProductListContainer>
      <Pagination />
    </>
  );
};

export default ProductList;
