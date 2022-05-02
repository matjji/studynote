/** 패키지 참조 */
import React from "react";
import styled from "styled-components";

/** 컴포넌트 참조 */
import About from "../components/About";
import Menu from "../components/Menu";
import Contact from "../components/Contact"

const MainBox = styled.div`
    max-width: 1100px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    &:after {
        display: block;
        content: "";
        float: none;
        clear: both;
    }
    .main_img {
        display: block;
        float: left;
        padding: 12px 24px;
        opacity: 0.75;
        width: 45%;
    }
    img {
        max-width: 100%;
        height: auto;
        border-radius: 5px;
        vertical-align: center;
    }

    .main_text {
        display: block;
        padding: 12px 24px;
        width: 45%;
        float: left;
        h1 {
            text-align: center;
            letter-spacing: 5px;
            font-size: 36px;
        }
    }

    .main_about,
    .main_menu {
        padding: 64px 0;
        width: 100%;
        &:after {
            display: block;
            content: "";
            float: none;
            clear: both;
        }
    }
    .up {
        span {
            background-color: #f1f1f1;
            padding: 0 8px;
        }
        p {
            margin: 18px 0;
            font-size: 18px;
            &:last-child {
                color: #757575;
            }
        }
        h3 {
            text-align: center;
            font-size: 18px;
            letter-spacing: 5px;
        }
    }
    .down {
        h4 {
            font-size: 20px;
        }
        p {
            color: #757575;
            margin: 15px 0;
        }
    }
`

const Main = () => {
    return (
        <MainBox>
            <About />
            <hr/>
            <Menu />
            <hr/>
            <Contact/>
        </MainBox>
    )
}

export default Main;