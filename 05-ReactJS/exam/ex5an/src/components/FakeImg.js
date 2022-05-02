import React from 'react';
import styled from 'styled-components';

const FakeImgContainer = styled.div`
    background-color: #aaa;
    width: auto;
    padding: 20px;
    height: ${props => `${props.height}px`}
`;

const FakeImg = ({height, children}) => {
    return (
        <FakeImgContainer height={height}>
            {children}
        </FakeImgContainer>
    );
};

export default FakeImg;