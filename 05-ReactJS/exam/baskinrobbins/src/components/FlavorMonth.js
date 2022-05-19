/**
* @filename FlavorMonth.js
* @description 이미지 슬라이드 위의 이미지 구현
* @author: 신지섭 (pon0304616@gmail.com)
*/
//패키지
import React from 'react';
import styled from 'styled-components'
//이미지
import pika from '../img/1714824579.jpg'

const FlavorMonthBox = styled.div`
    .flavor_month {
        display: block;
        width: 100%;
        height: 150px;
        background: #FFD825 url(${pika}) 50% 0 no-repeat;
        text-indent: -20000px;
    }
`

const FlavorMonth = () => {
    return (
        <FlavorMonthBox>
            <a href="/" className="flavor_month" alt="flavor Month">
                flavor of the month
            </a>
        </FlavorMonthBox>
    );
};

export default FlavorMonth;