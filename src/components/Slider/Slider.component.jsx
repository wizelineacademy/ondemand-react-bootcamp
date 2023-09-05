import React, { useState } from "react";
import { Cards, Button, ButtonBox, ButtonContainer } from "../../Global.styles";
import Card from "../Card/Card.component";
export default function Slider({ data }) {
  const [nextSlide, setNextSlide] = useState(0);
  const N = data.length;
  var image = data[nextSlide];
  return (
    <>
      <Cards>
        <Card image={image.image.url} />
      </Cards>
      <ButtonBox>
        <ButtonContainer>
          <Button onClick={() => setNextSlide((nextSlide - 1 + N) % N)}>
            Prev
          </Button>
          <Button onClick={() => setNextSlide((nextSlide + 1) % N)}>
            Next
          </Button>
        </ButtonContainer>
      </ButtonBox>
    </>
  );
}
