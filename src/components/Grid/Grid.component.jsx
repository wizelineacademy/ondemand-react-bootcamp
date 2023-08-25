import React from "react";
import Card from "../Card/Card.component";
import { Cards } from "../Card/Card.style";
export default function Grid({ data }) {
  return (
    <Cards>
      {data.map((image) => (
        <Card
          id={image.id}
          key={image.key}
          name={image.name}
          description={image.description}
          image={image.image}
        />
      ))}
    </Cards>
  );
}
