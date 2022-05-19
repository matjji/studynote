/**
* @filename Menu.js
* @description 이미지 슬라이드 위의 이미지 구현
* @author: 신지섭 (pon0304616@gmail.com)
*/
//패키지 불러오기
import React from 'react';
import styled from 'styled-components'
//JS 파일
import Member from './Member';
import MenuBar from './MenuBar'
const MenuBox = styled.div`
    width: 100%;
    height: 46px;
    .inner {
        width: 1200px;
        height: 100%;
        margin: 0 auto;
    }
`
const Menu = () => {
    return (
        <MenuBox>
            <div className="inner clear">
                <Member/>
                <MenuBar/>
            </div>
        </MenuBox>
    );
};

export default Menu;