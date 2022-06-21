import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { Furnitures } from '../../Furnitures';
describe('Testing Products List Page', () => {
  const setProducts = jest.fn();
  test('should navigate to Product List Page', () => {
    render(<Furnitures />);
    const productsButton = screen.getByTestId('products-button');
    fireEvent.click(productsButton);
    const products = screen.getByTestId('products');
    expect(products.innerHTML).toContain('This is the Product List Page');
  });

  test('should navigate to Home Page', () => {
    render(<Furnitures />);
    const productsButton = screen.getByTestId('products-button');
    fireEvent.click(productsButton);
    const homeButton = screen.getByTestId('logo');
    fireEvent.click(homeButton);
    const homePage = screen.getByTestId('furnitures');
    expect(homePage.innerHTML).toContain('Provides great stability');
  });
});
