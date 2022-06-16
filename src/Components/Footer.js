import React from "react";
import FooterStyled from "../styles/js/FooterStyled";

export default function Footer(props) {
    return (
        <FooterStyled>
                <p>{props.text}</p>
        </FooterStyled>
    )
}
