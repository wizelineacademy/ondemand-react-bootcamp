import React,{ useRef } from 'react'
import './featured.css';
import Product from "../Product/Product";
import Button from "../Button/Button";
import {useProducts} from '../../utils/hooks/useProducts';
import { NavLink } from 'react-router-dom';

const Featured = () => {
  const productQuery=useRef({tags: ['Featured'], pageSize:16});
  const { data, isLoading } = useProducts(productQuery.current);
  return (
    <div className="featured">
      <h3>Featured Products</h3>
      {isLoading && <div>Loading...</div>}
      <div className="featured-items">
        {data.results && data.results.map((row) => {
          return (
            <Product
              key={row.id}
              data={{
                name: row.data.name,
                alt: row.data.mainimage.alt,
                url: row.data.mainimage.url,
                price: row.data.price,
                category: row.data.category.slug
              }}
            />
          );
        })}
      </div>
      <div className="featured-div">
      <NavLink to="/productlist"><Button classname="featured-button">View all products</Button></NavLink>
      </div>
    </div>
  );
};

export default Featured;