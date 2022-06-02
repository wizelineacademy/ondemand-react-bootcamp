import React from 'react'
import './products.css';
import Product from "../Product/Product";

const Products = ({data, isLoading}) => {
  return (
    <div className="products">
      <h3>Products</h3>
      {isLoading && <div>Loading...</div>}
      <div className="products-items">
        {data.results && data.results.map((row) => {
          return (
            <Product
              key={row.id}
              data={{
                id: row.id,
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
    </div>
  );
};

export default Products;