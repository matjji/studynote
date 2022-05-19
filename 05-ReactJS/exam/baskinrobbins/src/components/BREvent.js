/**
* @filename Main.js
* @description BR Event 부분을 openAPI인 swiperjs를 사용하여 구현.
* @author: 신지섭 (pon0304616@gmail.com)
*/
//패키지
import React from 'react';
import axios from 'axios'
import styled from "styled-components"
//이미지
import event from '../img/h_event.png'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
const BREventBox = styled.section`
    width: 1200px;
    height: 721px;
    margin: 0 auto;
    h3 {
        width: 1200px;
        height: 23px;
        padding: 100px 0 50px 0;
        img {
            display: block;
            margin: 0 auto;
        }
    }
    .swiper {
        height: 484px;
    }
    .eventImg {
        display: block;
        width: 286px;
    }
    a {
        display: block;
        &:last-child {
            p {
                width: 288px;
                &:first-child {
                    margin: 22px 0 8px 0;
                }
                &:nth-child(2) {
                    font-size: 17px;
                    color: #2f231c;
                    line-height: 23px;
                    font-weight: 600;
                }
                &:last-child {
                    margin: 11px 0;
                    font-weight: 300;
                    color: #948780;
                }
            }
        }
    }
    .swiper-pagination-bullet {
        background: #948780;
        height: 8px;
        width: 8px;
        opacity: 1;
        margin: 0 10px !important;
        &:hover {
            transform: scale(1.25, 1.25);
            background: #301d17;
            transition: all 0.1s ease-in-out
        }
    }
    .swiper-pagination-bullet-active {
        background: #301d17;
        width: 10px;
        height: 10px;
        &:hover{
            transform: scale(1, 1);
        }
    }
`

const BREvent = () => {
    const [eventImg, setEventImg] = React.useState();
    React.useEffect(() => {
        (async () => {
            try{
                const response = await axios.get("http://localhost:3001/order")
                setEventImg(response.data)
            } catch(e) {
                console.error(e);
                alert('서버 요청 실패')
            }
        })();
    },[])
    return (
        <BREventBox>
            <h3>
                <img src={event} alt="BrEvent"/>
            </h3>
            <Swiper
                slidesPerView={4}
                spaceBetween={17}
                slidesPerGroup={4}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
            { 
                eventImg && (
                    eventImg.map((v, i) => {
                        return(
                        <SwiperSlide key={i}>
                            <a href="/" className="eventImg">
                                <img src={v.src} alt="img"/>
                            </a>
                            <a href="/">
                                <p>
                                    <img src={v.stit} alt="kind of event"/>
                                </p>
                                <p>{v.comment}</p>
                                <p>상시진행</p>
                            </a>
                        </SwiperSlide>
                        )
                    })
                )
            }
        </Swiper>
        </BREventBox>
    );
};

export default BREvent;