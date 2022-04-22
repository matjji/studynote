import React from 'react';
import Main from './Main'
import Sidebar from './Sidebar'

const Content = () => {
    return (
    <div id="content">
        <Sidebar/>
        <hr />
        <Main />
    </div>
    )
}

export default Content;