import React from "react";
import styled from "styled-components"

const TitleBox = styled.div`
    font-family: "Segoe UI","Arial","sans-serif";
    font-size: 24px;
    padding: 30px 16px;
    margin-left:15px;
    & > h3 {
        padding: 16px 0px;
        margin: 10px 0;
        border-bottom: 1px solid rgba(0,0,0,0.1);
    }
`

const Title = ({props}) => {
    return (
        <TitleBox>
            <h3>{props}</h3>
        </TitleBox>
    )
}

export default Title;