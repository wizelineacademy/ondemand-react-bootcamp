import React from "react";
import Header from "./Header/Header";
import Content from "./Content/Content";
import Footer from "./Footer/Footer";

const Layout = props => {
    return (
        <>
            <Header></Header>
            <Content></Content>
            <Footer></Footer>
        </>
    )
}

export default Layout;