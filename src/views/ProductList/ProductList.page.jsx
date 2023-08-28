import React, { useState, useEffect } from "react";
import { Content, Title } from "./ProductList.style";
import { BuildSidebar } from "../../components/Sidebar/Sidebar.component";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner.component";
import allProducts from "../../utils/mock/products.json";
import { filterProducts } from "../../utils/functions/mapper";
import categories from "../../utils/mock/product-categories.json";

import Grid from "../../components/Grid/Grid.component";
export default function ProductList() {
  const [sidebar, categoriesSelected] = BuildSidebar(categories);
  const [isLoading, setLoading] = useState(false);
  const products = filterProducts(allProducts, categoriesSelected);
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  useEffect(() => {
    async function mockRequest() {
      await delay(2000); // Mock fetch request time
      setLoading(false);
    }
    setLoading(true);
    mockRequest();
  }, [categoriesSelected]);
  return (
    <>
      {sidebar}
      <Content>
        <Title>This is the Product List Page</Title>
        {isLoading ? <LoadingSpinner /> : <Grid data={products} />}
      </Content>
    </>
  );
}
