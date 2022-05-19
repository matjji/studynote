/**
* @filename SwiperBanner.js
* @description openAPI인 Swiperjs 를 사용하여 이미지 슬라이드 구현
* @author: 신지섭 (pon0304616@gmail.com)
*/
//패키지
import React from 'react';
import styled from "styled-components";
import axios from "axios";
//이미지
import prev from "../img/btn_banner_prev.png"
import next from "../img/btn_banner_next.png"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css/autoplay';

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const SwiperBox = styled.div`
    .imgslide {
        display: block;
        width: 100%;
        height: 697px;
        img {
            display: block;
            margin: 0 auto;
            height: 697px;
        }
    }
    .swiper-button-prev,
    .swiper-button-next {
        width: 109px;
        height: 109px;
        &:after {
            display: none;
        }
    }
    .swiper-button-prev {
        background: url(${prev}) no-repeat;
    }
    .swiper-button-next {
        background: url(${next}) no-repeat;
    }
    .swiper-pagination-bullet {
        background: #fff;
        height: 10px;
        width: 10px;
        opacity: 1;
        margin: 0 10px !important;
        &:hover {
            transform: scale(1.3, 1.3);
            background: #301d17;
            transition: all 0.1s ease-in-out
        }
    }
    .swiper-pagination-bullet-active {
        background: #301d17;
        width: 13px;
        height: 13px;
    }
`
const SwiperBanner = () => {
    const [imgData, setImgData] = React.useState();
    React.useEffect(() => {
        (async() => {
            try {
                const response = await axios.get("http://localhost:3001/img")
                setImgData(response.data)
            } catch(e) {
                console.error(e)
                alert("서버 연결 실패")
            }
        })();
    }, [])
    return (
        <SwiperBox>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                autoplay={{ delay: 3000 }}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
            { 
                imgData && (
                    imgData.map((v, i) => {
                        return(
                        <SwiperSlide key={i}>
                            <a href="/" className="imgslide" style={{background: `${v.background}`}}>
                                <img src={v.src} alt="img"/>
                            </a>
                        </SwiperSlide>
                        )
                    })
                )
            }
        </Swiper>
      </SwiperBox>
    );
};

export default SwiperBanner;