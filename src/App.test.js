import { toHaveDisplayValue } from "@testing-library/jest-dom/dist/matchers";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("2 Home Page", () => {
  it("2.1 FeatureBanners Slider", async () => {
    render(<App />);
    const slider = await screen.findByTestId("slider-items");
    expect(slider).toBeVisible();
  });

  it("2.2 Categories", async () => {
    render(<App />);
    const categories = await screen.findByTestId("categories-items");
    expect(categories).toBeVisible();
  });

  it("2.3 Featured products", async () => {
    render(<App />);
    const featuredProducts = await screen.findByTestId("featured-items");
    expect(featuredProducts).toBeVisible();
  });
});

describe("3 Product List Page", () => {
  it("3.1 Product Category Sidebar", async () => {
    render(<App />);
    const viewAllProductsButton = screen.getByText("View all products");
    fireEvent.click(viewAllProductsButton);
    const navigation = await screen.findByTestId("navigation-items");
    expect(navigation).toBeVisible();
  });

  it("3.2 Category links are filtering Products", async () => {
    render(<App />);
    const categoryItems = await screen.findAllByTestId("toggle-item");
    expect(categoryItems.length).toEqual(5);
    fireEvent.click(categoryItems[3]);
    const products = await screen.findAllByTestId("product-item");
    expect(products[0]).toHaveTextContent("Category: furniture");
  });

});
