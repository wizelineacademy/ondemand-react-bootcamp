import styled from "styled-components";

export const CardWrapper = styled.div`
  overflow: hidden;
  padding: 0 0 32px;
  margin: 48px auto 0;
  width: 400px;
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
