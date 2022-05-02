import React from "react";
import styled from "styled-components"

import Projects from "../components/Projects";
import Title from '../components/Title'
import About from "../components/About";
import Contact from "../components/Contact";
const MainBox = styled.div`
    display: block;
    max-width: 1564px;
    margin: auto;
    padding: 8px 16px 4px 16px;
`

const Main = () => {
    return(
        <MainBox>
            <Title props="Projects"/>
            <Projects/>
            <Title props="About"/>
            <About/>
            <Title props="Contact"/>
            <Contact/>
        </MainBox>
    )
}

export default Main;