import React from 'react';
import CheckoutTable from '../../components/CheckoutTable/CheckoutTable.component.jsx';
import FormCheckout from '../../components/FormCheckout/FormCheckout.jsx';
import TotalCart from '../../components/TotalCart/TotalCart.component.jsx';
import { CheckoutPageContainer } from './CheckoutPage.style.js';

function CheckoutPage() {
  return (
    <CheckoutPageContainer>
      <FormCheckout />
      <CheckoutTable />
      <TotalCart />
    </CheckoutPageContainer>
  );
}

export default CheckoutPage;
