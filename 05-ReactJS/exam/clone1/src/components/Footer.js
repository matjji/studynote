/** 패키지 참조 */
import React from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom"

const FooterBox = styled.footer`
    height: 52.5px;
    font-size: 15px;
    padding: 32px 0;
    text-align: center;
    background-color: #F1F1F1;
    display: block;

    p{
        vertical-align: middle;
        margin: 15px 0;
    }
    a {
        color: black
    }
`

const Footer = () => {
    return(
        <FooterBox>
            <p>
                Powered by
                <NavLink to="/">w3.css</NavLink>
            </p>
        </FooterBox>
    )
}

export default Footer;