import React from "react";
import styled from "@emotion/styled";
import Header from "./Header/Header";
import Content from "./Content/Content";
import Footer from "./Footer/Footer";

const Div = styled.div`
    position:relative;
    bottom:0;
    width:100%;
    height:50px;   /* Height of the footer */
    background:#6cf;
`

const Layout = props => {
    return (
        <>
            <Header></Header>
            <Content></Content>
            <Div>
                <Footer></Footer>
            </Div>
        </>
    )
}

export default Layout;