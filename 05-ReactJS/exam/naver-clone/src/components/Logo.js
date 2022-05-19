import React from 'react';
import styled from "styled-components"

const LogoBox = styled.div`
    max-width: 768px;
    min-width: 460px;
    height: 44px;
    margin: auto;
    padding: 60px 0 20px 0;
    h1 {
        height: 44px;
    }
    .logo_n {
        display: block;
        margin: 0 auto;
        width: 240px;
        height: 44px;
        background-image: url(https://static.nid.naver.com/images/ui/join/m_naver_logo_20191126.png);
        background-repeat: no-repeat;
        background-position: 0 0;
        background-size: 240px auto;
    }
    a {
        cursor: pointer;
    text-decoration: none;
    }
`

const Logo = () => {
    return (
        <LogoBox>
            <h1>
                <a href="http://www.naver.com" className="logo_n">
                </a>
            </h1>
        </LogoBox>
    );
};

export default Logo;