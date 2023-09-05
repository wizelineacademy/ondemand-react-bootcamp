import React, { useState, useEffect } from "react";
import { Content, Title } from "./ProductList.style";
import { BuildSidebar } from "../../components/Sidebar/Sidebar.component";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner.component";
import { filterProducts } from "../../utils/functions/mapper";
import { useProductCategories } from "../../utils/hooks/useProductCategories";
import { useProductList } from "../../utils/hooks/useProductList";
import Grid from "../../components/Grid/Grid.component";
export default function ProductList() {
  const categories = useProductCategories();
  const [sidebar, categoriesSelected] = BuildSidebar(categories.data);
  const [isLoading, setLoading] = useState(false);
  const allProducts = useProductList();
  const products = filterProducts(allProducts.data, categoriesSelected);
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  useEffect(() => {
    async function mockRequest() {
      await delay(2000);
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
