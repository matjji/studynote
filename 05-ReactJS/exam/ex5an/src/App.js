import React from 'react';
import { Routes, Route } from 'react-router-dom';

import styled from 'styled-components';

import Header from './components/Header';
import Navbar from './components/Navbar';
import Side from './components/Side';
import Footer from './components/Footer';

import Main from './pages/Main';

const ContentContainer = styled.section`
    max-width: 1200px;
    margin: auto;
    background-color: #fff;
    border-left: 1px solid #d5d5d5;
    border-right: 1px solid #d5d5d5;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
`;

const App = () => {
    return (
        <div>            
            <Header />
            <Navbar />
            <ContentContainer>
                <Side />
                <Routes>
                    <Route path='/' export={true} element={<Main />} />
                </Routes>
            </ContentContainer>
            <Footer />
        </div>
    );
};

export default App;