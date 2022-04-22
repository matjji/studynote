import React from 'react';
import Content from './Content'
import Footer from './Footer'
import Header from './Header'

const Container = () => {
    return(
    <div id="contaienr">
        <Header />
        <hr />
        <Content />
        <hr />
        <Footer />
    </div>
    )
}

export default Container;