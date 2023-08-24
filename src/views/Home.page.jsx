import React from "react";
import mockData1 from "../utils/mock/featured_banners.json";
import mockData2 from "../utils/mock/product-categories.json";
import mockData3 from "../utils/mock/featured_products.json";
import Slider from "../components/Slider/Slider.component";
import Card from "../components/Card/Card.component";
import { Cards, Title } from "./Home.style";

export default function MainView() {
  return (
    <>
      <Title> Slider </Title>
      <Slider data={mockData1} />
      <Title> Grid </Title>
      <Cards>
        {mockData2.results.map((image) => (
          <Card
            id={image.id}
            key={image.id}
            name={image.data?.name}
            description={image.data.description}
            image={image.data.main_image.url}
          />
        ))}
      </Cards>
      <Title> Grid </Title>
      <Cards>
        {mockData3.results.map((image) => (
          <Card
            id={image.id}
            key={image.id}
            name={image.data?.name}
            description={image.data.description[0].text}
            image={image.data.mainimage.url}
          />
        ))}
      </Cards>
    </>
  );
}
