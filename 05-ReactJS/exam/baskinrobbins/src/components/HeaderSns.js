/**
* @filename Sns.js
* @description 상단 SNS 아이콘 구현
* @author: 신지섭 (pon0304616@gmail.com)
*/
//패키지
import React from 'react';
import styled from "styled-components"
//이미지
import facebook from "../img/icon_facebook.png"
import twitter from "../img/icon_twitter.png"
import blog from "../img/icon_blog.png"
import instagram from "../img/icon_instgram.png"
import youtube from "../img/icon_youtube.png"

const HeaderSnsBox = styled.nav`
    position: absolute;
    top: 50px;
    left: 0;
    li {
        display: inline-block;
        padding-right: 10px;
        img {
            width: 35px;
            height: 35px;
            vertical-align: top;
        }
    }
`

const HeaderSns = () => {
    return (
        <HeaderSnsBox>
            <ul>
                <li>
                    <a href="/" target="_blank">
                        <img src={facebook} alt="facebook"/>
                    </a>
                </li>
                <li>
                    <a href="/" target="_blank">
                        <img src={twitter} alt="twitter"/>
                    </a>
                </li>
                <li>
                    <a href="/" target="_blank">
                        <img src={blog} alt="blog"/>
                    </a>
                </li>
                <li>
                    <a href="/" target="_blank">
                        <img src={instagram} alt="instagram"/>
                    </a>
                </li>
                <li>
                    <a href="/" target="_blank">
                        <img src={youtube} alt="youtube"/>
                    </a>
                </li>
            </ul>
        </HeaderSnsBox>
    );
};

export default HeaderSns;