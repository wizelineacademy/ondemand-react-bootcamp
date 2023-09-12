import React, { useState } from "react";
import CategorySidebar from "../category/CategorySidebar";
import Products from "./ProductGrid";
import styled from "@emotion/styled";

const Div = styled.div`
    padding-left: 200px;
`

const ProductList = props => {
    const [categoriesFilter, setCategoriesFilter] = useState([]);

    return (
        <>
            <CategorySidebar 
                categoriesFilter={categoriesFilter}
                setCategoriesFilter={setCategoriesFilter}
            />
            <Div>
            <Products
                categoriesFilter={categoriesFilter}
                setCategoriesFilter={setCategoriesFilter}
            />
            </Div>
        </>
    );
};

export default ProductList;