import React from "react";
import Header from "./Header.tsx";
import Layout_One from "./Layout1.tsx";
import Layout_Two from "./Layout2.tsx";
import Layout_Three from "./Layout3.tsx";
import Layout_Four from "./Layout4.tsx";
import Layout_Five from "./Layout5.tsx";
import Layout_Six from "./Layout6.tsx";
import Layout_Seven from "./Layout7.tsx";
import Layout_Eight from "./Layout8.tsx";
import Footer from "./Footer.tsx";

export const Main=()=>{
    return(
        <>
        <Header />
        <Layout_One />
        <Layout_Two />
        <Layout_Three />
        <Layout_Four />
        <Layout_Five />
        <Layout_Six />
        <Layout_Seven />
        <Layout_Eight />
        <Footer />
        </>
    )
}