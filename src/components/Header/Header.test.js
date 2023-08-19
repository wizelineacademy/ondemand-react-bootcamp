import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header.component';

describe('Header', () => {
  test('This should be rendered a header', () => {
    render(
      <Header />
    );
  });
});
