/* eslint-disable no-undef */
import { render } from '@testing-library/react';
import Header from './index';

describe('Card component test', () => {
  it('Should render a card correctly', () => {
    const { getByAltText } = render(<Header />);

    expect(getByAltText(/E commeerce logo/i)).toBeInTheDocument();
  });
});
