import React from "react";
import styled from "styled-components"

const NavBox = styled.nav`
    height: 55px;
    width: 100%;
    position: fixed;
    top: 0px;
    z-index: 1;
    background-color: #FFFFFF;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1), 0 2px 10px rgba(0,0,0,0.2);
    letter-spacing: 4px;
    font-size: 15px;

    a {
        text-decoration: none;
        color: black;
        padding: 8px 16px;
        &:hover {
            background-color: #cccccc;
        }
    }

    .nav_left {
        position: relative;
        display: block;
        margin: 8px 18px;
        width: auto;
        top: 7px;
        right: 2px;
    }
    .nav_right {
        position: absolute;
        right: 16px;
        top: 16px;

        a {
            margin-left: -9px;
        }
    }
`

const Nav = () => {
    return (
        <NavBox>
            <div className="nav_left ">
                <a href="/"><b>BR</b> Architects</a>
            </div>
            <div className="nav_right ">
                <a href="/projects">Projects</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
            </div>
        </NavBox>
    )
}

export default Nav;