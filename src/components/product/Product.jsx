import React from "react";
import styled from "@emotion/styled";

const Td = styled.td`
    border: 1px solid;
`

const Product = props => {
    const prod = props.prod.data;
    console.log(prod);
    return (
        <tr>
            <Td>
            <img src={prod.mainimage.url} alt="" width={30}></img>
            </Td>
            <Td>
            <span>{prod.name}</span>
            </Td>
            <Td>
            <span>  -  {prod.category.slug}</span>
            </Td>
            <Td>
            <span> $ {prod.price}</span>
            </Td>
        </tr>
    );
};

export default Product;