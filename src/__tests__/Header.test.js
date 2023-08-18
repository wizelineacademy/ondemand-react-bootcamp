import { render, screen } from '@testing-library/react';
import Header from '../components/Header/Header';

test('app logo appears in dom', () => {
  render(<Header />);

  // const linkElement = screen.getByText(/AMAZING FINISHES - BEDROOM222/i);
 const logo = screen.getByAltText(/app-logo/i);
  expect(logo).toBeInTheDocument();
});
