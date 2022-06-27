import React, { useState } from 'react';
import "./productview.css";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import Table from "../Table";
import Counter from "../Counter";

const ProductView = ({ data }) => {
  const [numItems, setNumItems] = useState(0);
  const { images, price, sku, category, description, specs=[] } = data[0].data;
  const basics = [
    { label: "Sku", value: sku },
    { label: "Category", value: category.slug },
    { label: "Price", value: `US$ ${price}` },
    { label: "Tags", value: data[0].tags? data[0].tags.join(', '):'' },
    { label: "Description", value: description[0].text? description[0].text:''},
  ];
  const specifications = specs.map((spec)=>{
    return {label:spec.spec_name, value:spec.spec_value}
  });
  const items = images.map((img) => {
    return { original: img.image.url, thumbnail: img.image.url };
  });
  const navigate = useNavigate();
  const addToCart = () => {
    navigate({
      pathname: "/cart",
      search: "?productId=" + data[0].id + "&numItems=" + numItems,
    })
  };
  const handler = (counter) => {
    setNumItems(prevNumItems => (counter));
  }
  return (
    <div className="productview">
      <div className="productview-label">{data && data[0].data.name}</div>
      <div className="productview-carousel">
        <ImageGallery
          items={items}
          showFullscreenButton={false}
          showPlayButton={false}
          showNav={false}
        />
      </div>
      <Table data={basics} cells={2} title="BASICS"/>
      <Table data={specifications} cells={2} title="SPECS"/>
      <div className="productview-button-container">
        <Counter handler={handler}/>
        <Button classname="productview-button" onclick={addToCart}>
          Add to cart
        </Button>
      </div>
    </div>
  );
};

ProductView.propTypes = {
  data: PropTypes.array.isRequired,
};
export default ProductView;
