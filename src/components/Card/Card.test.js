import React from "react";
import { render, screen } from "@testing-library/react";
import CardComponent from "./Card.component";

describe("Card", () => {
  test("This should be rendered a card component", () => {
    render(<CardComponent />);
  });
});
