import {
  ButtonLeft,
  ButtonRight,
  Index,
  PaginationContainer,
} from './Pagination.style';
export const Pagination = () => {
  return (
    <PaginationContainer>
      <ButtonLeft>
        <i className="fas fa-arrow-left"></i>
      </ButtonLeft>
      <Index>0</Index>
      <ButtonRight>
        <i className="fas fa-arrow-right"></i>
      </ButtonRight>
    </PaginationContainer>
  );
};
