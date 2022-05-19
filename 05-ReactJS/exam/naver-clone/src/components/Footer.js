import React from 'react';
import styled from 'styled-components'

const FooterBox = styled.div`
    margin: auto;
    max-width: 768px;
    min-width: 460px;
    padding: 30px 0 15px 0;
    text-align: center;
    font-size: 11px;
    a {
        text-decoration: none;
        color: #5e5e5e
    }
    ul {
        margin-bottom: 9px;
        li {
            display: inline;
            padding: 0 3px 0 7px;
            text-decoration: none;
            border-left: 1px solid #CFCFCF;
            font-size: 12px;
            &:first-child {
                border: none;
            }
        }
    }
    strong {
        font-weight: bolder;
        font-size: 13px;
    }
    address {
        a {
            color: #5e5e5e;
            font-weight: bolder;
            &:hover {
                text-decoration: underline;
                color: #00C850;
            }
        }
    }
    .logo_sm {
        position: relative;
        display: inline-block;
        width: 63px;
        height: 12px;
        background: url(https://static.nid.naver.com/images/ui/login/pc_sp_login_190522.png) no-repeat;
        background-position: -242px 0;
        background-size: 460px auto;
    }
    .pad-left {
        font:9px;
        padding-left: 4px;
    }
`
const Footer = () => {
    return (
        <FooterBox>
            <ul>
                <li> <a href="http://policy.naver.com/rules/service.html">이용약관</a> </li>
                <li><strong><a href="http://policy.naver.com/policy/privacy.html">개인정보처리방침</a></strong></li>
                <li><a href="http://policy.naver.com/rules/disclaimer.html">책임의 한계와 법적고지</a></li>
                <li><a href="https://help.naver.com/support/alias/membership/p.membership/p.membership_26.naver" target="_blank">회원정보 고객센터</a> </li>
            </ul>
            <address>
                <span className="pad-left">
                    <a href="http://www.naver.com" className="logo_sm">
                    </a>
                </span>
                <span className="pad-left">Copyright</span>
                <a href="http://www.navercorp.com/">NAVER Corp.</a>
                <span>All Rights Reserved</span>
            </address>
        </FooterBox>
    );
};

export default Footer;