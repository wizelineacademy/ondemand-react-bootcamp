import React, {useEffect, useState} from "react";
import styled from "@emotion/styled";
import Product from "./Product";
import { useLocation } from "react-router";
import { useFeaturedProducts } from "../../utils/hooks/useFeaturedProducts";

const Grid = styled.div`
  margin: 16px auto;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  column-gap: 8px;
  row-gap: 8px;
`;

const FeaturedProducts = ({ categoriesFilter, setCategoriesFilter }) => {
    const { search } = useLocation();
    const { data } = useFeaturedProducts(16);
    const [ products, setProducts ] = useState([]);

    useEffect(() => {
        const searchParms = new URLSearchParams( search );
        const category = searchParms.get('category');
        if (category){
            setCategoriesFilter(category.split(','));
        }
    }, [search, setCategoriesFilter]);
    
    useEffect(() => {
        if (categoriesFilter && categoriesFilter.length > 0) {
            setProducts(data.results && data.results.filter(product => categoriesFilter.includes( product.data.category.slug)));
        } else {
            setProducts(data.results);
        }
    }, [data, categoriesFilter]);
    
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

export default FeaturedProducts;