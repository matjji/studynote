/**
 * @filename: Meta.js
 * @description: <head>태그 내의 SEO 처리 및 기본 참조 리소스 명시
 * @author: 신지섭
 */

/** 패키지 참조 */
// 기본 참조 객체
import React from 'react';
// SEO 처리 기능 패키지
import { Helmet, HelmetProvider } from 'react-helmet-async';
import sample from "./0.jpg"
/**
 * SEO 처리 컴포넌트
 * @param props
 * @returns {JSX.Element}
 */
const Meta = (props) => {
    return (
        <HelmetProvider>
            <Helmet>
                <meta charSet='utf-8' />
                {/* SEO 태그 */}
                <title>{props.title}</title>
                <meta name='description' content={props.description} />
                <meta name='keywords' content={props.keywords} />
                <meta name='author' content={props.author} />
                <meta property='og:type' content='website' />
                <meta property='og:title' content={props.title} />
                <meta property='og:description' content={props.description} />
                <meta property='og:image' content={props.image} />
                <meta property='og:url' content={props.url} />
                <link rel="shortcut icon" href={props.image} type="image/png"/>
                <link rel="icon" href={props.image} type="image/png"/>
                {/* <meta property='og:image' content={props.image} /> */}
            </Helmet>
        </HelmetProvider>
    );
};

/**
 * props에 대한 기본값 설정
 * @type {{keywords: string, author: string, description: string, title: string, url: string}}
 */
Meta.defaultProps = {
    title: 'React OpenAPI 연동',
    description: 'React.js로 만든 Redux확용 카카오 검색 OpenAPI 연동 예제 입니다.',
    keywords: 'React,Redux,Kakao,OpenAPI',
    author: '신지섭',
    image: sample,
    // image: '기본이미지변수적용',
    url: window.location.href
};

export default Meta;