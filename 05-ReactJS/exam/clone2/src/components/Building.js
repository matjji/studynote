import React from "react";
import styled from "styled-components"
import data from "../data";
const BuildingBox = styled.header`
    display: block;
    max-width: 1500px;
    min-width: 500px;
    height: 100%;
    margin: auto;
    position: relative;

    img {
        width: 100%;
        height: 100%;
    }
    .building_text {
        font-family: "Segoe UI","Arial","sans-serif";
        position: absolute;
        top: 50%;
        left: 50%;
        font-size: 36px;
        text-align: center;
        color: #f1f1f1;
        letter-spacing: 4px;
        text-shadow: 0 2px 5px rgba(0,0,0,0.3), 0 2px 10px rgba(0,0,0,0.2);
        transform: translate(-50%, -25%);
    }
    b {
        padding: 8px 16px;
        background-color: rgba(0,0,0,0.75);
    }
`

const Building = () => {
    return(
        <BuildingBox>
            <img className="building_img" src={data.architect.img} alt="Architecture" />
            <div className="building_text">
                <h1>
                <span><b>BR</b> </span>
                    <span>Architects</span>
                </h1>
            </div>
        </BuildingBox>
    )
}

export default Building;