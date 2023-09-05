import Card from "../Card/Card.component";
import React, { useEffect } from "react";
import { Cards } from "../Card/Card.style";
import Pagination from "../Pagination/Pagination.component";
export default function Grid({ data }) {
  const [actualPage, pagination] = Pagination(10);
  console.log(data);
  useEffect(() => {
    const controller = new AbortController();
    return () => {
      controller.abort();
    };
  }, [actualPage]);
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
      {pagination}
    </>
  );
}
