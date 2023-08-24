import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  font-family: Quicksand, arial, sans-serif;
`;

export const Cards = styled.div`
  align: center ;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 1x;
  margin-right: 10px;
`;


export const Button = styled.button`
  background: #00aec9;
  color: #fff;
  cursor: pointer;
  margin-bottom: 0;
  width: 100px;
  border-radius: 20px;
  height: 35px;
  box-shadow: 0px;
  text-align: center;
  &:active {
    background-color: #f1ac15;
  }
`;

export const ButtonBox = styled.div`
  align: center ;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 1x;
  margin-right: 10px;
`;
export const ButtonContainer = styled.div`
  overflow: hidden;
  padding: 0 0 32px;
  margin: 48px auto 0;
  width: 400px;
  font-family: Quicksand, arial, sans-serif;
  border-radius: 5px;
  text-align: center;
`;