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
  const { page, totalPages } = useSelector((state) => state.pages);
  const handleIncrement = () => {
    dispatch(incrementPage(page));
  };

  const handleDecrement = () => {
    dispatch(decrementPage(page));
  };
  return (
    <PaginationContainer>
      <ButtonLeft
        data-testid="prev"
        onClick={handleDecrement}
        disabled={page === 1}
      >
        <i className="fas fa-arrow-left"></i>
      </ButtonLeft>
      <Index data-testid="page">{page}</Index>
      <ButtonRight
        data-testid="next"
        onClick={handleIncrement}
        disabled={page === totalPages}
      >
        <i className="fas fa-arrow-right"></i>
      </ButtonRight>
    </PaginationContainer>
  );
};

export default Pagination;
