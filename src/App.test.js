import { render, screen } from '@testing-library/react';
import App from './App';

test('renders brand link', () => {
  render(<App />);
  const brandElement = screen.getByText(/Furnituria/i);
  expect(brandElement).toBeInTheDocument
})
