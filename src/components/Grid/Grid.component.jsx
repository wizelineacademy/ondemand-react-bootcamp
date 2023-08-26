import React from "react";
import Card from "../Card/Card.component";
import { Cards } from "../Card/Card.style";
import { Button, ButtonBox, ButtonContainer } from "../../Global.styles";
export default function Grid({ data }) {
  return (
    <>
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
      <ButtonBox>
        <ButtonContainer>
          <Button className="active"> 1 </Button>
          <Button> 2 </Button>
          <Button> 3 </Button>
          <Button> 4 </Button>
        </ButtonContainer>
        <ButtonContainer>
          <Button> Prev </Button>
          <Button> Next </Button>
        </ButtonContainer>
      </ButtonBox>
    </>
  );
}
