import React from "react";
import FooterStyled from "../styles/FooterStyled";

export default function Footer(props) {
    console.log(props)
    return (
        <FooterStyled>
                <p>{props.text}</p>
        </FooterStyled>
    )
}
