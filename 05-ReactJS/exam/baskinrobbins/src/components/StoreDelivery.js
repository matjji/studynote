/**
* @filename Main.js
* @description store와 happy order delivery부분 구현.
* @author: 신지섭 (pon0304616@gmail.com)
*/
//패키지
import React from 'react';
import styled from 'styled-components'
const StoreDeliveryBox = styled.div`
    height: 547px;
    position: relative;
    width: 1200px;
    margin: 0 auto;
    h3 {
        padding: 95px 0 50px 0;
        img {
            display: block;
            margin: 0 auto;
        }
    }
    .store {
        float: left;
        width: 50%;
    }
    .delivery {
        float: left;
        width: 50%;
    }
`

const StoreDelivery = () => {
    return (
        <StoreDeliveryBox>
            <section className="store">
                <h3>
                    <img src="http://www.baskinrobbins.co.kr/assets/images/main/h_store.png" alt="BR STORE"/>
                </h3>
                <div>
                    <a href="/">
                        <img src="http://www.baskinrobbins.co.kr/assets/images/main/img_store.jpg" 
                        alt="내 주변 가장 가까운 배스킨라빈스 매장을 찾아보세요! 다양한 즐거움과 새로움! 우리동네 배스킨라빈스! 매장찾기"/>
                    </a>
                </div>
            </section>
            <section className="delivery">
                <h3>
                    <img src="http://www.baskinrobbins.co.kr/assets/images/main/h_happyorder_delivery.png" alt="HAPPY ORDER & DELIVERY"/>
                </h3>
                <div>
                    <a href="/">
                        <img src="http://www.baskinrobbins.co.kr/assets/images/main/img_happyorder_delivery.png"
                        alt="배스킨라빈스 모바일 사전주문 & 배달서비스 - 해피오더 배달 콜센터 1670-3131 주문에서 결제 & 배송까지 간단하게!"/>
                    </a>
                </div>
            </section>
        </StoreDeliveryBox>
    );
};

export default StoreDelivery;