/**
* @filename Main.js
* @description Menu Bar에 대한 구현 및 이벤트 처리
* @author: 신지섭 (pon0304616@gmail.com)
*/
//패키지
import React from 'react';
import styled from 'styled-components'
//이미지
import Monthly from "../img/img_monthly_fom_220429.png"
import MenuImg from '../img/gnb_menu.png'
import haapyImg from "../img/img_happypoint_app.jpg"

const MenuBarBox = styled.nav`
    float: right;
    .menuIcon {
        width: 100%;
        height: 46px;
        & > ul >li {
            float: left;
        }
        div:first-child {
            width: 160px;
            height: 46px;
            a {
                display: block;
                height: 46px;
            }
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
        }
        & > ul > li > ul > li {
            text-align: center;
            padding-bottom: 12px;
            &:first-child {
                padding-top: 40px;
            }
            a {
                font-size: 14px;
                font-weight: 300;
                color: #7b7b7b;
                line-height: 1.2;
                &:hover {
                    color: #ff75ac;
                }
            }
        }
        .mouseEvent {
            position: absolute;
            height: 0px; //275px
            overflow: hidden;
            transition: height 0.5s ease-in-out;
            z-index: 999;
        }
        .flavor {
            .flavorName {
                width: 223px;
                a {
                    padding-right: 59px;
                }
                span {
                    width: 164px;
                    background-position: -133px -3px;
                }
            }
            .mouseEvent {
                margin-left: -44px;
                a {
                    display: block;
                    height: 100%;
                }
                img {
                    margin-left: 37px;
                    opacity: 0;
                    transition: opacity 0.15s ease-in-out;
                    transition-delay: 0.3s;
                }
            }
        }
        .menu {
            .menuName {
                a {
                    padding: 0 59px;
                }
                span {
                    width: 42px;
                    background-position: -415px -3px;
                }
            }
            ul {
                margin-left: 35px
            }
        }
        .nutri {
            .nutriName{
                a {
                    padding: 0 27.5px;
                }
                span {
                    width: 105px;
                    background-position: -545px -3px;
                }
            }
            ul {
                margin-left: 50px
            }
        }
        .event {
            .eventName {
                a {
                    padding: 0 59px;
                }
                span {
                    width: 42px;
                    background-position: -737px -3px;
                }
            }
            ul {
                margin-left: 43px
            }
        }
        .store {
            width: 167px;
            .storeName {
                a {
                    padding: 0 59px;
                }
                span {
                    width: 49px;
                    background-position: -897px -3px;
                }
            }
            ul {
                margin-left: 57px
            }
        }
        .about {
            .aboutName {
                width: 108px;
                a {
                    padding-left: 59px;
                }
                span {
                    width: 49px;
                    background-position: -1057px -3px;
                }
            }
            ul {
                padding-left: 30px
            }
        }
    }
    .backboard {
        position: absolute;
        z-index: 998;
        overflow: hidden;
        height: 0;
        top: 186px;
        left:0;
        min-width: 100%;
        border-bottom: 1px solid #693337;
        background: #fff;
        .img {
            margin: 0 auto;
            width: 1200px;
            height: 204px;
            background: url(${haapyImg}) no-repeat 0 65px;
            transition: height 0.5s ease-in-out;
        }
        transition: height 0.5s ease-in-out;
    }
`
const MenuBar = () => {
    const mouseFlavor = React.useRef();
    const mouseMenu = React.useRef();
    const mouseNutri = React.useRef();
    const mouseStore = React.useRef();
    const mouseEvent = React.useRef();
    const mouseAbout = React.useRef();
    const mouseMonthly = React.useRef();
    const mouseHappy = React.useRef();
    const mouseHappyImg = React.useRef();
    const mouseOver = (e) => {
        mouseFlavor.current.style.height = 274 + 'px'
        mouseMenu.current.style.height = 274 + 'px'
        mouseNutri.current.style.height = 274 + 'px'
        mouseStore.current.style.height = 274 + 'px'
        mouseEvent.current.style.height = 274 + 'px'
        mouseAbout.current.style.height = 274 + 'px'
        mouseHappy.current.style.height = 274 + 'px'
        mouseHappyImg.current.style.height = 204 + 'px'
        mouseMonthly.current.style.opacity = 1
    }
    const mouseOut = (e) => {
        mouseFlavor.current.style.height = 0
        mouseMenu.current.style.height = 0
        mouseNutri.current.style.height = 0
        mouseStore.current.style.height = 0
        mouseEvent.current.style.height = 0
        mouseAbout.current.style.height = 0
        mouseHappy.current.style.height = 0
        mouseHappyImg.current.style.height = 0
        mouseMonthly.current.style.opacity = 0
    }
    return (
        <MenuBarBox>
            <div className="menuIcon" onMouseOver={mouseOver} onMouseOut={mouseOut}>
                <ul className='clear'>
                    <li className="flavor">
                        <div className="flavorName" >
                            <a href="/"><span>FLAVOR OF THE MONTH</span></a>
                        </div>
                        <div className="mouseEvent" ref={mouseFlavor}>
                            <a href="/"><img src={Monthly} alt="monthly" ref={mouseMonthly}/></a>
                        </div>
                    </li>
                    <li className="menu">
                        <div className="menuName">
                            <a href="/"><span>Menu</span></a>
                        </div>
                        <ul className="mouseEvent" ref={mouseMenu}>
                            <li>
                                <a href="/"><span>아이스크림</span></a>
                            </li>
                            <li>
                                <a href="/"><span>아이스크림케이크</span></a>
                            </li>
                            <li>
                                <a href="/"><span>음료</span></a>
                            </li>
                            <li>
                                <a href="/"><span>커피</span></a>
                            </li>
                            <li>
                                <a href="/"><span>디저트</span></a>
                            </li>
                        </ul>
                    </li>
                    <li className="nutri">
                        <div className="nutriName">
                            <a href="/"><span>영양성분 및 알레르기</span></a>
                        </div>
                        <ul className="mouseEvent" ref={mouseNutri}>
                            <li>
                                <a href="/"><span>아이스크림</span></a>
                            </li>
                            <li>
                                <a href="/"><span>음료</span></a>
                            </li>
                            <li>
                                <a href="/"><span>커피</span></a>
                            </li>
                        </ul>
                    </li>
                    <li className="event">
                        <div className="eventName">
                            <a href="/"><span>Event</span></a>
                        </div>
                        <ul className="mouseEvent" ref={mouseEvent}>
                            <li>
                                <a href="/"><span>진행중인이벤트</span></a>
                            </li>
                            <li>
                                <a href="/"><span>당첨자발표</span></a>
                            </li>
                        </ul>
                    </li>
                    <li className="store">
                        <div className="storeName">
                            <a href="/"><span>Store</span></a>
                        </div>
                        <ul className="mouseEvent" ref={mouseStore}>
                            <li>
                                <a href="/"><span>매장찾기</span></a>
                            </li>
                            <li>
                                <a href="/"><span>고객센터</span></a>
                            </li>
                            <li>
                                <a href="/"><span>단체주문</span></a>
                            </li>
                        </ul>
                    </li>
                    <li className="about">
                        <div className="aboutName">
                            <a href="/"><span>About</span></a>
                        </div>
                        <ul className="mouseEvent" ref={mouseAbout}>
                            <li>
                                <a href="/"><span>공지사항</span></a>
                            </li>
                            <li>
                                <a href="/"><span>보도자료</span></a>
                            </li>
                            <li>
                                <a href="/"><span>채용정보</span></a>
                            </li>
                            <li>
                                <a href="/"><span>점포개설문의</span></a>
                            </li>
                            <li>
                                <a href="/"><span>CONTATCUS</span></a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="backboard" onMouseOver={mouseOver} onMouseOut={mouseOut} ref={mouseHappy}>
                <div className="img" ref={mouseHappyImg}></div>
            </div>
        </MenuBarBox>
    );
};

export default MenuBar;