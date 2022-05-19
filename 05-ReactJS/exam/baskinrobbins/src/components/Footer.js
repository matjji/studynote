/**
* @filename Footer.js
* @description Footer 부분 구현.
* @author: 신지섭 (pon0304616@gmail.com)
*/
import React from 'react';
import styled from 'styled-components'
const FooterBox = styled.footer`
    min-width: 1200px;
    border-top: 1px solid #feaf2b;
    padding-bottom: 60px;
    .footer_inner{
        .policy {
            width: 1040px;
            padding: 0 80px;
            margin: 0 auto;
            li {
                display: block;
                float: left;
                width: 12%;
                font-size: 14px;
                text-align: center;
                line-height: 77px;
                a {
                    color: #483834;
                }
                &:nth-child(5) {
                    width: 15%;
                    a{
                        color: #ff7c98;
                        font-weight: bold;
                    }
                }
                &:nth-child(6) {
                    width: 20%;
                }
                &:last-child {
                    width: 17%;
                }
            }
        }
        .brand_family {
            width: 100%;
            background: #f9f8f7;
            height: 75px;
            .brand_inner{
                position: relative;
                width: 1200px;
                height: 75px;
                margin: 0 auto;
                ul {
                    padding: 22px 0 0 222px;
                    li {
                        display: block;
                        float: left;
                        width: 111px;
                        height: 31px
                    }
                }
                .familysite {
                    position: absolute;
                    top: 21px;
                    right: 196px;
                    width: 150px;
                    background-color: #fff;
                    button {
                        cursor: pointer;
                        width: 100%;
                        height: 32px;
                        background: url("http://www.baskinrobbins.co.kr/assets/images/common/family_size_off.png") 100% 0 no-repeat;
                        padding-left: 11px;
                        border-radius: 5px;
                        border: 1px solid #d1cecc;
                        font-size: 11px;
                        color: #b1ab9f;
                        text-align: left;
                    }
                    ul {
                        display: none;
                        position: absolute;
                        left: 0;
                        bottom: 28px;
                        width: 100%;
                        padding: 5px 0;
                        border: 5px 5px 0 0;
                        border: 1px solid #d1cecc;
                        background: #fff;
                        border-radius: 5px 5px 0 0;
                        li {
                            height: 25px;
                            width: 100%;
                            a {
                                display: block;
                                color: #726454;
                                padding-left: 15px;
                                line-height: 25px;
                                &:hover {
                                    background: #f1f1f1;
                                }
                            }
                        }
                    }
                    .on {
                        background: url("http://www.baskinrobbins.co.kr/assets/images/common/family_size_on.png") 100% 0 no-repeat;
                    }
                }
            }
        }
        .info {
            width: 1200px;
            margin: 0 auto;
            padding-top: 48px;
            font-size: 11px;
            text-align: center;
            h1 {
                height: 27px;
                padding-bottom: 35px;
            }
            div {
                p {
                    display: inline-block;
                    padding: 0 15px 3px 0;
                    &:nth-child(3) {
                        padding-right: 0;
                    }
                }
            }
            address {
                padding: 12px;
                color: #b1adab;
                font-size: 11px;
            }
        }
    }

`
const Footer = () => {
    const [isActive, setIsActive] = React.useState(false);
    const btn = React.useRef();
    const onClick = (e) => {
        setIsActive(!isActive);
        isActive ? btn.current.style.display = "none" : btn.current.style.display ="block"
    }
    return (
        <FooterBox>
            <div className="footer_inner">
                <div className="policy clear">
                    <ul>
                        <li><a href="/">점포개설문의</a></li>
                        <li><a href="/">채용문의</a></li>
                        <li><a href="/">윤리신고센터</a></li>
                        <li><a href="/">이용약관</a></li>
                        <li><a href="/">개인정보처리방침</a></li>
                        <li><a href="/">영상정보처리기기운영관리방침</a></li>
                        <li><a href="/">거래희망회사 사전등록</a></li>
                    </ul>
                </div>
                <div className="brand_family clear">
                    <div className="brand_inner">
                        <ul>
                            <li>
                                <a href="/">
                                    <img src="http://www.baskinrobbins.co.kr/assets/images/common/btn_happypoint.png" alt="HAPPY POINT"/>
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <img src="http://www.baskinrobbins.co.kr/assets/images/common/btn_happymarket.png" alt="HAPPY MARKET"/>
                                </a>
                            </li>
                            <li style={{width: "182px"}}>
                                <a href="/">
                                    <img src="http://www.baskinrobbins.co.kr/assets/images/common/btn_spc_story.png" alt="SPC그룹 사회공헌활동 SPC 행복한 이야기"/>
                                </a>
                            </li>
                            <li style={{width: "55px", paddingRight: "9px"}}>
                                <a href="/">
                                    <img src="http://www.baskinrobbins.co.kr/assets/images/common/btn_norton.gif" alt="Norton SECURED"/>
                                </a>
                            </li>
                            <li style={{width: "31px", paddingRight: "9px"}}>
                                <a href="/">
                                    <img style={{width: "31px", height: "31px"}} src="http://www.baskinrobbins.co.kr/assets/images/common/btn_ccm_2.png" alt="소비자중심경영 인증제도"/>
                                </a>
                            </li>
                            <li style={{width: "29px"}}>
                                <a href="/">
                                    <img src="http://www.baskinrobbins.co.kr/assets/images/common/btn_ksa.png" alt="국가품질상 - KSA 한국표준협회"/>
                                </a>
                            </li>
                        </ul>
                        <div className="familysite" >
                            <button type="button" onClick={onClick} className={isActive && "on"}>FAMILY SITE</button>
                            <ul ref={btn}>
                                <li>
                                    <a href="/">배스킨 스쿨</a>
                                </li>
                                <li>
                                    <a href="/">SPC그룹사이트</a>
                                </li>
                                <li>
                                    <a href="/">SPC MAGAZINE</a>
                                </li>
                                <li>
                                    <a href="/">BR코리아</a>
                                </li>
                                <li>
                                    <a href="/">해피포인트카드</a>
                                </li>
                                <li>
                                    <a href="/">파스쿠찌</a>
                                </li>
                                <li>
                                    <a href="/">삼립</a>
                                </li>
                                <li>
                                    <a href="/">파리바게트</a>
                                </li>
                                <li>
                                    <a href="/">던킨도너츠</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="info">
                    <h1>
                        <img src="http://www.baskinrobbins.co.kr/assets/images/common/footer_logo.png" alt="footer logo"/>
                    </h1>
                    <div>
                        <p>
                            사업자 등록번호 : 303-81-09535
                        </p>
                        <p>
                            비알코리아(주) 대표이사 도세호
                        </p>
                        <p>
                            서울특별시 서초구 남부순환로 2620(양재동 11-149번지)
                        </p>
                    </div>
                    <div>
                        <p>
                            TEL : 080-555-3131
                        </p>
                        <p>
                            개인정보관리책임자 : 김경우
                        </p>
                    </div>
                    <address>
                        Copyright &copy; 2016 BRKOREA Company. All Rights Reserved.
                    </address>
                </div>
            </div>
        </FooterBox>
    );
};

export default Footer;