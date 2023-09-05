import React, { useState } from "react";
import { Button, ButtonBox, ButtonContainer } from "../../Global.styles";

export default function Pagination({ size = 10 }) {
  const [actualPage, setActualPage] = useState(0);
  const [begin, setBegin] = useState(0);
  const [end, setEnd] = useState(4);
  const options = [];
  for (let i = begin; i < size && i < end; i++) {
    options.push(
      <Button
        key={i}
        className={i === actualPage ? "active" : ""}
        onClick={() => {
          setActualPage(i);
        }}
      >
        {i + 1}
      </Button>
    );
  }
  function next() {
    if (actualPage === end - 1) {
      if (end < size) {
        setEnd(end + 1);
        if (begin + 3 < end) {
          setBegin(begin + 1);
        }
      }
    }
    if (actualPage < size - 1) setActualPage(actualPage + 1);
  }

  function prev() {
    if (actualPage === begin) {
      if (begin > 0) {
        setBegin(begin - 1);
        if (end - 3 > begin) {
          setEnd(end - 1);
        }
      }
    }
    if (actualPage > 0) setActualPage(actualPage - 1);
  }
  const pagination = (
    <ButtonBox>
      <ButtonContainer>{options}</ButtonContainer>
      <ButtonContainer>
        <Button onClick={prev}> Prev </Button>
        <Button onClick={next}> Next </Button>
      </ButtonContainer>
    </ButtonBox>
  );
  return [actualPage, pagination];
}
