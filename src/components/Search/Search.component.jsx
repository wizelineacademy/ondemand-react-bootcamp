import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchWord } from '../../actions/products';
import { useForm } from '../../utils/hooks/useForm/useForm';
import queryString from 'query-string';
import { useLocation, useNavigate } from 'react-router-dom';
import { SearchInput, SubmitButton } from './Search.style';

export const Search = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { q = '' } = queryString.parse(location.search);
  const [{ product }, handleInputChange] = useForm({
    product: q,
  });
  const handleSearch = (e) => {
    e.preventDefault();
    if (product.trim().length <= 1) {
      return;
    }
    dispatch(setSearchWord(product));
    navigate(`/search?q=${product}`, { replace: true });
  };
  return (
    <>
      <SearchInput
        type="text"
        name="product"
        placeholder="Search"
        onChange={handleInputChange}
      />
      <SubmitButton onClick={handleSearch}>Search</SubmitButton>
    </>
  );
};
