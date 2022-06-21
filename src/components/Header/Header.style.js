import styled from 'styled-components';

export const HeaderMain = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-shadow: 0 0.8px 0.8px rgba(0, 0, 0, 0.19),
    0 0.8px 0.8px rgba(0, 0, 0, 0.23);
`;

export const HeaderItems = styled.div`
  display: flex;
  margin-right: 24px;
  align-items: center;
  border-color: black;
`;

export const Logo = styled.img`
  cursor: pointer;
  width: 88px;
  height: 80px;
`;

export const Search = styled.input`
  outline: none;
  border: solid;
  border-color: gray;
  border-radius: 8px;
  margin-right: 8px;
  width: 256px;
  height: 32px;
  font-size: 16px;
  padding: 0 12px;

  @media (max-width: 425px) {
    width: 160px;
  }
`;

export const CartSection = styled.div`
  background-color: #ff385c;
  color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  height: 8px;
  border-radius: 8px;
`;
