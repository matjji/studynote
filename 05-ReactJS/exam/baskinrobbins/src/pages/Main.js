/**
* @filename Main.js
* @description 홈페이지 Main 부분 구현
* @author: 신지섭 (pon0304616@gmail.com)
*/
//패키지
import React from 'react';
//components 파일
import SwipreBanner from '../components/SwiperBanner';
import FlavorMonth from '../components/FlavorMonth';
import BREvent from '../components/BREvent';
import BRMenu from '../components/BRMenu';
import StoreDelivery from '../components/StoreDelivery';
import Sns from '../components/Sns';

const Main = () => {
    return (
        <div>
            <FlavorMonth/>
            <SwipreBanner/>
            <BREvent/>
            <BRMenu/>
            <StoreDelivery/>
            <Sns/>
        </div>
    );
};

export default Main;