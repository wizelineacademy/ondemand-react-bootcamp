import React from 'react';
import {
  CardWrapper,
  CardHeader,
  CardHeading,
  CardBody,
  CardFieldset,
  CardDescription,
  CardImage,
} from './Card.style';

export default function Card({ name, description, image, id}) {
  return (
    <CardWrapper>
      <CardHeader>
      <a href={`/video/${id}/${name}/${description}`} >
          <CardImage src={image} alt="NO IMAGE" />
        </a>
      </CardHeader>
      <CardBody>
        <CardFieldset>
          <CardHeading>{name}</CardHeading>
          <CardDescription>{description}</CardDescription>
        </CardFieldset>
      </CardBody>
    </CardWrapper>
  );
}
