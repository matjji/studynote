/**
* @filename Member.js
* @description 상단 메뉴에 있는 login과 join 구현
* @author: 신지섭 (pon0304616@gmail.com)
*/
//패키지
import React from 'react';
import styled from 'styled-components'
//이미지
import MenuImg from '../img/gnb_menu.png'
const MemberBox = styled.nav`
    float: left;
    height: 46px;
    span {
        display: block;
        width: 35px;
        height: 46px;
        line-height: 46px;
        text-indent: -20000px;
        background: url(${MenuImg}) no-repeat;
        background-position: 0px -1px;
        margin: auto;
    }
    ul {
        height: 100%;
        width: 100%;
        li {
            float: left;
            height: 100%;
            width: 58px;
            a {
                display: block;
                padding-right: 23px;
                height: 46px;
            }
            &:last-child{
                width: 73px;
                a {
                    width: 27px;
                    height: 46px;
                    padding: 0 23px;
                }
                span{
                    width: 27px;
                    background-position: -97px -1px;
                }
            }
        }
    }
`

const Member = () => {
    return (
        <MemberBox>
            <ul>
                <li>
                    <a href="/">
                        <span>LOGIN</span>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <span>JOIN</span>
                    </a>
                </li>
            </ul>
        </MemberBox>
    );
};

export default Member;