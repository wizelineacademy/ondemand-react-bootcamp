import styled from "styled-components";

export const Title = styled.h1`
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  font-family: Quicksand, arial, sans-serif;
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
