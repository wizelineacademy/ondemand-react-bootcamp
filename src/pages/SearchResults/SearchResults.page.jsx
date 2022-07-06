import React from 'react';
import { useSelector } from 'react-redux';
import GridProducts from '../../components/GridProducts/GridProducts.component';
import Pagination from '../../components/Pagination/Pagination.component';
import { useSearchProducts } from '../../utils/hooks/useSearchProducts';
import { Alert, SearchResultsContainer } from './SearchResults.style';

const SearchResults = () => {
  const { featuredProducts, searchTerm } = useSelector(
    (state) => state.products
  );
  const { page } = useSelector((state) => state.pages);
  useSearchProducts(searchTerm, page);
  return (
    <>
      <SearchResultsContainer>
        {featuredProducts.length === 0 ? (
          <Alert>
            Your search - <b>{searchTerm}</b> - did not match any documents.
          </Alert>
        ) : (
          <GridProducts />
        )}
      </SearchResultsContainer>
      <Pagination />
    </>
  );
};

export default SearchResults;
