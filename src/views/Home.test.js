import { render, screen } from "@testing-library/react";
import Home from "./Home.page";
import mockData1 from "../utils/mock/featured_banners.json";

test("renders home page view", () => {
  render(<Home />);
  const sliderDisplayed = screen.getByText("Slider");
  const gridDisplayed = screen.getAllByText(/Grid/);
  expect(sliderDisplayed).toBeInTheDocument();
  gridDisplayed.forEach((section) => {
    expect(section).toBeInTheDocument();
  });
});
