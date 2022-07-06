import { useDispatch, useSelector } from 'react-redux';
import { decrementPage, incrementPage } from '../../actions/page';
import {
  ButtonLeft,
  ButtonRight,
  Index,
  PaginationContainer,
} from './Pagination.style';
const Pagination = () => {
  const dispatch = useDispatch();
  const { page } = useSelector((state) => state.pages);
  const handleIncrement = () => {
    dispatch(incrementPage(page));
  };

  const handleDecrement = () => {
    dispatch(decrementPage(page));
  };
  return (
    <PaginationContainer>
      <ButtonLeft onClick={handleDecrement} disabled={page === 1}>
        <i className="fas fa-arrow-left"></i>
      </ButtonLeft>
      <Index>{page}</Index>
      <ButtonRight onClick={handleIncrement}>
        <i className="fas fa-arrow-right"></i>
      </ButtonRight>
    </PaginationContainer>
  );
};

export default Pagination;
