import React, {useEffect, useState} from "react";
import styled from "@emotion/styled";
import Product from "./Product";
import { useLocation } from "react-router";
import { useProductSearch } from "../../utils/hooks/useProductSearch";

const Grid = styled.div`
  margin: 16px auto;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  column-gap: 8px;
  row-gap: 8px;
`;

const ProductSearchResult = () => {
    const { search } = useLocation();
    const searchParms = new URLSearchParams( search );
    const { data } = useProductSearch(searchParms.get('q'));
    const [ products, setProducts ] = useState([]);
    
    useEffect(() => {
        setProducts(data.results);
    }, [data]);
    
    if ( !products ) return null;
    return (
        <Grid>
            {products.map((prod, index) => {
                return (
                    <Product key={index} prod={prod}></Product>
                );
            })}
        </Grid>
    );
};

export default ProductSearchResult;