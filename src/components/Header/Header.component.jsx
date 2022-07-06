import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.jpeg';
import { useForm } from '../../utils/hooks/useForm/useForm';
import queryString from 'query-string';
import {
  CartSection,
  HeaderItems,
  HeaderMain,
  Logo,
  Search,
  SubmitButton,
} from './Header.style';
import { useDispatch } from 'react-redux';
import { setSearchWord } from '../../actions/products';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { q = '' } = queryString.parse(location.search);
  const [{ product }, handleInputChange] = useForm({
    product: q,
  });
  const handleSearch = (e) => {
    e.preventDefault();
    console.log(product);
    if (product.trim().length <= 1) {
      return;
    }
    dispatch(setSearchWord(product));
    navigate(`/search?q=${product}`, { replace: true });
  };

  return (
    <HeaderMain>
      <Link to="/">
        <Logo data-testid="logo" src={logo} alt="logo" />
      </Link>
      <HeaderItems>
        <Search
          type="text"
          name="product"
          placeholder="Search"
          onChange={handleInputChange}
        />
        <SubmitButton onClick={handleSearch}>Search</SubmitButton>
        <CartSection>
          <div>0</div>
          <i className="fas fa-shopping-cart"></i>
        </CartSection>
      </HeaderItems>
    </HeaderMain>
  );
};

export default Header;
