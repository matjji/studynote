import React from 'react';
import styled from 'styled-components'
import search from "../img/icon_search.png"

const EtcBox = styled.nav`
    position: absolute;
    top: 39px;
    right: 0;
    li {
        display: inline-block;
        padding-left: 20px;
        line-height: 54px;
        height: 54px;
        a {
            display: block;
            font-size: 11px;
            color: #4a3d39;
        }
        &:last-child {
            padding-left: 26px;
            a {
                height: 54px;
                width: 54px;
                text-indent: -20000px;
                background: url(${search}) no-repeat;
            }
        }
    }
`
const Etc = () => {
    const onClick = (e) => {
        e.preventDefault();
    }
    return (
        <EtcBox>
            <ul>
                <li>
                    <a href="/">고객센터</a>
                </li>
                <li>
                    <a href="/">CONTACTUS</a>
                </li>
                <li>
                    <a href="/" onClick={onClick}>search</a>
                </li>
            </ul>
        </EtcBox>
    );
};

export default Etc;