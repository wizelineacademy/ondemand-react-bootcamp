import React from "react";
import {
  CardWrapper,
  CardHeader,
  CardHeading,
  CardBody,
  CardFieldset,
  CardDescription,
  CardImage,
  CarButton,
} from "./Card.style";
import { useNavigate } from "react-router-dom";
export default function Card({ name, description, image, id }) {
  const navigate = useNavigate();
  return (
    <CardWrapper>
      <CardHeader>
        <CardImage
          src={image}
          alt="NO IMAGE"
          onClick={() => navigate(`/product/${id}/`, { replace: true })}
        />
      </CardHeader>
      <CardBody>
        <CardFieldset>
          <CardHeading>{name}</CardHeading>
          <CardDescription>{description}</CardDescription>
        </CardFieldset>
        <CardFieldset>
          <CarButton> Add to car </CarButton>
        </CardFieldset>
      </CardBody>
    </CardWrapper>
  );
}
