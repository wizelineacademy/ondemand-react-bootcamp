import { render, screen } from "@testing-library/react";
import Home from "./Home.page";
import { BrowserRouter } from "react-router-dom";
import mockData1 from "../../utils/mock/featured_banners.json";

test("renders home page view", () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
});
