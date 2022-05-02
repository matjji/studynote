/** 패키지 참조 */
import React from "react";
import styled from "styled-components"
/** 이미지 참조 */
import hamburger from "../img/hamburger.jpg"

const HamBox = styled.div`
    display: block;
    max-width: 1600px;
    min-width: 500px;
    margin-left: auto;
    margin-right: auto;
    position: relative;

    img {
        width: 100%;
        height: 100%;
    }

    .hamburger_text {
        font-family: "Playfair Display";
        display: block;
        font-size: 36px! important;
        font-weight: 400;
        letter-spacing: 5px;
        position: absolute;
        padding: 12px 24px;
        opacity: 0.6;
        left: 0;
        bottom: 0;

        h1 {
            margin: 10px 0;
        }
    }
`

const Img = () => {
    return (
        <HamBox>
            <img src={hamburger} alt="Hamburger Catering" />
            <div className="hamburger_text">
                <h1>Le Catering</h1>
            </div>
        </HamBox>
    )
}

export default Img