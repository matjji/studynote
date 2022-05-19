/**
* @filename Main.js
* @description body에 CSS 적용하기 위해 createGlovalStyle 사용
* @author: 신지섭 (pon0304616@gmail.com)
*/
import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
    /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
    */

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        box-sizing: border-box;
        color: #483834;
        font-size: 13px;
        font-family: "Nanum Barun Gothic", "나눔고딕", "Nanum Gothic", "돋움", "Dotum", sans-serif;
        line-height: 1.5;
        letter-spacing: -.05em;
    }
    a {
        text-decoration: none;
    }
    ul, li {
        list-style: none;
    }
    .clear:after {
        float: none;
        display: block;
        clear: both;
        content: '';
    }
`

export default Global