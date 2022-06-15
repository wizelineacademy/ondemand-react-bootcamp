import styled from 'styled-components';

export const HeaderMain = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const HeaderItems = styled.div`
  display: flex;
  margin-right: 24px;
  align-items: center;
  border-color: black;
`;

export const Logo = styled.img`
  width: 88px;
  height: 80px;
`;

export const Search = styled.input`
  outline: none;
  border: solid;
  border-color: black;
  border-radius: 8px;
  margin-right: 8px;
  width: 256px;
  height: 32px;
  font-size: 16px;
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
