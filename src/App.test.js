import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const sliderSection = screen.getByText(/Slider/);
  const ProductCategories = screen.getByText(/Product Categories - Grid/);
  expect(sliderSection).toBeInTheDocument();
  expect(ProductCategories).toBeInTheDocument();
});
