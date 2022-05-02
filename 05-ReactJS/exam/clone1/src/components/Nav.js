/** 패키지 참조 */
import React from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom"
const NavBar = styled.nav`
    display: flex;
    font-size: 15px;
    font-weight: 500;
    letter-spacing: 4px;
    position: fixed;
    top:0;
    width: 100%;
    height: 55px;
    z-index: 1;
    background-color:#FFFFFF;
    box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);

    a {
        text-decoration: none;
        color: black;
        padding: 8px 16px;
        text-align: center;

        &:hover {
            background-color: #CCCCCC;
        }
    }
    .nav_left {
        margin: 8px 18px;
        width: auto;
        display: block;
        text-align: center;
    }

    .nav_right {
        position: absolute;
        right: 15px;
        top: 16px;
        a {
            margin-left: -7.5px;
        }
    }
`

const Nav = () => {
    return (
        <NavBar>
            <NavLink className="nav_left" to="/">Gourmet au Catering</NavLink>
            <div className="nav_right">
                <NavLink to="/">About</NavLink>
                <NavLink to="/">Menu</NavLink>
                <NavLink to="/">Contact</NavLink>
            </div>
        </NavBar>
    )
}

export default Nav;