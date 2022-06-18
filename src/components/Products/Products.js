import React from 'react'
import './products.css';
import Product from "../Product/Product";

const Products = ({data, isLoading, isSearcResult}) => {
  if (data.results === undefined) {
    data.results = [];
  }
  return (
    <div className="products">
      <h3>Products</h3>
      {isLoading && <div>Loading...</div>}
      <div className="products-items">
        {data.results.length > 0 ? data.results.map((row) => {
          return (
            <Product
              key={row.id}
              data={{
                id: row.id,
                name: row.data.name,
                alt: row.data.mainimage.alt,
                url: row.data.mainimage.url,
                price: row.data.price,
                category: row.data.category.slug,
                short_description: row.data.short_description
              }}
              extendedCard={isSearcResult}
            />
          );
        }) : isSearcResult ? <div className="product-error">There are no products for the search term</div> :''}
      </div>
    </div>
  );
};

export default Products;