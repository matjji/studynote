import React from "react";
import styled from "styled-components"

const MainImgBox = styled.div`
    float: left;
    box-sizing: border-box;
    margin-bottom: 16px;
    width: 24.9%;
    padding: 0 8px;
    .text {
        font-size: 15px;
        position: absolute;
        padding: 8px 15px;
        background-color: #000000;
        color: #f1f1f1
    }
    .img{
        img{
            width: 100%;
        }
    }
`

const MainImg = ({src, children}) => {
    return (
        <MainImgBox>
            <div className="text">
                <p>{children}</p>
            </div>
            <div className="img">
                <img src={src} alt={children} />
            </div>
        </MainImgBox>
    )
}

export default MainImg;