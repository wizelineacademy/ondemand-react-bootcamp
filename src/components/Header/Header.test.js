import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header.component";

describe("Header", () => {
  test("This should be rendered a header", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
  });
});
