import React from 'react';

import FakeImg from './FakeImg';

const Post = () => {
    return (
        <div>
            <h2>TITLE HEADING</h2>
            <h5>Title description, Dec 7, 2017</h5>
            <FakeImg height='200'>Image</FakeImg>
            <p>Some text..</p>
            <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
            <br />
        </div>
    );
};

export default Post;