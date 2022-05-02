/**
 * @filename: index.js
 * @description: 프로그램 시작점.
 *               전역 스타일(GlobalStyles)과 전역 SEO 구성(Meta),
 *               라우팅 범위를 설정(BrowserRouter)하고 프로그램을 시작(App)한다.
 * @author: Lee K.H (leekh4232@gmail.com)
 */

/** 패키지 참조 */
import React from 'react';
import ReactDOM from 'react-dom/client';
// 전역 스타일 정의
import GlobalStyles from './GlobalStyles';
// SEO 구현
import Meta from './Meta';
// 라우팅 범위 설정
import { BrowserRouter } from 'react-router-dom';
// 프로그램 시작
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <GlobalStyles />
        <Meta />
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);