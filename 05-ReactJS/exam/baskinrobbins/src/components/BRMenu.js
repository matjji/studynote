/**
* @filename Main.js
* @description BR Menu 구현
* @author: 신지섭 (pon0304616@gmail.com)
*/
//패키지
import React from 'react';
import styled from 'styled-components'
const BRMenuBox = styled.section`
    position: relative;
    height: 1157px;
    background: url("http://www.baskinrobbins.co.kr/assets/images/main/bg_menu.jpg") 50% 0 no-repeat;
    h3 {
        padding-top: 78px;
        height: 22px;
        img {
            display:block;
            margin: 0 auto;
        }
    }
    .menu_list {
        position: relative;
        background: url("http://www.baskinrobbins.co.kr/assets/images/main/img_menu_list_220429.png?v=220429") 50% 0 no-repeat;
        height: 1066px;
        width: 1200px;
        margin: 50px auto 0 auto;
        a {
            display: block;
        }
        p {
            width: 0;
            overflow: hidden;
        }
        .icecream {
            position: absolute;
            top: 25px;
            left: 324px;
            a {
                width: 400px;
                height: 305px;
            }
        }
        .icecreamcake {
            position: absolute;
            top: 25px;
            left: 755px;
            a {
                height: 472px;
                width: 280px;
            }
        }
        .beverage {
            position: absolute;
            top: 365px;
            left: 121px;
            a {
                height: 366px;
                width: 230px;
            }
        }
        .coffee {
            position: absolute;
            top: 365px;
            left: 390px;
            a {
                width: 329px;
                height: 292px;
            }
        }
        .dessert {
            position: absolute;
            top: 695px;
            left:390px;
            a {
                width: 329px;
                height: 177px;
            }
        }
        .gift {
            position: absolute;
            top: 535px;
            left: 757px;
            a {
                width: 276px;
                height: 183px;
            }
        }
    }
`

const BRMenu = () => {
    return (
        <BRMenuBox>
            <h3>
                <img src="http://www.baskinrobbins.co.kr/assets/images/main/h_menu.png" alt="menu"/>
            </h3>
            <div className="menu_list">
                <div className="icecream">
                    <a href="/">
                        <p>ICECREAM</p>
                        <p>아이스크림의 기준, 베스킨라빈스</p>
                    </a>
                </div>
                <div className="icecreamcake">
                    <a href="/">
                        <p>ICECREAMCAKE</p>
                        <p>아이와 어른이 좋아하는 아이스크림을 하나의 케이크에서 모두 즐기세요!</p>
                    </a>
                </div>
                <div className="beverage">
                    <a href="/">
                        <p>BEVERAGE</p>
                        <p>아이스크림으로 즐기는 베스킨라빈스만의 음료!</p>
                    </a>
                </div>
                <div className="coffee">
                    <a href="/">
                        <p>COFFEE</p>
                        <p>베스킨라빈스만의 부드러운 촉감과 달콤한 풍미</p>
                    </a>
                </div>
                <div className="dessert">
                    <a href="/">
                        <p>DESSERT</p>
                        <p>아이스크림을 더욱 재미있게! 간편하게 즐기는 방법!</p>
                    </a>
                </div>
                <div className="gift">
                    <a href="/">
                        <p>GIFT</p>
                        <p>특별한 날, 베스킨라빈스로 달콤한 선물을 전해보세요!</p>
                    </a>
                </div>
            </div>
        </BRMenuBox>
    );
};

export default BRMenu;