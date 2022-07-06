import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import AddCartButton from '../../components/AddCartButton/AddCartButton.component';
import Details from '../../components/Details/Details.component';
import Gallery from '../../components/Gallery/Gallery.component';
import { Loading } from '../../GlobalStyle.style';
import { useProduct } from '../../utils/hooks/useProduct';
import { ProductDetailContainer } from './ProductDetails.style';
const ProductDetails = () => {
  const { productId } = useParams();
  useProduct(productId);
  const { loadingProduct } = useSelector((state) => state.ui);
  return (
    <ProductDetailContainer>
      {loadingProduct && <Loading>Loading</Loading>}
      <Gallery />
      <Details />
      <AddCartButton />
    </ProductDetailContainer>
  );
};

export default ProductDetails;
