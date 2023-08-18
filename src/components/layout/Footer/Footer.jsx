import React from "react";
import styled from "@emotion/styled";
import ContentContainer from "../ContentContainer.styled";

const Foot = styled.footer`
    background-color: cyan;
    padding: 1em;
    text-align: center;
`

const Footer = props => {
    return (
        <Foot>
            <ContentContainer>
                Ecommerce created during Wizeline’s Academy React Bootcamp
            </ContentContainer>
        </Foot>
    );
};

export default Footer;