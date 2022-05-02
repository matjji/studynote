import React from 'react';
import styled from 'styled-components';

import FakeImg from './FakeImg';

const SideContainer = styled.div`
    box-sizing: border-box;
    width: 360px;
    flex: none;
    border-right: 1px solid #d5d5d5;
    background-color: #eeeeee;
    padding: 20px;
`;

const Side = () => {
    return (
        <SideContainer>
            <h2>About Me</h2>
            <h5>Photo of me:</h5>
            <FakeImg height='200'>Image</FakeImg>
            <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
            <h3>More Text</h3>
            <p>Lorem ipsum dolor sit ame.</p>
            <FakeImg height='60'>Image</FakeImg>
            <br />
            <FakeImg height='60'>Image</FakeImg>
            <br />
            <FakeImg height='60'>Image</FakeImg>
        </SideContainer>
    );
};

export default Side;