import React from "react";
import styled from "styled-components"

const AboutImgBox = styled.div`
    box-sizing: border-box;
    float:left;
    width: 24.9%;
    padding: 16px 8px;

    h3 {
        font-size: 22px;
        font-weight: 400;
    }
    p {
        font-size: 14.5px;
    }
    .job {
        color: #666666;
        padding: 8px 0 12px 0;
    }
    img {
        width: 100%;
    }
    button {
        width: 100%;
        border: none;
        cursor: pointer;
        padding: 8px 16px;
        text-align: center;
        font-size: 17px;
        font-weight: 400;
        margin-top: 16px;
    }
`

const AboutImg = ({img, name, position, desc}) => {
    return(
        <AboutImgBox>
            <img src={img} alt={name} />
            <h3>{name}</h3>
            <p className="job">{position}</p>
            <p>{desc}</p>
            <p>
                <button>Contact</button>
            </p>
        </AboutImgBox>
    )
}

export default AboutImg;