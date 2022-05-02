import React from "react";
import styled from "styled-components";

const FooterBox = styled.footer`
    font-size: 15px;
    padding: 32px 0;
    width: auto;
    color: white;
    background-color: #000000;
    text-align: center;

    a {
        &:visited {
            color: white;
        }
        &:hover {
            color: green;
        }
    }
`

const Footer = () => {
    return(
        <FooterBox>
            <p>
                Powered by 
                <a href="https://www.w3schools.com/w3css/default.asp">w3.css</a>
            </p>
        </FooterBox>
    )
}

export default Footer;