import React from "react";

import mockData1 from "../utils/mock/featured_banners.json";
import mockData2 from "../utils/mock/product-categories.json";
import mockData3 from "../utils/mock/featured_products.json";

import Slider from "../components/Slider/Slider.component";
import Grid from "../components/Grid/Grid.component";
import { Title } from "./Home.style";

import {
  productCategoryToCard,
  featuredProductsToCard,
} from "../utils/functions/mapper";

export default function MainView() {
  return (
    <>
      <Title> Slider </Title>
      <Slider data={mockData1} />
      <Title> Grid </Title>
      <Grid data={productCategoryToCard(mockData2)} />
      <Title> Grid </Title>
      <Grid data={featuredProductsToCard(mockData3)} />
    </>
  );
}
