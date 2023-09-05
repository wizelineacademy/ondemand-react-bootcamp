import styled from "styled-components";

export const Content = styled.div`
  top: 0;
  z-index: 999;
  margin-left: 200px;
  padding: 1px 16px;
  min-height: 80vh;
`;

export const CardWrapper = styled.div`
  overflow: hidden;
  padding: 0 0 32px;
  margin: 48px auto 0;
  width: 1200px;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  text-align: center;
`;

export const CardHeader = styled.header`
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const CardImageHeader = styled.div`
  backgroundimage: url(${(props) => props.imgUrl});
`;
export const CardHeading = styled.h1`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

export const CardBody = styled.div`
  padding-right: 32px;
  padding-left: 32px;
`;

export const CardFieldset = styled.fieldset`
  position: relative;
  padding: 0;
  margin: 0;
  border: 0;
`;

export const CardDescription = styled.label`
  padding: 7px 0;
  width: 100%;
  font-family: inherit;
  font-size: 14px;
  border-top: 0;
  border-right: 0;
  border-left: 0;
`;

export const CardImage = styled.img`
  margin: auto;
  width: 250px;
  display: block;
`;

export const Cards = styled.div`
  align: center;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 1x;
  margin-right: 10px;
`;

export const CarButton = styled.button`
  border-radius: ${({ bigRadius }) => (bigRadius ? "30px" : "20px")};
  background-color: ${({ primary }) => (primary ? "#E38B06" : "#000")};
  color: ${({ primary }) => (primary ? "#000" : "#fff")};
  padding: ${({ big }) => (big ? "18px 30px" : "10px 28px")};
  font-size: ${({ bigFont }) => (bigFont ? "20px" : "18px")};
  margin-top: 40px;
  outline: none;
  cursor: pointer;
  border: none;
  transition: all 0.5s ease;
  &.active {
    background-color: #04aa6d;
    color: white;
  }
  &:hover {
    background-color: ${({ primary }) => (primary ? "#fff" : "#E38B06")};
    color: #000;
  }
  &:active {
    transform: translateY(0.5rem);
  }
  @media only screen and (max-width: 1000px) {
    /* width: 100%; */
    padding: ${({ big }) => (big ? "18px 30px" : "10px 20px")};
  }
  @media only screen and (max-width: 375px) {
    padding: ${({ big }) => (big ? "12px 20px" : "10px 20px")};
    font-size: ${({ bigFont }) => (bigFont ? "16px" : "18px")};
  }
`;

export const CardInput = styled.input.attrs({
  type: "number",
  placeholder: "Qty",
})`
  background: #000;
  color: #fff;
  cursor: pointer;
  margin-bottom: 0;
  margin-right: 5px;
  text-transform: uppercase;
  width: 10%;
  border-radius: 5px;
  height: 35px;
  border-color: transparent;
  box-shadow: 0px;
  outline: none;
  transition: 0.15s;
  text-align: center;
  &:active {
    background-color: #f1ac15;
  }
`;
