import React, { useState } from "react";
import { Cards, Button, ButtonBox, ButtonContainer } from "../../Global.styles";
import Card from "../Card/Card.component";
export default function Slider({ data }) {
  const [nextSlide, setNextSlide] = useState(0);
  const N = data.results.length;
  var image = data.results[nextSlide];
  var info = image.data;
  var id = image.id;
  return (
    <>
      <Cards>
        <Card
          id={info.id}
          key={id}
          name={info.title}
          description={info.description[0].text}
          image={info.main_image.url}
        />
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
