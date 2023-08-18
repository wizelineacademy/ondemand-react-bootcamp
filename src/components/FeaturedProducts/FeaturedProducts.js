import { useState } from "react";

const FeaturedProducts = ({ items }) => {
  console.log(items);

  return (
    <>
      <h1>Grid Section</h1>
      <article className="grid-columns">
        {items.map((item) => {
          return (
            <section className="grid-section" key={item.id}>
              <h5>Name {item.data.name}</h5>
              <h5>Price {item.data.price}</h5>
              <h5>Category {item.data.category.slug}</h5>
              <img
                src={item.data.mainimage.url}
                alt={item.data.mainimage.alt}
              />
            </section>
          );
        })}
      </article>
    </>
  );
};

export default FeaturedProducts;
