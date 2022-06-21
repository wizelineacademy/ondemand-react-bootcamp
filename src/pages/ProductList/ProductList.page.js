import React from 'react';
import { CategorySidebar } from '../../components/CategorySidebar/CategorySidebar.component';
import { GridProducts } from '../../components/GridProducts/GridProducts.component';
import { Pagination } from '../../components/Pagination/Pagination.component';
import { useProductsContext } from '../../providers/Products.provider';
import { filterProducts } from '../../utils/selectors/filterProducts';
import { Loading, ProductListContainer } from './ProductList.style';

export const ProductList = () => {
  const {
    state,
    uiState: { loading },
  } = useProductsContext();
  const products =
    Object.values(state).flat().length === 0
      ? filterProducts()
      : Object.values(state).flat();
  return (
    <>
      {loading && <Loading>Loading</Loading>}
      <ProductListContainer>
        <CategorySidebar />
        <GridProducts products={products} />
      </ProductListContainer>
      <Pagination />
    </>
  );
};
