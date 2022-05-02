import React from 'react';
import styled from 'styled-components';

import Post from '../components/Post';

const MainContainer = styled.div`
    flex: 0 1 auto;
    background-color: white;
    padding: 20px;
`;

const Main = () => {
    return (
        <MainContainer>
            <Post />
            <Post />
        </MainContainer >
    );
};

export default Main;