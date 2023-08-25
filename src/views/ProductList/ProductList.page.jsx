import React, { useState } from "react";
import { Sidebar, Option, Content } from "./ProductList.style";

import allProducts from "../../utils/mock/products.json";
import categories from "../../utils/mock/product-categories.json";

import Grid from "../../components/Grid/Grid.component";
export default function ProductList() {
  const [categoriesSelected, setCategoriesSelected] = useState(new Set());

  const filteredProducts = allProducts.results
    .filter(
      (product) =>
        categoriesSelected.size === 0 ||
        categoriesSelected.has(product.data.category.id)
    )
    .map((product) => {
      return {
        id: product.id,
        key: product.id,
        name: product.data.name,
        description: product.data.description[0].text,
        image: product.data.mainimage.url,
      };
    });

  return (
    <>
      <Sidebar>
        {categories.results.map((category) => (
          <Option
            className={categoriesSelected.has(category.id) ? "active" : ""}
            key={category.id}
            onClick={() => {
              if (categoriesSelected.has(category.id))
                categoriesSelected.delete(category.id);
              else categoriesSelected.add(category.id);
              setCategoriesSelected(new Set(categoriesSelected));
            }}
          >
            {category.data.name}
          </Option>
        ))}
      </Sidebar>
      <Content>
        <Grid data={filteredProducts} />
      </Content>
    </>
  );
}
