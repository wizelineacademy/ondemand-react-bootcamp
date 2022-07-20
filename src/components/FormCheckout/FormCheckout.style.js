import styled from 'styled-components';

export const FormCheckoutContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-self: center;
  width: 400px;
  @media (max-width: 1007px) {
    width: 300px;
  }

  @media (max-width: 640px) {
    width: 250px;
  }
`;

export const CustomerName = styled.input`
  height: 40px;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  outline: none;
  border: solid;
  border-color: gray;
`;

export const CustomerEmail = CustomerName,
  ZipCode = CustomerName;

export const Notes = styled.textarea`
  height: 56px;
  resize: vertical;
  outline: none;
  cursor: pointer;
  border-style: solid;
  border-color: gray;
  border-width: 2px;
`;
