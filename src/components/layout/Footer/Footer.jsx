import React from "react";
import styled from "@emotion/styled";

const Foot = styled.footer`
    line-height: 40px;
    height: 40px;
    text-align: center;
`

const Footer = props => {
    return (
        <Foot>
            Ecommerce created during Wizeline’s Academy React Bootcamp
        </Foot>
    );
};

export default Footer;