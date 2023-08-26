import React from "react";
import { useNavigate } from "react-router-dom";
import mockData1 from "../../utils/mock/featured_banners.json";
import mockData2 from "../../utils/mock/product-categories.json";
import mockData3 from "../../utils/mock/featured_products.json";

import Slider from "../../components/Slider/Slider.component";
import Grid from "../../components/Grid/Grid.component";
import { Title } from "./Home.style";
import { OutlineButton, ButtonBox, ButtonContainer } from "../../Global.styles";
import {
  productCategoryToCard,
  featuredProductsToCard,
} from "../../utils/functions/mapper";

export default function MainView() {
  const navigate = useNavigate();
  return (
    <>
      <Title> Featured banners - Slider</Title>
      <Slider data={mockData1} />
      <Title> Product Categories - Grid</Title>
      <Grid data={productCategoryToCard(mockData2)} />
      <Title> Featured Products - Grid</Title>
      <Grid data={featuredProductsToCard(mockData3)} />
      <ButtonBox>
        <ButtonContainer>
          <OutlineButton
            onClick={() => navigate("/product", { replace: true })}
          >
            View All Products
          </OutlineButton>
        </ButtonContainer>
      </ButtonBox>
    </>
  );
}
