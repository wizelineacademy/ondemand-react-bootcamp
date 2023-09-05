import { useParams } from "react-router-dom";
import React from "react";
import {
  Content,
  CardWrapper,
  CardDescription,
  CardFieldset,
  CardHeader,
  CardHeading,
  CardBody,
  CarButton,
  CardInput,
} from "./Product.style";
import Slider from "../../components/Slider/Slider.component";
import { imageFromProductToCard } from "../../utils/functions/mapper";
import { useProductId } from "../../utils/hooks/useProductId";
export default function Product() {
  const { id } = useParams();
  const data = useProductId(id);
  let product = {};
  if (Object.keys(data.data).length != 0) {
    product = data.data.results[0];
  }
  console.log(product);
  return (
    <Content>
      {product != undefined && Object.keys(product).length != 0 && (
        <CardWrapper>
          <Slider data={imageFromProductToCard(product.data.images)} />
          <CardHeading>{product.data.name}</CardHeading>
          <CardBody>
            <CardFieldset>
              <CardHeading> Price : ${product.data.price} </CardHeading>
              <CardHeading> SKU : {product.data.sku}</CardHeading>
              <CardHeading>
                {" "}
                Category : {product.data.category?.slug}
              </CardHeading>
              <CardHeader>
                Tags :
                {product.tags.map((tag) => (
                  <>, {tag}</>
                ))}
              </CardHeader>
              {product.data.specs?.map((spec) => (
                <CardHeader>
                  {spec.spec_name} : {spec.spec_value}
                </CardHeader>
              ))}
              <CardDescription>
                {product.data.description[0].text}
              </CardDescription>
            </CardFieldset>
            <CardFieldset>
              <CardInput />
              <CarButton> Add to car </CarButton>
            </CardFieldset>
          </CardBody>
        </CardWrapper>
      )}
    </Content>
  );
}
