import React from 'styled-components';
import {
  CustomerEmail,
  CustomerName,
  FormCheckoutContainer,
  Notes,
  ZipCode,
} from './FormCheckout.style';

const FormCheckout = () => {
  return (
    <FormCheckoutContainer>
      Name
      <CustomerName />
      Email
      <CustomerEmail />
      Zip code
      <ZipCode />
      Comments
      <Notes />
    </FormCheckoutContainer>
  );
};

export default FormCheckout;
